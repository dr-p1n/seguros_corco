# Migración del DNS a Cloudflare — seguroscorco.com

**Qué cambia:** quién publica la zona DNS.
**Qué NO cambia:** dónde viven los buzones. El correo sigue en Hostinger,
por los mismos servidores. Cloudflare sólo publicará los MX que apuntan allí.

Verificado en vivo el 2026-09-02 contra los resolvers 1.1.1.1, 8.8.8.8 y 9.9.9.9.

---

## 1. Los registros que hay hoy

Estos nueve son los que deben existir en Cloudflare **antes** de tocar nada.
Cloudflare los importa solos al añadir el dominio; tu trabajo es verificar,
no teclear.

| Tipo | Nombre | Valor | Proxy |
|---|---|---|---|
| MX | `@` | `mx1.hostinger.com` (prioridad 5) | — |
| MX | `@` | `mx2.hostinger.com` (prioridad 10) | — |
| TXT | `@` | `google-site-verification=a6c5cge3g6E_5UsZqcNWPgjVCQlUlmYG6MIGr9kJ4v4` | — |
| TXT | `_dmarc` | `v=DMARC1; p=none` | — |
| CNAME | `hostingermail-a._domainkey` | `hostingermail-a.dkim.mail.hostinger.com` | **Gris (DNS only)** |
| CNAME | `hostingermail-b._domainkey` | `hostingermail-b.dkim.mail.hostinger.com` | **Gris (DNS only)** |
| CNAME | `hostingermail-c._domainkey` | `hostingermail-c.dkim.mail.hostinger.com` | **Gris (DNS only)** |
| CNAME | `autodiscover` | `autodiscover.mail.hostinger.com` | **Gris (DNS only)** |
| CNAME | `autoconfig` | `autoconfig.mail.hostinger.com` | **Gris (DNS only)** |
| CNAME | `www` | `seguros-corco-17i.pages.dev` | Naranja (lo pone Pages) |

> **La única forma de romper el correo aquí** es dejar en naranja (proxied) un
> CNAME de DKIM, autodiscover o autoconfig. Cloudflare a veces los importa
> proxeados. Revísalos uno por uno: los seis de correo van en **gris**.

## 2. El SPF que falta — añádelo

Hoy **no hay registro SPF publicado**, pese a que el handoff afirma que sí.
Comprobado contra tres resolvers. Sin SPF, el correo saliente de
`@seguroscorco.com` tiende a caer en spam y el DMARC no tiene contra qué alinear.

Añade un TXT nuevo:

| Tipo | Nombre | Valor |
|---|---|---|
| TXT | `@` | `v=spf1 include:_spf.mail.hostinger.com ~all` |

Ese `include` está verificado: resuelve a
`v=spf1 include:relay.mail.hostinger.com include:relay.mailchannels.net ~all`.

> **Nunca dos registros que empiecen con `v=spf1` en el mismo nombre.** Dos SPF
> invalidan el SPF entero. El TXT de google-site-verification convive sin
> problema porque no empieza así.

## 3. En Cloudflare

1. Entra con **julioernestolv@gmail.com**, la cuenta que ya sirve el sitio
2. **Add a site** → `seguroscorco.com` → plan **Free**
3. Cloudflare escanea Hostinger e importa lo que encuentra
4. **Compara la tabla del punto 1 registro por registro.** Añade lo que falte
5. Añade el SPF del punto 2
6. Pon en **gris** los seis registros de correo
7. Cloudflare te dará dos nameservers propios. Cópialos

**Nada de esto afecta al dominio todavía.** La zona en Cloudflare está inerte
hasta el paso 4. Puedes tomarte el tiempo que quieras verificando.

## 4. En Hostinger — el único paso irreversible

hPanel → Dominios → **Cambiar nameservers** → los dos de Cloudflare,
sustituyendo `ns1.dns-parking.com` y `ns2.dns-parking.com`.

Propaga entre minutos y 24 horas.

## 5. Cuando ya propagó: el apex

Con la zona en Cloudflare, el apex funciona de forma nativa:

- Pages → proyecto `seguros-corco` → **Custom domains** → añade `seguroscorco.com`
- Y una **Redirect Rule**: `seguroscorco.com/*` → `https://www.seguroscorco.com/$1`, 301

Así `www` sigue siendo la versión canónica y el apex deja de morir — lo que
además revive el enlace de tu ficha de Google Business sin editarla.

## 6. Verificación

```bash
dig @1.1.1.1 seguroscorco.com NS +short      # los de Cloudflare
dig @1.1.1.1 seguroscorco.com MX +short      # mx1/mx2.hostinger.com — INTACTOS
dig @1.1.1.1 seguroscorco.com TXT +short     # SPF + google-site-verification
dig @1.1.1.1 hostingermail-a._domainkey.seguroscorco.com CNAME +short
curl -sI https://seguroscorco.com/ | head -3 # 301 -> www
```

**Y lo que ninguna herramienta sustituye:** manda un correo de prueba desde
`ramon@seguroscorco.com` a una cuenta externa (Gmail), y otro de vuelta.
Mira las cabeceras: `spf=pass` y `dkim=pass`.

## 7. Si algo sale mal

Vuelve a poner `ns1.dns-parking.com` y `ns2.dns-parking.com` en Hostinger.
La zona original sigue ahí intacta; Hostinger no la borra al cambiar los
nameservers. La reversión propaga en el mismo plazo.

## 8. Después

`deploy/apex-redirect/` deja de hacer falta — era el plan B con Vercel o
Netlify. No lo borres hasta que el apex responda 301 desde Cloudflare.
