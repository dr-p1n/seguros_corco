import React from 'react';
import { Heart, Activity, MessageCircle, Shield, ArrowRight } from 'lucide-react';

const WA_VIDA = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20hablar%20con%20un%20asesor%20sobre%20Seguro%20de%20Vida%20con%20Corco%20Seguros.';
const WA_SALUD = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20hablar%20con%20un%20asesor%20sobre%20Seguro%20de%20Salud%20con%20Corco%20Seguros.';

export default function CoberturaConsultiva() {
  return (
    <section id="coberturas" className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'hsl(40, 30%, 97%)' }}>
      <div className="max-w-screen-xl mx-auto section-padding">
        {/* Section label */}
        <div className="mb-12 md:mb-16">
          <div className="section-label mb-4">
            <Shield size={14} />
            Lo que cubrimos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 text-navy-dark mb-4" style={{ fontWeight: 800, color: 'hsl(222, 52%, 14%)' }}>
            Cobertura consultiva.<br />
            <span style={{ color: 'hsl(222, 47%, 20%)' }}>Asesoría real.</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl" style={{ color: 'hsl(220, 15%, 45%)', lineHeight: 1.75 }}>
            Nuestro enfoque principal: las coberturas que más impactan la vida de una familia.
          </p>
        </div>

        {/* Two primary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Seguro de Vida */}
          <div
            className="relative rounded-3xl overflow-hidden card-hover group"
            style={{ background: 'linear-gradient(145deg, hsl(222, 52%, 14%) 0%, hsl(222, 47%, 22%) 100%)' }}
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 80% 20%, hsl(33, 63%, 62%) 0%, transparent 50%)`,
              }}
            />
            <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full min-h-[340px]">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(212, 148, 58, 0.2)', border: '1px solid rgba(212, 148, 58, 0.3)' }}
              >
                <Heart size={26} style={{ color: 'hsl(38, 72%, 68%)' }} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full text-xs font-600" style={{ backgroundColor: 'rgba(212,148,58,0.15)', color: 'hsl(38, 72%, 68%)', fontWeight: 600 }}>
                  Cobertura principal
                </div>
                <h3 className="text-2xl md:text-3xl font-700 text-white mb-3" style={{ fontWeight: 700 }}>
                  Seguro de Vida
                </h3>
                <p className="text-white/65 text-base leading-relaxed" style={{ lineHeight: 1.75 }}>
                  La tranquilidad de saber que los tuyos están protegidos sin importar lo que pase.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={WA_VIDA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-600 text-sm transition-all duration-200 active:scale-95 group-hover:gap-3"
                  style={{
                    backgroundColor: 'hsl(33, 63%, 52%)',
                    color: 'white',
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle size={16} />
                  Hablar con un asesor
                  <ArrowRight size={14} className="opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Seguro de Salud */}
          <div
            className="relative rounded-3xl overflow-hidden card-hover group"
            style={{ background: 'linear-gradient(145deg, hsl(215, 42%, 22%) 0%, hsl(210, 38%, 30%) 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, hsl(33, 63%, 62%) 0%, transparent 50%)`,
              }}
            />
            <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full min-h-[340px]">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(212, 148, 58, 0.2)', border: '1px solid rgba(212, 148, 58, 0.3)' }}
              >
                <Activity size={26} style={{ color: 'hsl(38, 72%, 68%)' }} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full text-xs font-600" style={{ backgroundColor: 'rgba(212,148,58,0.15)', color: 'hsl(38, 72%, 68%)', fontWeight: 600 }}>
                  Cobertura principal
                </div>
                <h3 className="text-2xl md:text-3xl font-700 text-white mb-3" style={{ fontWeight: 700 }}>
                  Seguro de Salud
                </h3>
                <p className="text-white/65 text-base leading-relaxed" style={{ lineHeight: 1.75 }}>
                  Acceso a la atención que mereces, sin sorpresas al momento de necesitarla.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={WA_SALUD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-600 text-sm transition-all duration-200 active:scale-95 group-hover:gap-3"
                  style={{
                    backgroundColor: 'hsl(33, 63%, 52%)',
                    color: 'white',
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle size={16} />
                  Hablar con un asesor
                  <ArrowRight size={14} className="opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom note */}
        <p className="mt-8 text-center text-sm" style={{ color: 'hsl(220, 15%, 60%)' }}>
          Evaluamos tu situación personal antes de recomendarte cualquier cobertura.
        </p>
      </div>
    </section>
  );
}