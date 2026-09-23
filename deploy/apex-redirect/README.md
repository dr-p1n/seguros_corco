# Redirección del apex — seguroscorco.com → www.seguroscorco.com

Hoy `seguroscorco.com` (sin www) no lleva a ninguna parte. Quien lo escriba a
mano, o llegue desde la ficha de Google Business, no ve nada.

Precisión, porque una versión anterior de este documento se equivocaba: el apex
**no** devuelve NXDOMAIN, devuelve **NOERROR / NODATA**. La zona existe y es
autoritativa en Hostinger — sirve MX y TXT correctamente. Lo único que le falta
es un registro A.

Cloudflare Pages no puede tomar el apex porque exige controlar la zona DNS
completa, y mover el DNS a Cloudflare significaría reimportar los registros de
correo de Hostinger — el riesgo que este proyecto no acepta. Vercel publica una
IP estable para apex que cualquier DNS externo puede apuntar, así que se lleva
el apex sin tocar el correo.

## Qué hace

Un proyecto Vercel cuyo único trabajo es responder **301** a `www`,
preservando ruta y query. `seguroscorco.com/articulos/x?a=1` →
`https://www.seguroscorco.com/articulos/x?a=1`.


## Antes de elegir proveedor

La carpeta trae `vercel.json` y `netlify.toml`. Sirve cualquiera de los dos,
pero no son equivalentes en licencia:

| | Plan gratuito | Uso comercial | Cuenta nueva |
|---|---|---|---|
| **Netlify** | Starter | **Sí** | Sí (entra con GitHub) |
| **Vercel** | Hobby | **No** — Hobby es sólo personal | Sí (entra con GitHub) |
| **Cloudflare** | — | Sí | **No, ya la tienes** |

`seguroscorco.com` es el sitio de un negocio, así que el plan Hobby de Vercel
queda fuera de sus términos. Netlify gratuito no tiene ese problema.

La tercera vía es mover el DNS del dominio a Cloudflare, donde ya vive el sitio:
el apex funcionaría de forma nativa, sin proveedor extra ni cuenta nueva. A
cambio hay que reimportar los registros de correo de Hostinger, y ése es el
riesgo que este proyecto viene evitando desde el principio.

## Pasos

1. **Sube esta carpeta a un repositorio propio** (por ejemplo
   `seguros_corco_apex`). No la mezcles con el repo del sitio: ese despliega a
   Cloudflare Pages y este a Vercel.

2. **Importa el repo.** No hace falta un repo aparte: tanto Netlify como Vercel
   permiten desplegar desde una subcarpeta. Elige `dr-p1n/seguros_corco` y fija
   el directorio base en `deploy/apex-redirect`. Sin build command, sin output
   directory: el archivo de configuración hace todo.

3. **Añade el dominio en Vercel:** Project → Settings → Domains → `seguroscorco.com`.
   Añade **sólo el apex**. No añadas `www` — ese sigue viviendo en Cloudflare
   Pages y añadirlo aquí rompería el sitio.

4. **Vercel te mostrará un registro A con una IP.** Cópiala de ahí, no de una
   guía ni de memoria: Vercel ha cambiado esa IP y la del panel es la única
   autoritativa para tu proyecto.

5. **En Hostinger** (hPanel → Dominios → DNS Zone) añade:

   | Tipo | Nombre | Valor                    | TTL         |
   |------|--------|--------------------------|-------------|
   | A    | `@`    | *(la IP que dio Vercel)* | por defecto |

6. **No toques nada más.** Estos registros son producción y el correo depende
   de ellos:

   - `MX` @ → mx1.hostinger.com / mx2.hostinger.com
   - `TXT` @ → `google-site-verification=…` (verificación de Google)
   - `TXT` _dmarc
   - `CNAME` hostingermail-a/b/c._domainkey (DKIM)
   - `CNAME` autodiscover / autoconfig
   - `CNAME` www → seguros-corco-17i.pages.dev

   ⚠️ **Ojo:** este listado incluía un registro SPF (`v=spf1 include:_spf.mail.hostinger.com ~all`)
   como si ya existiera. **No existe** — verificado el 2026-09-23 contra 1.1.1.1,
   8.8.8.8 y 9.9.9.9. Hay que añadirlo, y tiene su propio procedimiento en
   [`../dns-spf-y-apex.md`](../dns-spf-y-apex.md). No lo des por hecho.

   Cuando lo añadas: **nunca puede haber dos registros TXT que empiecen con
   `v=spf1`** en el mismo nombre. Dos SPF invalidan el SPF entero y el correo
   empieza a caer en spam.

## Verificación

Espera a que propague (minutos a una hora) y comprueba:

```bash
dig @1.1.1.1 seguroscorco.com A +short          # debe devolver la IP de Vercel
curl -sI https://seguroscorco.com/ | head -3     # debe decir 301 -> www
curl -sI https://seguroscorco.com/nosotros | grep -i location   # conserva la ruta
dig @1.1.1.1 seguroscorco.com MX +short          # el correo, sin cambios
```

El último es el que importa: si los MX siguen ahí, el correo no se tocó.

## Efecto secundario

Arregla también la ficha de **Google Business**, cuyo campo *Website* apunta al
apex. En cuanto el apex resuelva, ese enlace deja de morir — sin editar la ficha.
