"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner principal */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transformamos Ideas en Impacto Visual</h1>
            <p className="text-xl md:text-2xl mb-8">Soluciones de publicidad que conectan con tu audiencia en Villavicencio</p>
            <Link href="/contacto" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>

      {/* Descripción de la empresa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Publimeta</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos una agencia de publicidad con amplia experiencia en el mercado de Villavicencio. 
              Nos especializamos en crear soluciones publicitarias efectivas que ayudan a nuestros 
              clientes a destacar en un mercado competitivo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
              <p className="text-gray-600">Desarrollamos ideas innovadoras que capturan la atención y generan recordación.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia Local</h3>
              <p className="text-gray-600">Conocemos el mercado de Villavicencio y sabemos cómo llegar a tu audiencia objetivo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-gray-600">Nos enfocamos en estrategias que generan impacto real y medible para tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de publicidad adaptadas a las necesidades de tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Image src="/globe.svg" alt="Publicidad Digital" width={64} height={64} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Publicidad Digital</h3>
              <p className="text-gray-600 mb-4">Estrategias para redes sociales, SEO, SEM y más.</p>
              <Link href="/servicios" className="text-blue-600 font-medium hover:text-blue-800">
                Saber más →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Image src="/window.svg" alt="Vallas Publicitarias" width={64} height={64} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vallas Publicitarias</h3>
              <p className="text-gray-600 mb-4">Impacto visual en los puntos estratégicos de la ciudad.</p>
              <Link href="/servicios" className="text-blue-600 font-medium hover:text-blue-800">
                Saber más →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Image src="/file.svg" alt="Diseño Gráfico" width={64} height={64} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diseño Gráfico</h3>
              <p className="text-gray-600 mb-4">Creación de identidad visual y materiales publicitarios.</p>
              <Link href="/servicios" className="text-blue-600 font-medium hover:text-blue-800">
                Saber más →
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/servicios" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas que han confiado en nosotros para sus estrategias publicitarias.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Publimeta transformó nuestra presencia en redes sociales. Nuestro alcance ha aumentado significativamente y hemos captado nuevos clientes."</p>
              <div>
                <p className="font-semibold">Carlos Rodríguez</p>
                <p className="text-gray-500 text-sm">Gerente, Restaurante El Llanero</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Las vallas publicitarias diseñadas por Publimeta han sido clave para aumentar el reconocimiento de nuestra marca en Villavicencio."</p>
              <div>
                <p className="font-semibold">Ana Martínez</p>
                <p className="text-gray-500 text-sm">Directora de Marketing, Centro Comercial Primavera</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"El equipo de Publimeta entendió perfectamente nuestras necesidades y creó una campaña que superó nuestras expectativas."</p>
              <div>
                <p className="font-semibold">Laura Gómez</p>
                <p className="text-gray-500 text-sm">Propietaria, Boutique Eleganza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos publicitarios.
          </p>
          <Link href="/contacto" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
