// app/page.tsx
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import HeaderClient from "./HeaderClient";

export default function Page() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <HeaderClient />

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

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-sky-50 to-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="animate-[fadeUp_600ms_ease-out]">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            Prototype &amp; Product Creators
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            RootLabs
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            We build prototypes and products rooted in ancient natural
            technologies aimed at improving your quality of life. Explore the
            prototypes and products we&apos;ve created.
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
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-sky-100/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <Image
              src="/assets/img/hero-img.png"
              alt="Engineers working on a prototype"
              width={600}
              height={400}
              className="h-full w-full max-h-[360px] max-w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <p className="mt-4 text-slate-700">
              RootLabs was founded by a team of Engineers in Bengaluru with the
              intent of building products that improve the quality of life of
              our customers while providing local employment and helping small
              scale industries.
            </p>
            <p className="mt-4 text-slate-700">
              Innovative Expertise - We build innovative prototypes and products
              using a combination of Mechanical, Electrical, Electronic and
              Computer Engineering.
            </p>
            <p className="mt-4 text-slate-700">
              Developing Prototypes - We are happy to develop prototypes for
              your ideas at a cost. Please contact us if you have an innovative
              idea that you want a prototype built for.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Product ideation and design</li>
              <li>Prototype development and testing</li>
              <li>Collaboration with small-scale industries</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
              <Image
                src="/assets/img/about.jpg"
                alt="Engineers working on a prototype"
                width={600}
                height={400}
                className="h-full w-full max-h-[360px] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                What would you like to build?
              </label>
              <textarea
                name="message"
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
                  RootLabs — 755/8, 2nd Stage, Rajajinagar, Bengaluru - 560010
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-sky-700" />
              <div>
                <div className="font-semibold">Phone</div>
                <div>+91 9738984610</div>
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
      <div className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
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
                the prototypes and products we&apos;ve created.
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

            <div>
              <h4 className="mb-3 text-base font-semibold">Contact Us</h4>
              <p className="text-sm leading-relaxed text-slate-300">
                755/8, 2nd Stage,
                <br />
                Rajajinagar, Bengaluru - 560010,
                <br />
                Karnataka, India
                <br />
                <br />
                <span className="font-semibold text-slate-100">Phone:</span> +91
                9738984610
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
