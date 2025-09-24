import React from "react";
import { dataFooter } from "../Footer.data";
import { Logo } from "../../Logo";
import Link from "next/link";

export function FooterDesktop() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8">
      <div className="flex gap-16 items-start max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Logo />
        </div>

        {/* Secciones */}
        {dataFooter.map((section) => (
          <div key={section.section} className="text-sm">
            <h3 className="font-bold text-white mb-3 uppercase tracking-wide">
              {section.section}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.items.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    {/* Renderiza icono si existe */}
                    {item.icon && <item.icon size={14} />}
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
