"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, Glasses, CalendarClock } from "lucide-react";
import RevealOnScroll from "@/Componentes/RevealOnScroll";

const services = [
  {
    id: "examen",
    title: "Examen oftalmológico completo",
    desc: "Evaluación visual integral para determinar el estado de tu salud ocular y obtener la receta de lentes precisa y adaptada a tus necesidades.",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    id: "lentes",
    title: "Receta de lentes",
    desc: "Determinación precisa de tu graduación visual con equipos de última tecnología, para lentes de aro o de contacto.",
    icon: <Glasses className="h-6 w-6" />,
  },
  {
    id: "seguimiento",
    title: "Seguimiento visual",
    desc: "Acompañamiento continuo de tu salud visual en cada etapa de la vida, desde los 5 años de edad hasta la adultez.",
    icon: <CalendarClock className="h-6 w-6" />,
  },
];

export default function Seccion1() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-slate-50 py-20 text-slate-800 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <RevealOnScroll className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(77,191,191,0.85), rgba(77,191,191,1))",
              boxShadow: "0 10px 30px rgba(77,191,191,0.25)",
            }}
          >
            <Eye className="h-8 w-8" />
          </div>

          <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Nuestros Servicios
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Realizamos exámenes oftalmológicos completos para cuidar tu salud
            visual con un enfoque integral y personalizado. Atendemos a niños y
            adultos con la misma dedicación y profesionalismo.
          </p>
        </RevealOnScroll>

        <div className="mx-auto max-w-5xl space-y-4">
          {services.map((item, index) => {
            const isHovered = hoveredItem === item.id;
            const isFeatured = index === 0;

            return (
              <RevealOnScroll key={item.id}>
                <div
                  className="group relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <article
                    className={`relative overflow-hidden rounded-[2rem] border bg-white transition-all duration-300 ease-in-out ${isHovered
                        ? "border-[rgba(77,191,191,0.45)] shadow-xl"
                        : "border-slate-200/80 hover:border-[rgba(77,191,191,0.28)]"
                      }`}
                    style={{
                      boxShadow: isHovered
                        ? "0 18px 45px rgba(15, 23, 42, 0.08), 0 8px 24px rgba(77,191,191,0.12)"
                        : "0 8px 24px rgba(15, 23, 42, 0.04)",
                    }}
                  >
                    <div
                      className={`transition-all duration-300 ${isHovered ? "min-h-[170px]" : "min-h-[128px]"
                        }`}
                    >
                      {isHovered && (
                        <>
                          <div className="absolute left-4 top-4 h-6 w-6">
                            <div
                              className="absolute left-0 top-0 h-0.5 w-4"
                              style={{ backgroundColor: "#4DBFBF" }}
                            />
                            <div
                              className="absolute left-0 top-0 h-4 w-0.5"
                              style={{ backgroundColor: "#4DBFBF" }}
                            />
                          </div>

                          <div className="absolute bottom-4 right-4 h-6 w-6">
                            <div
                              className="absolute bottom-0 right-0 h-0.5 w-4"
                              style={{ backgroundColor: "#4DBFBF" }}
                            />
                            <div
                              className="absolute bottom-0 right-0 h-4 w-0.5"
                              style={{ backgroundColor: "#4DBFBF" }}
                            />
                          </div>
                        </>
                      )}

                      <div className="flex h-full flex-col justify-between gap-6 px-6 py-6 md:flex-row md:items-center md:px-8">
                        <div className="flex flex-1 items-start gap-4 md:gap-5">
                          <div
                            className={`mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 ${isHovered ? "scale-105" : ""
                              }`}
                            style={{
                              backgroundColor: "#4DBFBF",
                              boxShadow: isHovered
                                ? "0 10px 24px rgba(77,191,191,0.28)"
                                : "0 4px 14px rgba(77,191,191,0.22)",
                            }}
                          >
                            {item.icon}
                          </div>

                          <div className="flex-1">
                            <h3
                              className={`font-bold leading-tight transition-colors duration-300 ${isFeatured
                                  ? "text-2xl md:text-3xl"
                                  : "text-xl md:text-2xl"
                                } ${isHovered ? "text-slate-900" : "text-slate-900"
                                }`}
                            >
                              {item.title}
                            </h3>

                            <p
                              className={`mt-2 max-w-3xl text-sm leading-relaxed transition-all duration-300 md:text-base ${isHovered
                                  ? "text-slate-700 opacity-100"
                                  : "text-slate-500 opacity-95"
                                }`}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 md:justify-end">
                          <Link
                            href="/agendaProfesionales"
                            className="inline-flex items-center text-sm font-semibold text-slate-900 transition-colors duration-300 hover:text-teal-500 md:text-base"
                          >
                            Saber más
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>

                          <div
                            className={`hidden md:flex items-center justify-center rounded-full transition-all duration-300 ${isHovered
                                ? "translate-x-0 opacity-100"
                                : "translate-x-2 opacity-0"
                              }`}
                            style={{ color: "#4DBFBF" }}
                          >
                            <ArrowRight className="h-7 w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}