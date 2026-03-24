import React from 'react';
import { Users, Quote } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

export default function HeritageSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'hsl(40, 30%, 97%)' }}>
      <div className="max-w-screen-xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy — left */}
          <div>
            <div className="section-label mb-6">
              <Users size={14} />
              Quiénes somos
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 mb-8 leading-tight" style={{ fontWeight: 800, color: 'hsl(222, 52%, 14%)', lineHeight: 1.15 }}>
              Dos generaciones.{' '}
              <span style={{ color: 'hsl(33, 63%, 52%)' }}>Una promesa.</span>
            </h2>

            {/* Pull quote */}
            <div
              className="relative pl-6 mb-8 py-1"
              style={{ borderLeft: '3px solid hsl(33, 63%, 52%)' }}
            >
              <Quote size={20} className="absolute -top-1 -left-1 opacity-20" style={{ color: 'hsl(33, 63%, 52%)' }} />
              <p className="text-base md:text-lg font-500 italic" style={{ fontWeight: 500, color: 'hsl(222, 47%, 24%)', lineHeight: 1.7 }}>
                El seguro bien explicado cambia vidas.
              </p>
            </div>

            <div className="space-y-5 prose-warm">
              <p className="text-base md:text-[15px] leading-relaxed" style={{ color: 'hsl(220, 15%, 38%)', lineHeight: 1.85 }}>
                Corco Seguros nació de una convicción simple: que el seguro bien explicado cambia vidas. Lo que comenzó como el trabajo de un padre se convirtió en la vocación de un hijo. Hoy, llevamos décadas asesorando a familias panameñas — no como una póliza más en una cartera, sino como el asesor que te llama cuando cambia tu situación, que te explica lo que nadie más lee, y que está ahí cuando más lo necesitas.
              </p>
              <p className="text-base md:text-[15px] leading-relaxed" style={{ color: 'hsl(220, 15%, 38%)', lineHeight: 1.85 }}>
                No somos una aseguradora. Somos la persona de confianza que te ayuda a elegir bien.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'hsl(220, 20%, 88%)' }}>
              {[
                { value: '2', unit: 'generaciones', label: 'de familia panameña' },
                { value: '20+', unit: 'años', label: 'asesorando familias' },
                { value: '100%', unit: 'directo', label: 'sin intermediarios' },
              ]?.map((stat) => (
                <div key={`stat-${stat?.unit}`}>
                  <div className="text-2xl font-800 font-tabular" style={{ fontWeight: 800, color: 'hsl(222, 52%, 14%)' }}>
                    {stat?.value}
                    <span className="text-sm font-600 ml-1" style={{ color: 'hsl(33, 63%, 52%)', fontWeight: 600 }}>
                      {stat?.unit}
                    </span>
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'hsl(220, 15%, 55%)' }}>
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder photo placeholder — right */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative background shape */}
            <div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{
                background: 'linear-gradient(145deg, hsl(33, 63%, 82%) 0%, hsl(222, 47%, 82%) 100%)',
                transform: 'rotate(3deg) scale(0.96)',
              }}
            />
            {/* Photo placeholder card */}
            <div
              className="relative w-full max-w-sm lg:max-w-none rounded-3xl overflow-hidden aspect-[4/5]"
              style={{
                boxShadow: '0 32px 64px -16px rgba(30, 45, 74, 0.25)',
              }}
            >
              <AppImage
                src="/assets/images/no_image.png"
                alt="Fundadores de Corco Seguros — padre e hijo, dos generaciones de asesores panameños"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(30, 45, 74, 0.6) 0%, transparent 50%)',
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-600 text-sm" style={{ fontWeight: 600 }}>
                  Familia Corco
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  Fundadores · Panamá
                </p>
              </div>

              {/* Placeholder label */}
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-xs font-600"
                style={{
                  backgroundColor: 'rgba(212, 148, 58, 0.9)',
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                }}
              >
                Foto próximamente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}