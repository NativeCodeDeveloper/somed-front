"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#servicios" },
  { label: "Servicios", href: "/#servicios-clinicos" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Agendar", href: "/agendaProfesionales" },
];

const externalLinks = [
  { label: "Portal Paciente", href: "#" },
  { label: "Preguntas Frecuentes", href: "#" },
  { label: "Términos y Condiciones", href: "#" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: MessageCircle,
  },
];

export default function FooterPremiumMedico() {
  return (
    <footer id="footer" className="relative overflow-hidden text-white pt-20 pb-12" style={{ backgroundColor: "#198289ff" }}>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 border-b pb-16" style={{ borderColor: "rgba(77,191,191,0.2)" }}>

          {/* Brand Info */}
          <div className="lg:col-span-4">
            {/* Brand / Logo */}
            <Link href="/" aria-label="Ir al inicio" className="group flex shrink-0 items-center gap-3 mb-6">
              <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/somedlogo.png"
                  alt="Logo Metaclinic"
                  width={190}
                  height={190}
                  priority
                  className="h-24 w-auto object-contain sm:h-30"
                />
              </div>
            </Link>

            <p className="text-white leading-relaxed max-w-sm mb-8">
              Cuidamos tu salud visual con profesionalismo, tecnología de última generación y un enfoque integral para toda la familia.
            </p>

            <div className="space-y-4 text-sm text-white">
              <a href="tel:+56988617307" className="flex items-center gap-3 transition hover:text-slate-200">
                <Phone className="h-5 w-5" style={{ color: "#4DBFBF" }} />
                +569 88617307
              </a>
              <a href="mailto:tmorellanamachuca@gmail.com" className="flex items-center gap-3 transition hover:text-slate-200>">
                <Mail className="h-5 w-5" style={{ color: "#4DBFBF" }} />
                tmorellanamachuca@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Kurt+Moller+523,+Linares,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition <hover:text-white>"
              >
                <MapPin className="h-5 w-5 shrink-0" style={{ color: "#4DBFBF" }} />
                Kurt Moller 523, Linares
                <span className="block text-slate-200">(entre Lautaro y Chacabuco)</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Column 1 */}
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Explorar</h4>
              <ul className="space-y-4">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white transition hover:text-slate-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal & Ayuda</h4>
              <ul className="space-y-4">
                {externalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white transition hover:text-slate-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Socials & Location */}
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Síguenos</h4>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:text-white"
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#4DBFBF'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; }}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              <div className="rounded-2xl overflow-hidden h-32 w-full mt-4">
                <iframe
                  title="Mapa ubicacion SOMED"
                  src="https://www.google.com/maps?q=Kurt+Moller+523,+Linares,+Chile&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full color opacity-70"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col gap-4 text-sm text-white md:flex-row md:items-center md:justify-between px-2">
          <p>© {new Date().getFullYear()} SOMED - Centro de Salud y Especialidades. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://nativecode.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-300 hover:text-white transition"
            >
              NativeCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
