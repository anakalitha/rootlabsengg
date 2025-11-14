"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import aboutStats from "../data/about-stats.json";

const GRAIN_MILL_URL = "https://www.rootlabsgrainmill.com";

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#hero" className="flex items-center gap-2">
            <Image
              src="/assets/img/logo-64.webp"
              alt="RootLabs"
              width={64}
              height={64}
              className="h-full w-full max-h-[64px] max-w-full object-contain"
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

      <main>
        <Hero />
        <About />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

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

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-sky-50 to-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Prototype & Product Creators
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            RootLabs
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            We build prototypes and products rooted in ancient natural
            technologies aimed at improving your quality of life. Explore the
            prototypes and products we've created.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#call-to-action"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-800"
            >
              Have an idea? Let&apos;s talk
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Learn more about us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -inset-4 rounded-3xl bg-sky-100/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <Image
              src="/assets/img/hero-img.png"
              alt="Engineers working on a prototype"
              width={600}
              height={400}
              className="h-full w-full max-h-[360px] max-w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const { clientProjects, prototypes, productManufacturing, patentsGranted } =
    aboutStats as {
      clientProjects: number;
      prototypes: number;
      productManufacturing: number;
      patentsGranted: number;
    };

  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase">
              Engineering studio in Bengaluru
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Where creativity
              <br className="hidden md:block" /> meets technology.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              RootLabs Engineering and Product Creators work at the intersection
              of Mechanical, Electrical, Electronics and Computer Science
              engineering to build proof-of-concept prototypes and products that
              solve real-world problems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              We specialise in taking ideas from sketches and conversations to
              functional prototypes you can touch, test and iterate on, working
              closely with small-scale industries and local manufacturers.
            </p>

            <button
              className="mt-6 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300"
              type="button"
            >
              Read more
            </button>

            {/* Stats row */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              <Stat value={`${clientProjects}+`} label="Client Projects" />
              <Stat value={`${prototypes}+`} label="Prototypes" />
              <Stat
                value={`${productManufacturing}+`}
                label="Product Manufacturing"
              />
              <Stat value={`${patentsGranted}+`} label="Patents Granted" />
            </div>
          </div>

          {/* Right: image + badge */}
          <div className="relative flex items-center justify-center">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900/5 shadow-xl ring-1 ring-slate-200">
              <Image
                src="/assets/img/about.jpg"
                alt="Engineers working on a prototype"
                width={600}
                height={400}
                className="h-full w-full max-h-[380px] max-w-full object-cover"
              />
            </div>

            {/* IDA badge */}
            <div className="absolute -bottom-6 -right-4 w-32 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200 sm:w-40 md:w-44">
              <Image
                src="/assets/img/ida-award.png"
                alt="IDA Design Awards Silver Winner"
                width={200}
                height={200}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatProps = {
  value: string;
  label: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </span>
    </div>
  );
}

function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="bg-slate-900 py-16 text-slate-50 md:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Do you have an interesting idea?
        </h2>
        <p className="mt-4 text-base text-slate-200">
          Contact us to get a prototype developed at a nominal cost. We have the
          expertise to combine Mechanical, Electrical, Electronic, Embedded and
          Computer Science Engineering to bring your idea to life.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-sky-400"
        >
          Schedule a call
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-slate-600">
          Tell us a little about your idea and we&apos;ll get back to you.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <form className="space-y-4 rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                What would you like to build?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-800"
            >
              Send message
            </button>
          </form>

          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-sky-700" />
              <div>
                <div className="font-semibold">Location</div>
                <div>
                  RootLabs — 755/8, 2nd Main, E Block, 2nd Stage, Rajajinagar,
                  Bengaluru - 560010, Karnataka, India
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-sky-700" />
              <div>
                <div className="font-semibold">Phone</div>
                <div>(+91) 7624883338</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-sky-700" />
              <div>
                <div className="font-semibold">Email</div>
                <div>arunv.inc@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 pt-12"
    >
      {/* Top footer area */}
      <div className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {/* Column 1: Logo + text + social */}
            <div className="md:col-span-2">
              <a href="#hero" className="mb-4 inline-flex items-center gap-2">
                <Image
                  src="/assets/img/logo-96.webp"
                  alt="RootLabs"
                  width={86}
                  height={96}
                  className="h-full w-full max-h-[96px] max-w-full object-contain"
                />
                <span className="text-xl font-semibold tracking-tight">
                  RootLabs
                </span>
              </a>
              <p className="mt-2 text-sm text-slate-300">
                We build prototypes and products rooted in ancient natural
                technologies aimed at improving your quality of life. Explore
                the prototypes and products we’ve created.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-sky-500 hover:text-slate-950 transition"
                  aria-label="Twitter"
                >
                  <SiX size={16} />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-sky-500 hover:text-slate-950 transition"
                  aria-label="Facebook"
                >
                  <SiFacebook size={16} />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-sky-500 hover:text-slate-950 transition"
                  aria-label="Instagram"
                >
                  <SiInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-100 hover:bg-sky-500 hover:text-slate-950 transition"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h4 className="mb-3 text-base font-semibold">Useful Links</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#hero" className="hover:text-sky-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-sky-400">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#call-to-action" className="hover:text-sky-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h4 className="mb-3 text-base font-semibold">Our Services</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#call-to-action" className="hover:text-sky-400">
                    Prototype Design
                  </a>
                </li>
                <li>
                  <a href="#call-to-action" className="hover:text-sky-400">
                    Prototype Development
                  </a>
                </li>
                <li>
                  <a href="#call-to-action" className="hover:text-sky-400">
                    Art &amp; Graphic Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="mb-3 text-base font-semibold">Contact Us</h4>
              <p className="text-sm leading-relaxed text-slate-300">
                755/8, 2nd Main, E Block, 2nd Stage,
                <br />
                Rajajinagar, Bengaluru - 560010,
                <br />
                Karnataka, India
                <br />
                <br />
                <span className="font-semibold text-slate-100">Phone:</span> +91
                7624883338
                <br />
                <span className="font-semibold text-slate-100">
                  Email:
                </span>{" "}
                arunv.inc@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-400 md:px-6">
        <div className="pt-3">
          &copy; Copyright{" "}
          <strong>
            <span>RootLabs</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
