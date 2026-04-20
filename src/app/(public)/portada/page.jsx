"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Users, CalendarCheck } from "lucide-react";
import HeroSection from "@/components/ui/hero-section-9";

export default function Portada() {
  const [dataPortada, setDataPortada] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  async function cargarPortada() {
    try {
      const res = await fetch(
        `${API}/carruselPortada/seleccionarCarruselPortada`,
        {
          method: "GET",
          headers: { Accept: "application/json" },
          mode: "cors",
        }
      );

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setDataPortada(data);
      } else {
        setDataPortada([]);
      }
    } catch (err) {
      console.error("No se ha podido cargar datos del carrusel original", err);
    }
  }

  useEffect(() => {
    cargarPortada();
  }, []);

  const heroData = {
    title: (
      <>
        Consulta Oftalmológica{" "}
        <span style={{ color: "#4DBFBF" }}>profesional</span>{" "}
        y personalizada
      </>
    ),

    subtitle:
      "Somos un equipo dedicado a cuidar tu salud visual, ajustando cada detalle de tu visión. Exámenes completos, receta de lentes y atención desde los 5 años de edad.",

    actions: [
      {
        text: "Agendar consulta",
        onClick: () => router.push("/agendaProfesionales"),
        variant: "default",
        className:
          "rounded-full px-8 text-white font-bold shadow-md hover:opacity-90",
        style: {
          backgroundColor: "#4DBFBF",
          borderColor: "#4DBFBF",
        },
      },

      {
        text: "Ver servicios",
        onClick: () => router.push("/#servicios"),
        variant: "outline",
        className:
          "rounded-full px-8 font-bold border-slate-300 hover:border-[#4DBFBF] hover:text-[#4DBFBF]",
      },
    ],

    stats: [
      {
        value: "Desde 5 años",
        label: "Atendemos niños y adultos",
        icon: <Users className="h-5 w-5 text-[#4DBFBF]" />,
      },

      {
        value: "Fonasa",
        label: "$6.600 | Particular $20.000",
        icon: <CalendarCheck className="h-5 w-5 text-[#4DBFBF]" />,
      },

      {
        value: "Alta tecnología",
        label: "Equipos siempre actualizados",
        icon: <Eye className="h-5 w-5 text-[#4DBFBF]" />,
      },
    ],

    images: [
      "/somedlogo.png",
      "/img1.webp",
      "/img2.webp",
    ],
  };

  return (
    <div id="inicio">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  );
}