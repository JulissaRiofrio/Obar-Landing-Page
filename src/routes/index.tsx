import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Hammer,
  Home,
  PaintBucket,
  Trees,
  Sparkles,
  Package,
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
  MessageCircle,
  ArrowUp,
  ShieldCheck,
  Users,
  HeartHandshake,
  Clock,
  CheckCircle2,
  Search,
  FileText,
  Wrench,
  PackageCheck,
  Facebook,
  Instagram,
  Linkedin,
  ImageIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
import aboutImage from "@/assets/about-illustration.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      {
        title: "OBAR S.A.C. | Trabajos en Melamina, Construcción y Remodelación en Piura",
      },
      {
        name: "description",
        content:
          "Especialistas en Piura: trabajos con melamina (cocinas, closets, muebles a medida), construcción, remodelación, pintura, jardinería y limpieza. Cotización inmediata con OBAR S.A.C.",
      },
      {
        name: "keywords",
        content:
          "trabajos con melamina piura, muebles de melamina en piura, cocinas de melamina piura, closets a medida piura, construccion piura, remodelacion piura, pintura piura, jardineria piura, limpieza piura, obar, obar sac, obar servicios generales, empresa constructora piura, servicios generales piura",
      },
      { name: "geo.region", content: "PE-PIU" },
      { name: "geo.placename", content: "Piura, Perú" },
      { name: "geo.position", content: "-5.143914;-80.629796" },
      { name: "ICBM", content: "-5.143914, -80.629796" },
      { property: "og:title", content: "OBAR S.A.C. | Trabajos en Melamina y Construcción en Piura" },
      {
        property: "og:description",
        content:
          "Soluciones integrales en Piura: muebles de melamina a medida, obras civiles, remodelaciones, pintura, jardinería y limpieza general.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://obarsac.com/" },
      { property: "og:site_name", content: "OBAR Servicios Generales S.A.C." },
      { property: "og:locale", content: "es_PE" },
      { property: "og:image", content: "https://obarsac.com/Obar3_Con_Fondo.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OBAR S.A.C. | Trabajos en Melamina y Construcción en Piura" },
      { name: "twitter:description", content: "Muebles en melamina a medida, obras civiles y servicios generales en Piura, Perú." },
      { name: "twitter:image", content: "https://obarsac.com/Obar3_Con_Fondo.jpeg" },
    ],
    links: [{ rel: "canonical", href: "https://obarsac.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://obarsac.com/#organization",
          name: "OBAR Servicios Generales S.A.C.",
          alternateName: ["OBAR", "OBAR S.A.C.", "OBAR Piura"],
          description:
            "Empresa formal en Piura especializada en trabajos con melamina a medida, construcción, remodelación, pintura, jardinería y limpieza profesional.",
          url: "https://obarsac.com/",
          logo: "https://obarsac.com/Obar3_Sin_Fondo.png",
          image: "https://obarsac.com/Obar3_Con_Fondo.jpeg",
          telephone: "+51 907 091 137",
          priceRange: "$$",
          identifier: "RUC 20616152140",
          areaServed: {
            "@type": "City",
            name: "Piura",
            addressCountry: "PE",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Pedregosa Mz N lote 61 B - La Mariposa",
            addressLocality: "Piura",
            addressRegion: "Piura",
            addressCountry: "PE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -5.143914,
            longitude: -80.629796,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          knowsAbout: [
            "Trabajos en Melamina",
            "Muebles a Medida",
            "Cocinas de Melamina",
            "Closets y Armarios",
            "Construcción Civil",
            "Remodelación de Casas",
            "Pintura de Interiores y Exteriores",
            "Jardinería",
            "Limpieza de Oficinas",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios Generales OBAR Piura",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Trabajos con Melamina en Piura",
                  description: "Muebles, cocinas repostero, closets y escritorios a medida en melamina.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Construcción y Obras Civiles en Piura",
                  description: "Construcción de viviendas, edificaciones y ampliaciones desde cero.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Remodelación de Espacios en Piura",
                  description: "Remodelación integral residencias y locales comerciales con acabados de primera.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Pintura Interior y Exterior en Piura",
                  description: "Pintado profesional para casas, fachadas y oficinas.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Jardinería y Áreas Verdes en Piura",
                  description: "Diseño, paisajismo y mantenimiento de jardines en Piura.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Limpieza Profesional en Piura",
                  description: "Servicios de limpieza general y profunda para oficinas y empresas.",
                },
              },
            ],
          },
          sameAs: ["https://wa.link/yimm6z"],
        }),
      },
    ],
  }),
});


