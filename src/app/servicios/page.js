"use client";

import Image from "next/image";
import Link from "next/link";

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Publicidad Digital",
      descripcion: "Estrategias de marketing digital para aumentar la visibilidad de tu marca en el entorno online. Incluye gestión de redes sociales, campañas de Google Ads, SEO y más.",
      imagen: "/globe.svg"
    },
    {
      id: 2,
      titulo: "Vallas Publicitarias",
      descripcion: "Diseño e instalación de vallas publicitarias en puntos estratégicos de Villavicencio para maximizar la visibilidad de tu marca en espacios físicos de alto tránsito.",
      imagen: "/window.svg"
    },
    {
      id: 3,
      titulo: "Diseño Gráfico",
      descripcion: "Creación de identidad visual, logotipos, material impreso y digital que comunica efectivamente los valores de tu marca y conecta con tu audiencia.",
      imagen: "/file.svg"
    },
    {
      id: 4,
      titulo: "Marketing de Contenidos",
      descripcion: "Desarrollo de contenido relevante y valioso para atraer y retener a una audiencia claramente definida, con el objetivo de impulsar acciones rentables de los clientes.",
      imagen: "/file.svg"
    },
    {
      id: 5,
      titulo: "Branding",
      descripcion: "Creación y gestión de la identidad de marca, incluyendo posicionamiento, personalidad, valores y elementos visuales que la distinguen en el mercado.",
      imagen: "/globe.svg"
    },
    {
      id: 6,
      titulo: "Campañas Publicitarias",
      descripcion: "Diseño e implementación de campañas publicitarias integrales que combinan diferentes medios y canales para maximizar el alcance y efectividad.",
      imagen: "/window.svg"
    }
  ];

  return (
    <div className="w-full">
      {/* Encabezado */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ofrecemos soluciones publicitarias integrales adaptadas a las necesidades específicas de tu negocio en Villavicencio.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de servicios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <Image 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  width={64} 
                  height={64} 
                  className="mb-4" 
                />
                <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctanos para discutir cómo podemos adaptar nuestros servicios a las necesidades específicas de tu negocio.
          </p>
          <Link href="/contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Solicitar información
          </Link>
        </div>
      </section>
    </div>
  );
}