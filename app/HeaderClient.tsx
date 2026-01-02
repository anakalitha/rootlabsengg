// app/HeaderClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const GRAIN_MILL_URL = "https://www.rootlabsgrainmill.com";

function MobileLink({
  href,
  children,
  onClick,
  target,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  target?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="rounded-lg px-2 py-2 hover:bg-slate-50"
    >
      {children}
    </a>
  );
}

export default function HeaderClient() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/assets/img/logo-64.webp"
            alt="RootLabs"
            width={64}
            height={64}
            className="h-full w-full max-h-[64px] max-w-full object-contain"
            priority
          />
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            RootLabs
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <a href="#hero" className="hover:text-sky-700">
            Home
          </a>
          <a href="#about" className="hover:text-sky-700">
            About
          </a>
          <a href="#call-to-action" className="hover:text-sky-700">
            Have an Idea?
          </a>
          <a
            href={GRAIN_MILL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-700"
          >
            Our Flagship Product
          </a>
          <a href="#contact" className="hover:text-sky-700">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-800"
          >
            Get it at Amazon
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            <MobileLink href="#hero" onClick={() => setMobileOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="#about" onClick={() => setMobileOpen(false)}>
              About
            </MobileLink>
            <MobileLink
              href="#call-to-action"
              onClick={() => setMobileOpen(false)}
            >
              Have an Idea?
            </MobileLink>
            <MobileLink
              href={GRAIN_MILL_URL}
              onClick={() => setMobileOpen(false)}
              target="_blank"
            >
              Our Flagship Product
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </MobileLink>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-800"
            >
              Get it at Amazon
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
