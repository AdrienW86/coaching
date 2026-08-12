"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Formations", href: "/formations" },
  { name: "À propos", href: "/a-propos" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Emplacement du Logo + Titre bicolore */}
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Baptiste Rubens"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Baptiste <span className="text-indigo-600">Rubens</span>
            </span>
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-100"
            aria-expanded={mobileMenuOpen}
            aria-label="Ouvrir le menu principal"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Liens Desktop */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menu Hamburger Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-6 shadow-lg">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}