const WHATSAPP = "https://wa.link/yimm6z";
const PHONE = "+51 907 091 137";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  { icon: Package, name: "Trabajos en Melamina", desc: "Muebles de melamina a medida en Piura: reposteros de cocina, closets, escritorios y centros de entretenimiento." },
  { icon: Hammer, name: "Construcción", desc: "Obras civiles, edificaciones y ampliaciones de viviendas o locales comerciales en Piura." },
  { icon: Home, name: "Remodelación", desc: "Remodelación integral de inmuebles y acabados modernos para casas y oficinas en Piura." },
  { icon: PaintBucket, name: "Pintura", desc: "Pintado profesional de interiores, exteriores y fachadas con materiales de calidad en Piura." },
  { icon: Trees, name: "Jardinería", desc: "Diseño, paisajismo y mantenimiento de áreas verdes para residencias e instituciones en Piura." },
  { icon: Sparkles, name: "Limpieza General", desc: "Servicio de limpieza profunda y mantenimiento corporativo para empresas u oficinas en Piura." },
];

const steps = [
  { icon: Phone, title: "Contacto", desc: "Cuéntanos qué necesitas." },
  { icon: Search, title: "Visita Técnica", desc: "Evaluamos el proyecto en sitio." },
  { icon: FileText, title: "Cotización", desc: "Propuesta clara y sin costo." },
  { icon: Wrench, title: "Ejecución", desc: "Trabajo profesional en plazo." },
  { icon: PackageCheck, title: "Entrega", desc: "Resultado garantizado." },
];

