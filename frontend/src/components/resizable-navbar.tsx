"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

import { LayoutGridDemo } from "@/components/layout-gridDemo";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function NavbarDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "#features",
    },
    {
      name: "Ver premios",
      link: "#pricing",
    },
    {
      name: "Mis tickets",
      link: "#contact",
    },
    {
      name: "Ganadores",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="gradient">Chat con Cami</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const words = `Los mejores sorteos y premios estan a tu alcance.`;
const words2 = ` For demo purpose we have kept the position as Keep in mind that this component is  and will not move when scrolling.`;

const DummyContent = () => {
  return (
      <div className="w-[90%] mx-auto p-8 pt-5 flex justify-center items-center">
        <div className="w-1/4">
          
          <h1 className="text-center">
            <TextGenerateEffect words={words} variant="title" />
          </h1>
          <p className="">
           <TextGenerateEffect words={words2} variant="subtitle"/>
          </p>
        </div>
        <div className="w-3/5">
          <LayoutGridDemo />
        </div>
      </div>
  );
};