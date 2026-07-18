"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import {
  dictionaries,
  defaultLocale,
  locales,
  type Dictionary,
  type Locale,
} from "./dictionaries";

const STORAGE_KEY = "portfol-locale";
const LOCALE_EVENT = "portfol-locale-change";

function readLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return (locales as string[]).includes(stored ?? "")
    ? (stored as Locale)
    : defaultLocale;
}

function subscribeLocale(onChange: () => void) {
  window.addEventListener(LOCALE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(LOCALE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function useLocale() {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readLocale,
    () => defaultLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionaries[locale].metaTitle;
  }, [locale]);

  const update = (next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  };

  return [locale, update] as const;
}

export default function Home() {
  const [locale, setLocale] = useLocale();
  const t = dictionaries[locale];

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <Header t={t} locale={locale} setLocale={setLocale} />
      <Hero t={t} />
      <About t={t} />
      <Current t={t} />
      <Projects t={t} />
      <Bots t={t} />
      <Achievements t={t} />
      <Experience t={t} />
      <Languages t={t} />
      <Skills t={t} />
      <Media t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}

function Header({
  t,
  locale,
  setLocale,
}: {
  t: Dictionary;
  locale: Locale;
  setLocale: (next: Locale) => void;
}) {
  return (
    <header className="mb-20 flex items-center justify-between font-mono text-sm">
      <Link href="/" className="text-foreground hover:text-accent transition">
        bk.
      </Link>
      <div className="flex items-center gap-6">
        <nav className="hidden sm:flex gap-6 text-muted lowercase">
          <a href="#current" className="hover:text-foreground transition">
            {t.nav.now}
          </a>
          <a href="#projects" className="hover:text-foreground transition">
            {t.nav.projects}
          </a>
          <a href="#achievements" className="hover:text-foreground transition">
            {t.nav.wins}
          </a>
          <a href="#contact" className="hover:text-foreground transition">
            {t.nav.contact}
          </a>
        </nav>
        <div
          role="group"
          aria-label={t.langToggleLabel}
          className="flex items-center gap-0.5 text-[11px] uppercase tracking-wider"
        >
          {locales.map((l, i) => (
            <span key={l} className="flex items-center">
              {i > 0 && <span className="text-muted/40 mx-1">/</span>}
              <button
                type="button"
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                className={`transition ${
                  locale === l
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l}
              </button>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="mb-24">
      <p className="font-mono text-sm text-muted mb-6 lowercase">
        <span className="text-accent">●</span> {t.hero.available}
      </p>
      <p className="font-mono text-sm text-muted mb-3 lowercase">
        {t.hero.intro} <span className="text-foreground">bekarysdotme</span>
      </p>
      <Image
        src="/bekarys-me.png"
        alt="bekarys.me"
        width={575}
        height={196}
        priority
        className="w-full max-w-md h-auto"
      />
      <div className="mt-5 flex items-center gap-4 max-w-md">
        <a
          href="mailto:tuleutaev.bekarys2025@ayu.edu.kz"
          aria-label="email"
          title="email"
          className="opacity-90 hover:opacity-100 hover:scale-105 transition"
        >
          <DottedIcon id="email">
            <rect
              x="2.2"
              y="5"
              width="19.6"
              height="14"
              rx="1.5"
              fill="none"
              stroke="white"
              strokeWidth="2.4"
            />
            <path
              d="M3.5 6.8L12 13l8.5-6.2"
              fill="none"
              stroke="white"
              strokeWidth="2.4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </DottedIcon>
        </a>
        <a
          href="https://github.com/ekbmusk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
          title="github"
          className="opacity-90 hover:opacity-100 hover:scale-105 transition"
        >
          <DottedIcon id="github">
            <path
              fill="white"
              d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.9-.02 3.29 0 .32.22.69.83.57C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"
            />
          </DottedIcon>
        </a>
        <a
          href="https://t.me/bekarysdotme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="telegram"
          title="telegram"
          className="opacity-90 hover:opacity-100 hover:scale-105 transition"
        >
          <DottedIcon id="telegram">
            <path
              fill="white"
              d="M21.5 3.2 2.6 10.5c-1 .4-1 1.7 0 2l4.7 1.5 1.8 5.8c.2.7 1.1.9 1.6.3l2.5-2.7 4.7 3.5c.7.5 1.7.1 1.9-.7l3.3-15c.2-1-.7-1.8-1.6-1.4zM9.3 14.8l9-7.5-7.4 8.5z"
            />
          </DottedIcon>
        </a>
        <a
          href="https://linkedin.com/in/bekarysdotme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
          title="linkedin"
          className="opacity-90 hover:opacity-100 hover:scale-105 transition"
        >
          <DottedIcon id="linkedin">
            <path
              fill="white"
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
            />
          </DottedIcon>
        </a>
        <a
          href="https://instagram.com/bekarysdotme"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
          title="instagram"
          className="opacity-90 hover:opacity-100 hover:scale-105 transition"
        >
          <DottedIcon id="instagram">
            <rect
              x="2.2"
              y="2.2"
              width="19.6"
              height="19.6"
              rx="5"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
            />
            <circle
              cx="12"
              cy="12"
              r="4.6"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
            />
            <circle cx="17.5" cy="6.5" r="1.4" fill="white" />
          </DottedIcon>
        </a>
      </div>
      <h1 className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight text-muted lowercase">
        {t.hero.tagline}
      </h1>
    </section>
  );
}

function DottedIcon({
  id,
  children,
  size = 56,
}: {
  id: string;
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      className="block"
    >
      <defs>
        <radialGradient
          id={`dot-grad-${id}`}
          cx="30%"
          cy="25%"
          r="80%"
          fx="25%"
          fy="20%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#f2f2f2" />
          <stop offset="60%" stopColor="#808080" />
          <stop offset="90%" stopColor="#202020" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <pattern
          id={`dot-pattern-${id}`}
          patternUnits="userSpaceOnUse"
          width="2"
          height="2"
        >
          <circle
            cx="1"
            cy="1"
            r="0.92"
            fill={`url(#dot-grad-${id})`}
          />
        </pattern>
        <mask id={`dot-mask-${id}`}>
          <rect width="24" height="24" fill="black" />
          {children}
        </mask>
      </defs>
      <rect
        width="24"
        height="24"
        fill={`url(#dot-pattern-${id})`}
        mask={`url(#dot-mask-${id})`}
      />
    </svg>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-12">
      <div className="mb-8 border-b border-border pb-3">
        <h2 className="text-2xl font-medium lowercase">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function About({ t }: { t: Dictionary }) {
  return (
    <Section id="about" title={t.sections.about}>
      <div className="space-y-4 text-muted leading-relaxed lowercase">
        {t.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

function Current({ t }: { t: Dictionary }) {
  return (
    <Section id="current" title={t.sections.current}>
      <ul className="grid sm:grid-cols-2 gap-4">
        {t.current.map((c) => {
          const inner = (
            <div className="h-full p-5 border border-border rounded-lg bg-white/[0.015] transition group-hover:border-accent/40 group-hover:bg-white/[0.03]">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-wider text-accent flex items-center gap-1.5 lowercase">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {t.inDev}
                </span>
                {c.forSale ? (
                  <span className="font-mono text-[10px] tracking-wider text-accent border border-accent/40 bg-accent/10 rounded-full px-2 py-0.5 lowercase">
                    {t.forSale}
                  </span>
                ) : (
                  c.type && (
                    <span className="font-mono text-[10px] tracking-wider text-muted border border-border rounded-full px-2 py-0.5 lowercase">
                      {c.type}
                    </span>
                  )
                )}
              </div>
              <h3 className="text-lg font-medium group-hover:text-accent transition lowercase">
                {c.title}
              </h3>
              <div className="font-mono text-xs text-muted mt-1 lowercase">
                {c.summary}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed lowercase">
                {c.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-muted border border-border rounded-full px-2 py-0.5 lowercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {c.forSale && (
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent border border-accent/40 bg-accent/10 rounded-full px-3 py-1.5 lowercase transition hover:bg-accent/20"
                >
                  {t.forSaleCta}
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
              )}
            </div>
          );
          return (
            <li key={c.title}>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div className="group block h-full">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Projects({ t }: { t: Dictionary }) {
  return (
    <Section id="projects" title={t.sections.projects}>
      <ul className="divide-y divide-border">
        {t.projects.map((p) => {
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  className={`text-lg font-medium transition lowercase ${
                    p.href
                      ? "group-hover:text-accent"
                      : "text-foreground/60"
                  }`}
                >
                  {p.title}
                </h3>
                <span className="font-mono text-xs text-muted shrink-0">
                  {p.year}
                </span>
              </div>
              <p className="mt-2 text-muted lowercase">{p.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {p.status && (
                  <span className="font-mono text-[11px] text-muted/80 border border-border/80 rounded-full px-2 py-0.5 lowercase flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted/70" />
                    {p.status}
                  </span>
                )}
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted border border-border rounded-full px-2 py-0.5 lowercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );
          return (
            <li key={p.title}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-6 transition hover:bg-white/[0.02] -mx-4 px-4 rounded"
                >
                  {inner}
                </a>
              ) : (
                <div className="block py-6 -mx-4 px-4">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Bots({ t }: { t: Dictionary }) {
  return (
    <Section id="bots" title={t.sections.bots}>
      <ul className="grid sm:grid-cols-3 gap-3">
        {t.bots.map((b) => (
          <li key={b.title}>
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full p-4 border border-border rounded transition hover:border-accent/40 hover:bg-white/[0.02]"
            >
              <div className="font-mono text-sm group-hover:text-accent transition lowercase">
                {b.title}
              </div>
              <p className="mt-2 text-sm text-muted leading-snug lowercase">
                {b.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Achievements({ t }: { t: Dictionary }) {
  return (
    <Section id="achievements" title={t.sections.achievements}>
      <ul className="divide-y divide-border">
        {t.achievements.map((a) => (
          <li
            key={a.title}
            className="py-4 flex items-baseline justify-between gap-4"
          >
            <div>
              <div className="font-medium lowercase">{a.title}</div>
              <div className="text-sm text-accent font-mono mt-0.5 lowercase">
                {a.place}
              </div>
            </div>
            <span className="font-mono text-xs text-muted shrink-0">
              {a.year}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Experience({ t }: { t: Dictionary }) {
  return (
    <Section id="experience" title={t.sections.experience}>
      <ul className="divide-y divide-border">
        {t.experience.map((e) => (
          <li
            key={e.role}
            className="py-4 flex items-baseline justify-between gap-4"
          >
            <span className="text-foreground lowercase">{e.role}</span>
            <span className="font-mono text-xs text-muted shrink-0 lowercase">
              {e.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Languages({ t }: { t: Dictionary }) {
  return (
    <Section id="languages" title={t.sections.languages}>
      <ul className="divide-y divide-border">
        {t.languages.map((l) => (
          <li
            key={l.name}
            className="py-3 flex items-baseline justify-between gap-4"
          >
            <span className="text-foreground lowercase">{l.name}</span>
            <span className="font-mono text-xs text-muted shrink-0 lowercase">
              {l.level}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Skills({ t }: { t: Dictionary }) {
  return (
    <Section id="skills" title={t.sections.skills}>
      <div className="flex flex-wrap gap-2">
        {t.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-sm border border-border rounded px-3 py-1.5 text-foreground/90 lowercase"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Media({ t }: { t: Dictionary }) {
  return (
    <Section id="media" title={t.sections.media}>
      <ul className="grid sm:grid-cols-2 gap-4">
        {t.media.map((m) => (
          <li key={m.title}>
            <a
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full border border-border rounded-lg overflow-hidden bg-white/[0.015] transition hover:border-accent/40 hover:bg-white/[0.03]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 336px"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-sm group-hover:text-accent transition lowercase">
                    {m.title}
                  </h3>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {m.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted leading-snug lowercase">
                  {m.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  return (
    <Section id="contact" title={t.sections.contact}>
      <p className="text-muted mb-6 lowercase">{t.contactCopy}</p>
      <ul className="divide-y divide-border border-y border-border">
        {t.contacts.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              className="group flex items-center justify-between py-4 font-mono text-sm transition hover:text-accent"
            >
              <span className="text-muted tracking-wider lowercase">
                {c.label}
              </span>
              <span className="flex items-center gap-2 lowercase">
                {c.value}
                <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition">
                  →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="mt-24 pt-8 border-t border-border font-mono text-xs text-muted flex justify-between lowercase">
      <span>© {new Date().getFullYear()} bekarysdotme</span>
      <span>{t.madeWith}</span>
    </footer>
  );
}