const reasons = [
  { icon: ShieldCheck, title: "Calidad Garantizada", desc: "Materiales certificados y estándares altos en cada obra." },
  { icon: Users, title: "Personal Capacitado", desc: "Equipo con experiencia comprobada en el sector." },
  { icon: HeartHandshake, title: "Atención Personalizada", desc: "Acompañamiento cercano en todo el proyecto." },
  { icon: Clock, title: "Entrega Puntual", desc: "Cumplimos los plazos que acordamos." },
];

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 900;
    const startTime = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutQuart(progress);
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur-sm"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3 min-w-0" aria-label="OBAR Servicios Generales">
              <img src="/Obar3_Sin_Fondo.png" alt="OBAR Logo" className="h-10 sm:h-12 w-auto shrink-0 object-contain" />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-display font-bold text-brand text-sm sm:text-base truncate">OBAR</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground truncate">Servicios Generales S.A.C.</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-cta px-4 lg:px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-soft hover:bg-cta-hover transition-all hover:shadow-elevated hover:-translate-y-0.5"
              >
                Solicitar Cotización
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border text-brand"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${menuOpen ? "max-h-96 opacity-100 translate-y-0 pb-4" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
              }`}
          >
            <nav className="flex flex-col gap-1 pt-2">
              {nav.map((n, i) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-surface hover:text-brand transition-all duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${i * 45 + 80}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
                  }}
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition-all duration-300"
                style={{
                  transitionDelay: menuOpen ? `${nav.length * 45 + 80}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                Solicitar Cotización
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24">
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
            style={{
              background:
                "radial-gradient(60% 60% at 20% 10%, oklch(0.95 0.03 45 / 0.5), transparent), radial-gradient(50% 50% at 90% 20%, oklch(0.94 0.02 250 / 0.6), transparent)",
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-fade-in-up">
                {/* <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs sm:text-sm font-medium text-brand">
                  <span className="h-2 w-2 rounded-full bg-cta" /> Empresa formal en Piura
                </span> */}
                <h1 className="mt-5 font-display font-bold text-brand text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                  Soluciones Integrales para{" "}
                  <span className="text-cta">Construcción</span> y Servicios Generales
                </h1>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Construcción, remodelación, pintura, trabajos en melamina, jardinería, limpieza y mucho más para hogares, empresas e instituciones.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm sm:text-base font-semibold text-cta-foreground shadow-soft hover:bg-cta-hover hover:shadow-elevated hover:-translate-y-0.5 transition-all min-h-11"
                  >
                    Solicitar Cotización
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm sm:text-base font-semibold text-brand hover:bg-surface transition-all min-h-11"
                  >
                    <MessageCircle className="h-5 w-5" /> Contactar por WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div
                  className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/10 to-cta/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative rounded-3xl bg-background shadow-elevated border border-border overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Ilustración de servicios de construcción y mantenimiento"
                    width={1400}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl bg-brand p-4 sm:p-6 shadow-soft">
              {["Empresa Formal", "Atención en Piura", "Cotización Gratuita", "Respuesta Rápida"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-brand-foreground text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-cta shrink-0" />
                  <span className="truncate">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-16 lg:py-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden bg-background shadow-soft border border-border">
                <img
                  src={aboutImage}
                  alt="Equipo profesional OBAR revisando planos"
                  width={1000}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-cta">Sobre Nosotros</span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
                  OBAR Servicios Generales S.A.C.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Somos una empresa formal con base en Piura, dedicada a brindar soluciones integrales en construcción y servicios generales. Trabajamos con hogares, empresas e instituciones ofreciendo calidad, cumplimiento y atención cercana en cada proyecto.
                </p>
                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-background p-5 shadow-soft border border-border">
                    <dt className="text-xs font-semibold uppercase text-muted-foreground">RUC</dt>
                    <dd className="mt-1 font-display font-semibold text-brand">20616152140</dd>
                  </div>
                  <div className="rounded-2xl bg-background p-5 shadow-soft border border-border">
                    <dt className="text-xs font-semibold uppercase text-muted-foreground">Teléfono</dt>
                    <dd className="mt-1 font-display font-semibold text-brand">{PHONE}</dd>
                  </div>
                  <div className="sm:col-span-2 rounded-2xl bg-background p-5 shadow-soft border border-border">
                    <dt className="text-xs font-semibold uppercase text-muted-foreground">Dirección</dt>
                    <dd className="mt-1 font-display font-semibold text-brand">
                      Calle Pedregosa Mz N lote 61 B - La Mariposa - Piura
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">Servicios</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
                Todo lo que tu proyecto necesita
              </h2>
              <p className="mt-4 text-muted-foreground">
                Un solo equipo profesional para cada etapa de tu obra o mantenimiento.
              </p>
            </div>
            <div className="mt-10 lg:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.name}
                  className="group rounded-2xl bg-background p-6 lg:p-7 border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand group-hover:bg-cta group-hover:text-cta-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-brand text-xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="py-16 lg:py-24 bg-brand text-brand-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden
            style={{
              background: "radial-gradient(40% 40% at 80% 10%, oklch(0.72 0.18 45 / 0.6), transparent)",
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">Cómo trabajamos</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Un proceso simple y transparente</h2>
            </div>
            <ol className="mt-12 grid gap-6 lg:grid-cols-5 relative">
              <div
                className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-brand-foreground/20"
                aria-hidden
              />
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:text-center">
                    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-cta text-cta-foreground font-display font-bold shadow-elevated shrink-0">
                      {i + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 lg:justify-center">
                        <s.icon className="h-4 w-4 text-cta" />
                        <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                      </div>
                      <p className="mt-1 text-sm text-brand-foreground/70">{s.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">Por qué elegirnos</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
                Razones para confiar en OBAR
              </h2>
            </div>
            <div className="mt-10 lg:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl bg-background p-6 border border-border shadow-soft hover:shadow-elevated transition-all"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-brand text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        {/* <section className="py-16 lg:py-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cta">Proyectos</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">Nuestro trabajo en imágenes</h2>
              <p className="mt-4 text-muted-foreground">Estamos preparando la galería con nuestros proyectos recientes.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group aspect-[4/3] rounded-2xl border border-dashed border-border bg-background grid place-items-center shadow-soft hover:shadow-elevated hover:border-cta/40 transition-all"
                >
                  <div className="flex flex-col items-center gap-3 text-muted-foreground group-hover:text-brand transition-colors">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft">
                      <ImageIcon className="h-6 w-6 text-brand" />
                    </div>
                    <span className="text-sm font-medium">Proyecto próximamente</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contacto */}
        <section id="contacto" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="rounded-3xl bg-brand text-brand-foreground p-6 sm:p-10 shadow-elevated relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cta/20 blur-3xl" aria-hidden />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cta">Contáctanos</span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-bold">OBAR Servicios Generales S.A.C.</h2>
                  <p className="mt-3 text-brand-foreground/80">
                    Solicita tu cotización sin compromiso. Te respondemos en el menor tiempo posible.
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-foreground/10">
                        <FileText className="h-5 w-5 text-cta" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase text-brand-foreground/60 font-semibold">RUC</p>
                        <p className="font-display font-semibold">20616152140</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-foreground/10">
                        <MapPin className="h-5 w-5 text-cta" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase text-brand-foreground/60 font-semibold">Dirección</p>
                        <p className="font-display font-semibold">Calle Pedregosa Mz N lote 61 B - La Mariposa - Piura</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-foreground/10">
                        <Phone className="h-5 w-5 text-cta" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase text-brand-foreground/60 font-semibold">Teléfono</p>
                        <a href="tel:+51907091137" className="font-display font-semibold hover:text-cta">907 091 137</a>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-semibold text-cta-foreground hover:bg-cta-hover shadow-soft hover:shadow-elevated transition-all min-h-11"
                    >
                      Solicitar Cotización
                    </a>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-foreground/30 px-6 py-3.5 font-semibold hover:bg-brand-foreground/10 transition-all min-h-11"
                    >
                      <MessageCircle className="h-5 w-5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-border bg-surface shadow-soft min-h-80 relative">
                <iframe
                  title="Ubicación OBAR en Piura"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d993.437471814816!2d-80.62979620509725!3d-5.143913976956695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1786651510385!5m2!1ses-419!2spe"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand text-brand-foreground pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <img src="/Obar3_Sin_Fondo.png" alt="OBAR Logo" className="h-10 sm:h-12 w-auto shrink-0 object-contain" />
                <div className="flex flex-col leading-tight">
                  <span className="font-display font-bold">OBAR</span>
                  <span className="text-xs text-brand-foreground/70">Servicios Generales S.A.C.</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-brand-foreground/70 leading-relaxed">
                Soluciones integrales de construcción y servicios generales en Piura.
              </p>
              <div className="mt-5 flex gap-2">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Red social"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-brand-foreground/10 hover:bg-cta hover:text-cta-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold">Menú</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-foreground/70">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-cta transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold">Servicios</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-foreground/70">
                {services.map((s) => (
                  <li key={s.name}>
                    <a href="#servicios" className="hover:text-cta transition-colors">{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold">Contacto</h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-foreground/70">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-cta shrink-0" />
                  <span>Calle Pedregosa Mz N lote 61 B - La Mariposa - Piura</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-cta shrink-0" />
                  <a href="tel:+51907091137" className="hover:text-cta">+51 907 091 137</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cta shrink-0" />
                  <span>RUC 20616152140</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-brand-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-foreground/60">
            <p>© {new Date().getFullYear()} OBAR Servicios Generales S.A.C. Todos los derechos reservados.</p>
            <p>Hecho con dedicación en Piura, Perú.</p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elevated hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-brand-foreground shadow-elevated hover:bg-brand/90 hover:scale-110 transition-all ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
