import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/56988617307"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp SOMED Oftalmología"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition duration-300 ease-out hover:scale-105"
      style={{ backgroundColor: "#4DBFBF", boxShadow: "0 18px 45px -10px rgba(77,191,191,0.55)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
