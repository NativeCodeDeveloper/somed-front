"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/Componentes/RevealOnScroll";
import { OffersCarousel } from "@/components/ui/offers-carousel";
import { useRouter } from "next/navigation";

const FALLBACK_CASE_IMAGE = "/ac3.png";

// Fallback items while backend loads or if empty
const fallbackItems = [
  {
    id: "f1",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
    title: "Examen visual completo",
    subtitle: "Evaluación integral para determinar el estado de tu salud ocular.",
    badge: "Disponible",
    fallbackUrl: FALLBACK_CASE_IMAGE,
  },
  {
    id: "f2",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    title: "Receta de lentes",
    subtitle: "Determinación precisa de tu graduación visual con alta tecnología.",
    badge: "Fonasa",
    fallbackUrl: FALLBACK_CASE_IMAGE,
  },
  {
    id: "f3",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
    title: "Control visual infantil",
    subtitle: "Atendemos pacientes desde los 5 años en cada etapa de su desarrollo visual.",
    badge: "Niños",
    fallbackUrl: FALLBACK_CASE_IMAGE,
  },
  {
    id: "f4",
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
    title: "Detección de cataratas",
    subtitle: "Diagnóstico temprano con equipos de última generación.",
    badge: "Especialidad",
    fallbackUrl: FALLBACK_CASE_IMAGE,
  },
];

export default function Seccion3() {
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  // PRESCRIPTION: DO NOT ALTER BACKEND FETCH LOGIC
  async function listarPublicacionesSeccion3() {
    try {
      const res = await fetch(`${API}/publicaciones/seleccionarPublicaciones`, {
        method: "GET",
        headers: { Accept: "application/json" },
        mode: "cors",
      });

      if (!res.ok) {
        console.error("No se han podido listar publicaciones.");
        setListaPublicaciones([]);
        return [];
      }

      const publicaciones = await res.json();
      setListaPublicaciones(publicaciones);
      return publicaciones;
    } catch (err) {
      console.error("Problema al consultar backend desde la vista frontend:" + err);
      setListaPublicaciones([]);
      return [];
    }
  }

  useEffect(() => {
    listarPublicacionesSeccion3();
  }, []);

  // Map backend data to carousel item format
  const backendItems = listaPublicaciones.map((pub) => ({
    id: pub.id_publicaciones ?? pub.id,
    imageUrl: `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${pub.imagenPublicaciones_primera}/card`,
    title: pub.descripcionPublicaciones,
    subtitle: pub.nombrePublicaciones || "Consulta Oftalmológica SOMED",
    badge: "SOMED",
    fallbackUrl: FALLBACK_CASE_IMAGE,
  }));

  const carouselItems = backendItems.length > 0 ? backendItems : fallbackItems;

  return (
    <>
      {/* Publications / Services Carousel Section */}
      <section id="publicaciones" className="scroll-mt-24 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">

          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-4">

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
                Publicaciones y Servicios
              </h2>
            </div>
            <p className="text-lg text-slate-500 max-w-2xl mb-12">
              Descubre nuestros servicios, novedades y todo lo que necesitas saber sobre salud visual. Cada publicación es actualizada directamente desde nuestro sistema.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <OffersCarousel
              offerTitle="Salud visual para toda la familia"
              offerSubtitle="Atendemos desde los 5 años. Fonasa $6.600 · Particular $20.000"
              ctaText="Agendar consulta"
              onCtaClick={() => router.push("/agendaProfesionales")}
              items={carouselItems}
            />
          </RevealOnScroll>

        </div>
      </section>

      {/* Agenda CTA Bottom Block */}
      <section id="agenda" className="bg-white py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
          <RevealOnScroll>
            <div
              className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-lg sm:px-12"
              style={{ backgroundColor: "#4DBFBF" }}
            >
              <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
              <div
                className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: "#2a9d9d" }}
              />

              <div className="relative z-10">
                <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white mb-6">
                  Agenda tu hora de consulta oftalmológica
                </h2>
                <p className="mx-auto max-w-xl text-lg text-white/90 mb-10">
                  Reserva tu evaluación visual hoy. Atendemos Fonasa ($6.600) y Particular ($20.000). Cuidamos tu visión con tecnología y calidez humana.
                </p>
                <Link
                  href="/agendaProfesionales"
                  className="inline-flex rounded-full bg-white px-8 py-4 font-bold transition hover:bg-slate-50 hover:scale-105 shadow-md"
                  style={{ color: "#4DBFBF" }}
                >
                  Agenda tu hora aquí
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
