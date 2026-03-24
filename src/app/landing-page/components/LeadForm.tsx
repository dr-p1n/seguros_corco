'use client';

import React from 'react';
import { Lock, Clock, ChevronDown } from 'lucide-react';

// [GUÍA PLACEHOLDER] — Lead magnet form. No submit logic in v1.
// Backend integration point: connect form submission to CRM or email list here.

const coberturaOptions = [
  'Seguro de Vida',
  'Seguro de Salud',
  'Seguro de Auto',
  'Seguro de Incendio',
  'Seguro de Viaje',
  'Seguro de Contenido',
  'No estoy seguro — quiero asesoría',
];

export default function LeadForm() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto section-padding">
        <div className="max-w-2xl mx-auto">
          {/* Frosted/locked card — lead magnet placeholder */}
          <div
            className="relative rounded-3xl overflow-hidden mb-8"
            style={{
              background: 'linear-gradient(135deg, hsl(222, 52%, 14%) 0%, hsl(215, 42%, 24%) 100%)',
              boxShadow: '0 24px 48px -12px rgba(30, 45, 74, 0.35)',
            }}
          >
            {/* Background shimmer */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at 70% 30%, hsl(33, 63%, 62%) 0%, transparent 60%)`,
              }}
            />

            <div className="relative z-10 p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(212, 148, 58, 0.2)', border: '1px solid rgba(212, 148, 58, 0.3)' }}
              >
                <Lock size={26} style={{ color: 'hsl(38, 72%, 68%)' }} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div
                  className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full text-xs font-600"
                  style={{ backgroundColor: 'rgba(212,148,58,0.2)', color: 'hsl(38, 72%, 68%)', fontWeight: 600 }}
                >
                  <Clock size={11} />
                  Próximamente
                </div>
                <h3 className="text-lg md:text-xl font-700 text-white mb-1.5" style={{ fontWeight: 700 }}>
                  Guía gratuita: Cómo elegir el seguro correcto en Panamá
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {/* [GUÍA PLACEHOLDER] */}
                  Una guía práctica para familias panameñas. Disponible pronto.
                </p>
              </div>
            </div>
          </div>

          {/* Form shell */}
          <div
            className="rounded-3xl p-8 md:p-10 border"
            style={{
              backgroundColor: 'white',
              borderColor: 'hsl(220, 20%, 90%)',
              boxShadow: '0 4px 20px -8px rgba(30, 45, 74, 0.08)',
            }}
          >
            <h3 className="text-xl font-700 mb-1.5" style={{ fontWeight: 700, color: 'hsl(222, 52%, 14%)' }}>
              ¿Quieres que te contactemos?
            </h3>
            <p className="text-sm mb-8" style={{ color: 'hsl(220, 15%, 50%)' }}>
              Déjanos tus datos y un asesor se comunica contigo en menos de 24 horas.
            </p>

            {/* [GUÍA PLACEHOLDER] — Form fields, no submit logic in v1 */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e?.preventDefault()}>
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-600" style={{ fontWeight: 600, color: 'hsl(222, 47%, 20%)' }}>
                  Nombre completo <span style={{ color: 'hsl(0, 72%, 55%)' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. María González"
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    borderColor: 'hsl(220, 20%, 88%)',
                    color: 'hsl(222, 47%, 14%)',
                    backgroundColor: 'hsl(220, 20%, 98%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(33, 63%, 52%)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 148, 58, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(220, 20%, 88%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-600" style={{ fontWeight: 600, color: 'hsl(222, 47%, 20%)' }}>
                  WhatsApp <span style={{ color: 'hsl(0, 72%, 55%)' }}>*</span>
                </label>
                <p className="text-xs" style={{ color: 'hsl(220, 15%, 55%)' }}>
                  Incluye el código de país. Ej. +507 6000-0000
                </p>
                <input
                  type="tel"
                  placeholder="+507 6000-0000"
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200"
                  style={{
                    borderColor: 'hsl(220, 20%, 88%)',
                    color: 'hsl(222, 47%, 14%)',
                    backgroundColor: 'hsl(220, 20%, 98%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(33, 63%, 52%)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 148, 58, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(220, 20%, 88%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-600" style={{ fontWeight: 600, color: 'hsl(222, 47%, 20%)' }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200"
                  style={{
                    borderColor: 'hsl(220, 20%, 88%)',
                    color: 'hsl(222, 47%, 14%)',
                    backgroundColor: 'hsl(220, 20%, 98%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(33, 63%, 52%)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 148, 58, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(220, 20%, 88%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Coverage type dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-600" style={{ fontWeight: 600, color: 'hsl(222, 47%, 20%)' }}>
                  ¿Qué tipo de cobertura te interesa?
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none px-4 py-3 pr-10 rounded-xl text-sm border outline-none transition-all duration-200 cursor-pointer"
                    style={{
                      borderColor: 'hsl(220, 20%, 88%)',
                      color: 'hsl(222, 47%, 14%)',
                      backgroundColor: 'hsl(220, 20%, 98%)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'hsl(33, 63%, 52%)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 148, 58, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'hsl(220, 20%, 88%)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Selecciona una opción</option>
                    {coberturaOptions?.map((opt) => (
                      <option key={`opt-${opt}`} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: 'hsl(220, 15%, 55%)' }}
                  />
                </div>
              </div>

              {/* Submit — UI only, no logic */}
              <button
                type="submit"
                disabled
                className="w-full py-4 rounded-xl font-700 text-sm transition-all duration-200 mt-2 cursor-not-allowed opacity-60"
                style={{
                  backgroundColor: 'hsl(222, 47%, 20%)',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                Enviar — Disponible próximamente
              </button>

              <p className="text-xs text-center" style={{ color: 'hsl(220, 15%, 60%)' }}>
                Tus datos son confidenciales y solo se usan para contactarte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}