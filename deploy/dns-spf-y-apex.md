# Runbook DNS — añadir SPF y levantar el apex

**Verificado el 2026-09-23** contra 1.1.1.1, 8.8.8.8 y el panel autoritativo
(`ns1/ns2.dns-parking.com`). Dos tareas independientes. La 1 es riesgo cero y
arregla la entregabilidad del correo hoy mismo. La 2 necesita un proveedor
externo y se puede hacer otro día sin que la 1 dependa de ella.

---

## Corrección previa: el punto de partida no es el que decía la v3

Dos afirmaciones que circulaban y son falsas:

1. **«Existe un registro SPF.»** No existe. El apex sólo tiene un TXT, el de
   verificación de Google. Comprobado en tres resolvers. El README de
   `apex-redirect/` lo listaba como registro existente a preservar: era un error,
   ya corregido.
2. **«El apex devuelve NXDOMAIN.»** No. Devuelve **NOERROR / NODATA**: la zona
   existe, es autoritativa en Hostinger y sirve MX y TXT sin problema. Lo único
   que le falta es un registro A. Es una posición mejor que la descrita — no hay
   que recrear la zona ni mover nameservers, sólo añadir registros.

### Zona tal y como está hoy

| Tipo  | Nombre              | Valor                                            |
|-------|---------------------|--------------------------------------------------|
| NS    | `@`                 | ns1.dns-parking.com / ns2.dns-parking.com         |
| MX    | `@`                 | mx1.hostinger.com (5) / mx2.hostinger.com (10)    |
| TXT   | `@`                 | `google-site-verification=a6c5c…4v4`              |
| TXT   | `_dmarc`            | `v=DMARC1; p=none`                                |
| CNAME | `hostingermail-a/b/c._domainkey` | …dkim.mail.hostinger.com (DKIM)      |
| CNAME | `autodiscover`      | autodiscover.mail.hostinger.com                   |
| CNAME | `autoconfig`        | autoconfig.mail.hostinger.com                     |
| CNAME | `www`               | seguros-corco-17i.pages.dev                       |
| **A** | **`@`**             | **— no existe. Ésta es la que falta.**            |
| **TXT**| **`@` (SPF)**      | **— no existe. Ésta es la otra que falta.**       |

Todo lo que aparece arriba con valor **se queda como está**. No se edita, no se
borra, no se reordena.

---

## Tarea 1 — Añadir el SPF (5 minutos, sin riesgo)

Sin SPF, el correo saliente de `ramon@seguroscorco.com` tiende a spam y el DMARC
(`p=none`) no tiene contra qué alinear: DKIM firma, pero SPF no responde.

**hPanel → Dominios → seguroscorco.com → DNS / Nameservers → Zona DNS**

Añadir **un** registro:

| Campo  | Valor                                        |
|--------|----------------------------------------------|
| Tipo   | `TXT`                                        |
| Nombre | `@`                                          |
| Valor  | `v=spf1 include:_spf.mail.hostinger.com ~all` |
| TTL    | por defecto (3600)                           |

Notas sobre el valor, por si el panel discute:

- El include está verificado: `_spf.mail.hostinger.com` resuelve hoy a
  `v=spf1 include:relay.mail.hostinger.com include:relay.mailchannels.net ~all`.
  Toda la cadena suma 3 lookups DNS, muy por debajo del límite de 10.
- `~all` (softfail) y no `-all` (hardfail). Softfail es lo correcto mientras
  DMARC esté en `p=none` y nadie haya auditado si algún sistema externo envía
  como el dominio. Endurecer a `-all` es una decisión posterior, con datos.
- Si el panel exige comillas alrededor del valor, ponlas. Si no, no.

### ⛔ La única forma de romper esto

**Nunca puede haber dos registros TXT en `@` que empiecen por `v=spf1`.** Dos SPF
invalidan el SPF entero — RFC 7208 — y el correo empieza a caer en spam de golpe.
Antes de guardar, mira la lista de TXT del apex: debe haber exactamente uno de
verificación de Google, y el nuevo de SPF. Si ya hubiera otro `v=spf1`, **no
añadas el tuyo**: para, y consolídalos en uno solo.

El TXT de `google-site-verification` convive sin problema con el SPF. Son dos TXT
distintos en el mismo nombre y eso es legal y normal.

