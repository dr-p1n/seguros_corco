import React from 'react';
import { MessageCircle, TableProperties, Info } from 'lucide-react';

const WA_TABLA = 'https://wa.me/50760000000?text=Hola%2C%20quisiera%20comparar%20las%20opciones%20de%20cobertura%20disponibles%20con%20Corco%20Seguros.';

const columnas = ['Renovación', 'Viaje', 'Catastrófico', 'Maternidad'];

const filas = [
  'Cobertura base',
  'Red de hospitales',
  'Copago',
  'Período de espera',
  'Límite anual',
  'Cobertura dental',
  'Emergencias internacionales',
  'Prima mensual estimada',
];

export default function TablaComparativa() {
  return (
    <section id="comparativa" className="py-20 md:py-28" style={{ backgroundColor: 'hsl(220, 20%, 97%)' }}>
      <div className="max-w-screen-xl mx-auto section-padding">
        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="section-label mb-4">
              <TableProperties size={14} />
              Comparativa de coberturas
            </div>
            <h2 className="text-3xl md:text-4xl font-800 mb-3" style={{ fontWeight: 800, color: 'hsl(222, 52%, 14%)' }}>
              Encuentra el plan que se ajusta a ti.
            </h2>
            <div
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-sm"
              style={{ backgroundColor: 'hsl(40, 80%, 94%)', color: 'hsl(33, 63%, 38%)' }}
            >
              <Info size={14} />
              <span className="font-600" style={{ fontWeight: 600 }}>
                Contenido de esta tabla se completará próximamente.
              </span>
            </div>
          </div>
          <a
            href={WA_TABLA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp self-start md:self-auto whitespace-nowrap"
          >
            <MessageCircle size={16} />
            Consultar por WhatsApp
          </a>
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: 'hsl(220, 20%, 88%)',
            boxShadow: '0 4px 20px -8px rgba(30, 45, 74, 0.10)',
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              {/* Header */}
              <thead>
                <tr style={{ backgroundColor: 'hsl(222, 47%, 20%)' }}>
                  <th
                    className="text-left px-6 py-4 text-sm font-600 text-white/60 w-48"
                    style={{ fontWeight: 600 }}
                  >
                    Característica
                  </th>
                  {columnas?.map((col) => (
                    <th
                      key={`col-${col}`}
                      className="text-center px-5 py-4 text-sm font-700 text-white"
                      style={{ fontWeight: 700 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body — placeholder rows */}
              <tbody>
                {filas?.map((fila, rowIdx) => (
                  <tr
                    key={`row-${fila}`}
                    style={{
                      backgroundColor: rowIdx % 2 === 0 ? 'white' : 'hsl(220, 20%, 98%)',
                      borderBottom: '1px solid hsl(220, 20%, 92%)',
                    }}
                  >
                    <td className="px-6 py-4 text-sm font-600" style={{ fontWeight: 600, color: 'hsl(222, 47%, 20%)' }}>
                      {fila}
                    </td>
                    {columnas?.map((col) => (
                      <td key={`cell-${fila}-${col}`} className="px-5 py-4 text-center">
                        {/* [PLACEHOLDER] — content populated in revision 1 */}
                        <div className="mx-auto h-5 rounded-md shimmer" style={{ width: `${48 + ((rowIdx * 17 + columnas?.indexOf(col) * 11) % 40)}px` }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div
            className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t"
            style={{ backgroundColor: 'hsl(40, 30%, 98%)', borderColor: 'hsl(220, 20%, 90%)' }}
          >
            <p className="text-xs" style={{ color: 'hsl(220, 15%, 55%)' }}>
              Los valores exactos varían según tu perfil y aseguradora. Contáctanos para una cotización precisa.
            </p>
            <a
              href={WA_TABLA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-600 whitespace-nowrap transition-all duration-200"
              style={{ color: '#25D366', fontWeight: 600 }}
            >
              <MessageCircle size={14} />
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}