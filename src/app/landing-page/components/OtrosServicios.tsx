'use client';

import React from 'react';
import { Car, Flame, Plane, Package, MessageCircle, Layers } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const servicios = [
  {
    id: 'auto',
    icon: Car,
    titulo: 'Seguro de Auto',
    descripcion: 'Cobertura básica o todo riesgo. Tú decides el nivel de protección.',
    waMsg: 'Hola%2C%20quisiera%20solicitar%20una%20cotización%20de%20Seguro%20de%20Auto%20con%20Corco%20Seguros.',
  },
  {
    id: 'incendio',
    icon: Flame,
    titulo: 'Seguro de Incendio',
    descripcion: 'Protege tu hogar o negocio ante pérdidas estructurales.',
    waMsg: 'Hola%2C%20quisiera%20solicitar%20una%20cotización%20de%20Seguro%20de%20Incendio%20con%20Corco%20Seguros.',
  },
  {
    id: 'viaje',
    icon: Plane,
    titulo: 'Seguro de Viaje',
    descripcion: 'Emergencias médicas, cancelaciones y equipaje cubiertos donde estés.',
    waMsg: 'Hola%2C%20quisiera%20solicitar%20una%20cotización%20de%20Seguro%20de%20Viaje%20con%20Corco%20Seguros.',
  },
  {
    id: 'contenido',
    icon: Package,
    titulo: 'Seguro de Contenido',
    descripcion: 'Lo que está dentro también importa. Electrodomésticos, mobiliario, equipos.',
    waMsg: 'Hola%2C%20quisiera%20solicitar%20una%20cotización%20de%20Seguro%20de%20Contenido%20con%20Corco%20Seguros.',
  },
];

export default function OtrosServicios() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto section-padding">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label mb-4">
            <Layers size={14} />
            Servicios complementarios
          </div>
          <h2 className="text-3xl md:text-4xl font-800 mb-3" style={{ fontWeight: 800, color: 'hsl(222, 52%, 14%)' }}>
            También te cubrimos en lo cotidiano.
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'hsl(220, 15%, 45%)', lineHeight: 1.75 }}>
            Coberturas prácticas para el día a día — gestionadas con el mismo cuidado.
          </p>
        </div>

        {/* Four lighter service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            const waUrl = `https://wa.me/50760000000?text=${servicio.waMsg}`;
            return (
              <div
                key={`servicio-${servicio.id}`}
                className="group relative flex flex-col rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'hsl(220, 20%, 90%)',
                  boxShadow: '0 2px 12px -4px rgba(30, 45, 74, 0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'hsl(33, 63%, 72%)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px -8px rgba(30, 45, 74, 0.14)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'hsl(220, 20%, 90%)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px -4px rgba(30, 45, 74, 0.08)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: 'hsl(40, 80%, 94%)', color: 'hsl(33, 63%, 42%)' }}
                >
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-700 mb-2" style={{ fontWeight: 700, color: 'hsl(222, 52%, 14%)' }}>
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(220, 15%, 50%)', lineHeight: 1.7 }}>
                    {servicio.descripcion}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-600 transition-all duration-200 hover:gap-2.5"
                    style={{ color: 'hsl(33, 63%, 42%)', fontWeight: 600 }}
                  >
                    <MessageCircle size={14} />
                    Solicitar cotización
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}