### Verificación

```bash
dig @1.1.1.1 seguroscorco.com TXT +short
```

Debe devolver **dos** líneas: la de Google y la de SPF. Y confirma que el correo
sigue intacto:

```bash
dig @1.1.1.1 seguroscorco.com MX +short
```

Sin cambios: `5 mx1.hostinger.com.` y `10 mx2.hostinger.com.`

---

## Tarea 2 — Levantar el apex

`seguroscorco.com` a secas no lleva a ninguna parte. Rompe también el enlace
*Website* de la ficha de Google Business, que apunta al apex.

Cloudflare Pages no puede tomarlo: exige controlar la zona DNS completa, y la
zona vive en Hostinger. Un CNAME en el apex es ilegal (coexistiría con SOA y NS).
Hace falta una **IP estable** a la que apuntar un registro A. De ahí el proyecto
ya preparado en `deploy/apex-redirect/`.

**Netlify, no Vercel.** El plan Hobby de Vercel prohíbe el uso comercial y esto es
el sitio de una correduría. El plan gratuito de Netlify sí lo permite. El
`netlify.toml` ya está escrito en la carpeta.

### Orden de los pasos — importa

Primero Netlify, después el registro A. Si añades el A antes de que Netlify tenga
el dominio configurado, durante un rato el apex resolverá a un servidor que no
sabe quién eres: 404 y sin certificado. Al revés no pasa nada.

1. **Netlify → Add new site → Import an existing project → GitHub →
   `dr-p1n/seguros_corco`.**
   - Base directory: `deploy/apex-redirect`
   - Build command: *vacío*
   - Publish directory: `.`

   No hace falta un repo aparte. Es la misma carpeta del repo del sitio,
   desplegada a otro sitio.

2. **Site configuration → Domain management → Add a domain → `seguroscorco.com`.**

   **Sólo el apex.** No añadas `www` aquí: `www` vive en Cloudflare Pages y
   añadirlo a Netlify rompería el sitio en producción.

3. **Netlify mostrará el registro A a crear.** El valor esperado es
   `75.2.60.5` (su balanceador de apex, confirmado hoy por DNS), pero **copia el
   que muestre el panel**: es el único autoritativo para tu proyecto y estas IPs
   cambian.

4. **hPanel → Zona DNS**, añadir:

   | Campo  | Valor                        |
   |--------|------------------------------|
   | Tipo   | `A`                          |
   | Nombre | `@`                          |
   | Valor  | *(la IP del panel de Netlify)* |
   | TTL    | por defecto                  |

5. **Esperar el certificado.** Netlify emite Let's Encrypt automáticamente en
   cuanto el A apunta a ellos — de minutos a una hora. Hasta entonces
   `https://seguroscorco.com` dará error de TLS. Es esperado, no lo toques.

### Verificación

```bash
dig @1.1.1.1 seguroscorco.com A +short              # la IP de Netlify
curl -sI https://seguroscorco.com/ | head -3        # 301 → www
curl -sI https://seguroscorco.com/nosotros | grep -i location   # conserva la ruta
dig @1.1.1.1 seguroscorco.com MX +short             # el correo, sin tocar
```

El último es el que de verdad importa. Si los MX siguen ahí, no se rompió nada.

### Rollback

Borrar el registro A en Hostinger. El apex vuelve a NODATA — exactamente donde
está hoy — y nada más se ve afectado. Netlify puede quedarse desplegado sin
consecuencias.

---

## Lo que este runbook deliberadamente no hace

- **No mueve el DNS a Cloudflare.** Es la solución más limpia a largo plazo
  (apex nativo, sin proveedor extra, cuenta que ya existe) y tiene su propio
  checklist en `deploy/migracion-dns-cloudflare.md`. Pero implica reimportar los
  seis registros de correo, y ese riesgo no se justifica para arreglar un
  redirect. Si algún día se hace, este runbook queda obsoleto: el apex sale
  gratis y Netlify sobra.
- **No endurece el DMARC.** `p=none` se queda hasta que el SPF lleve semanas
  publicado y haya informes que mirar.
- **No toca la ficha de Google Business.** No hace falta: se arregla sola en
  cuanto el apex resuelva.
