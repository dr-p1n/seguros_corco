'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { MessageCircle, Heart, ExternalLink } from 'lucide-react';

const WA_FOOTER = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20información%20sobre%20los%20seguros%20de%20Corco%20Seguros.';

const footerLinks = [
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function FooterSection() {
  return (
    <footer
      id="footer"
      style={{ background: 'linear-gradient(180deg, hsl(222, 52%, 14%) 0%, hsl(222, 55%, 10%) 100%)' }}
    >
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <AppLogo size={40} />
              <div>
                <div className="font-800 text-white text-base" style={{ fontWeight: 800 }}>
                  Corco Seguros
                </div>
                <div className="text-white/40 text-xs" style={{ fontWeight: 400 }}>
                  Panamá
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}
            >
              Familia. Protección. Confianza.
            </p>
            <a
              href={WA_FOOTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle size={16} />
              💬 Escríbenos directo
            </a>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.12em' }}>
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={`footer-link-${link.href}`}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'hsl(38, 72%, 68%)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.12em' }}>
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>WhatsApp</p>
                <a
                  href={WA_FOOTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-500 transition-colors duration-200 flex items-center gap-1.5"
                  style={{ color: '#25D366', fontWeight: 500 }}
                >
                  +507 60-00-0000
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Ubicación</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                  Ciudad de Panamá, Panamá
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Horario</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                  Lun – Vie · 8:00 am – 5:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-screen-xl mx-auto section-padding py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Corco Seguros. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* [PLACEHOLDER] Privacy policy link */}
            <a
              href="#"
              className="text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)'; }}
            >
              Política de Privacidad
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Hecho con <Heart size={10} className="inline" style={{ color: 'hsl(33, 63%, 52%)' }} /> en Panamá
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}