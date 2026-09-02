# Redirección del apex — seguroscorco.com → www.seguroscorco.com

Hoy `seguroscorco.com` (sin www) devuelve **NXDOMAIN**: no resuelve. Quien lo
escriba a mano, o llegue desde la ficha de Google Business, no ve nada.

Cloudflare Pages no puede tomar el apex porque exige controlar la zona DNS
completa, y mover el DNS a Cloudflare significaría reimportar los registros de
correo de Hostinger — el riesgo que este proyecto no acepta. Vercel publica una
IP estable para apex que cualquier DNS externo puede apuntar, así que se lleva
el apex sin tocar el correo.

## Qué hace

Un proyecto Vercel cuyo único trabajo es responder **301** a `www`,
preservando ruta y query. `seguroscorco.com/articulos/x?a=1` →
`https://www.seguroscorco.com/articulos/x?a=1`.

## Pasos

1. **Sube esta carpeta a un repositorio propio** (por ejemplo
   `seguros_corco_apex`). No la mezcles con el repo del sitio: ese despliega a
   Cloudflare Pages y este a Vercel.

2. **Importa el repo en Vercel.** Framework Preset: `Other`. Sin build command,
   sin output directory. El `vercel.json` hace todo.

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
   - `TXT` @ → `v=spf1 include:_spf.mail.hostinger.com ~all`
   - `TXT` @ → `google-site-verification=…` (verificación de Google)
   - `TXT` _dmarc
   - `CNAME` hostingermail-a/b/c._domainkey (DKIM)
   - `CNAME` autodiscover / autoconfig
   - `CNAME` www → seguros-corco-17i.pages.dev

   En particular: **nunca añadas un segundo registro TXT que empiece con
   `v=spf1`**. Dos SPF en el mismo nombre invalidan el SPF y el correo empieza
   a caer en spam.

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
