import "./globals.css";
import { AnimatedLayout } from "@/Componentes/AnimatedLayout";
import AgendaProvider from "@/ContextosGlobales/AgendaContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.metaclinic.cl"
);

export const metadata = {
  title: {
    default: "Somed | Consulta oftalmológica",
    template: "%s | Somed",
  },
  description:
    "Somed: Consulta oftalmológica integral en Linares, Chile. Dra. Tamara Morellana Machuca. Expertos en salud visual y cuidado ocular.",
  keywords: [
    "Somed",
    "Consulta oftalmológica",
    "salud visual",
    "Oftalmología",
    "Linares",
    "Chile",
    "tratamiento personalizado",
    "consulta oftalmológica",
  ],
  authors: [{ name: "Somed", url: metadataBase.href }],
  publisher: "Somed",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: metadataBase.href,
  },
  icons: {
    icon: "/somedlogo.png",
    shortcut: "/somedlogo.png",
    apple: "/somedlogo.png",
  },
  openGraph: {
    title: "Somed | Consulta oftalmológica",
    description:
      "Somed: Consulta oftalmológica integral en Linares, Chile. Dra. Tamara Morellana Machuca. Expertos en salud visual y cuidado ocular.",
    url: metadataBase.href,
    siteName: "Somed",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/somedlogo.png",
        width: 1200,
        height: 630,
        alt: "Somed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somed",
    description:
      "Somed: Consulta oftalmológica integral en Linares, Chile. Dra. Tamara Morellana Machuca. Expertos en salud visual y cuidado ocular.",
    image: "/somedlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-200">
        <AnimatedLayout>
          <AgendaProvider>{children}</AgendaProvider>
        </AnimatedLayout>
      </body>
    </html>
  );
}
