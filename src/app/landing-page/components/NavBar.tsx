'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const WA_GENERAL = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20información%20sobre%20seguros%20con%20Corco%20Seguros.';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <div className="flex flex-col leading-none">
              <span
                className={`font-800 text-base tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
                style={{ fontWeight: 800 }}
              >
                Corco Seguros
              </span>
              <span
                className={`text-xs font-500 transition-colors duration-300 ${
                  scrolled ? 'text-slate-400' : 'text-white/60'
                }`}
                style={{ fontWeight: 500 }}
              >
                Panamá
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <a
                key={`nav-${link?.href}`}
                href={link?.href}
                className={`px-4 py-2 rounded-lg text-sm font-600 transition-all duration-200 hover:bg-white/10 ${
                  scrolled
                    ? 'text-slate-600 hover:text-navy hover:bg-slate-50' :'text-white/80 hover:text-white'
                }`}
                style={{ fontWeight: 600 }}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-navy hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
            <span className="font-700 text-navy text-base" style={{ fontWeight: 700 }}>
              Menú
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-50 transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="px-4 py-6 flex flex-col gap-1">
            {navLinks?.map((link) => (
              <a
                key={`mobile-nav-${link?.href}`}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-600 text-slate-700 hover:text-navy hover:bg-slate-50 transition-all duration-200"
                style={{ fontWeight: 600 }}
              >
                {link?.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={16} />
                Escríbenos por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}