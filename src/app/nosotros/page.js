import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="w-full">
      {/* Encabezado */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conoce más sobre Publimeta S.A.S, tu aliado en publicidad en Villavicencio.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Fundada en 2010, Publimeta nació con la visión de transformar el panorama publicitario en Villavicencio. 
                Lo que comenzó como una pequeña agencia con un equipo de tres personas, ha crecido hasta convertirse en 
                una de las empresas líderes en soluciones publicitarias en la región.
              </p>
              <p className="text-gray-600">
                A lo largo de estos años, hemos trabajado con cientos de empresas locales, ayudándoles a aumentar su 
                visibilidad y conectar con su audiencia a través de estrategias publicitarias efectivas y creativas.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 relative h-64 w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                  <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-2">Nuestras oficinas en Villavicencio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misión, Visión y Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Misión</h3>
              <p className="text-gray-600">
                Proporcionar soluciones publicitarias innovadoras y efectivas que ayuden a nuestros clientes a alcanzar 
                sus objetivos de negocio, contribuyendo al crecimiento económico de Villavicencio y la región.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como la agencia de publicidad líder en el Meta, destacando por nuestra creatividad, 
                innovación y resultados medibles, expandiendo nuestra presencia a nivel nacional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Valores</h3>
              <div className="text-gray-800">
              <ul className="text-gray-600 space-y-2">
                <li>• Creatividad e innovación</li>
                <li>• Compromiso con los resultados</li>
                <li>• Integridad y transparencia</li>
                <li>• Trabajo en equipo</li>
                <li>• Mejora continua</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un grupo de profesionales apasionados por la publicidad y el marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Nombre del Miembro</h3>
                <p className="text-gray-600">Cargo en la empresa</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}