"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
{
  title: "Yapea S/.40 y gana",
  description:
    "Participa en sorteos exclusivos al realizar pagos con Yape. Cada transacción es una oportunidad para ganar premios increíbles. ¡Cuantas más veces uses Yape, más chances tienes de ganar!",
  content: (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#9333ea,#c026d3)] text-white">
         {/* QR para participar */}
      <img
        src="/qr.png"
        alt="Código QR Yape para participar"
        width={100}
        className="object-contain rounded-lg border border-white/20 shadow-lg"
      />
      {/* Logo Yape */}
      <img
        src="/yape.png"
        alt="Logo de Yape"
        width={180}
        className="object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
      />
     
    </div>
  ),
},

  {
    title: "Plin S/.40 y gana",
    description:
      "Participa en sorteos exclusivos al realizar pagos con Plin. Cada transacción es una oportunidad para ganar premios increíbles. ¡Cuantas más veces uses Plin, más chances tienes de ganar!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/public/plin.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }
 
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
