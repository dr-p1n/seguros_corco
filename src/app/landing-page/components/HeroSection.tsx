import React from 'react';
import { MessageCircle, FileText, ChevronDown } from 'lucide-react';

const WA_CONSULTA = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20agendar%20una%20consulta%20gratuita%20con%20Corco%20Seguros.';
const WA_COTIZAR = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20cotizar%20una%20cobertura%20directa%20con%20Corco%20Seguros.';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden gradient-hero"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Warm gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'hsl(33, 63%, 52%)' }} />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ background: 'hsl(215, 60%, 45%)' }} />
      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto section-padding w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/8" style={{ backdropFilter: 'blur(8px)' }}>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ backgroundColor: 'hsl(33, 63%, 62%)' }} />
            <span className="text-white/80 text-xs font-600 tracking-wider uppercase" style={{ fontWeight: 600, letterSpacing: '0.08em' }}>
              Asesoría personalizada en Panamá
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-white leading-tight mb-6" style={{ fontWeight: 800, lineHeight: 1.08 }}>
            Corco Seguros.{' '}
            <span className="block" style={{ color: 'hsl(38, 72%, 68%)' }}>
              Protegemos lo que
            </span>
            más importa.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl" style={{ lineHeight: 1.75 }}>
            Dos generaciones de familia panameña asesorando a familias panameñas. Porque el seguro no es un trámite — es una promesa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_CONSULTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 rounded-2xl"
            >
              <MessageCircle size={18} />
              Agenda una consulta gratuita
            </a>
            <a
              href={WA_COTIZAR}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-4 rounded-2xl"
            >
              <FileText size={18} />
              Cotizar cobertura directa
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {[
              '2 generaciones de experiencia',
              'Atención directa — sin intermediarios',
              'Respuesta en menos de 24h',
            ]?.map((signal) => (
              <div key={`trust-${signal}`} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(33, 63%, 62%)' }} />
                <span className="text-white/60 text-sm font-500" style={{ fontWeight: 500 }}>
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase" style={{ letterSpacing: '0.1em' }}>Explorar</span>
        <ChevronDown size={18} className="text-white animate-bounce" />
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: 'block' }}>
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 50C1200 44 1320 32 1380 26L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(40, 30%, 97%)" />
        </svg>
      </div>
    </section>
  );
}