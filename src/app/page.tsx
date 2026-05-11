import Image from "next/image";
import Link from "next/link";

const current = [
  {
    title: "zhasyl.kz",
    summary: "углеродный офсет на solana",
    description:
      "токенизация, дробление и on-chain верификация каждой тонны co₂. web3-инфраструктура для прозрачного рынка углеродных кредитов.",
    tags: ["solana", "web3", "climatetech"],
    href: "https://zhasyl.kz",
    type: null,
  },
  {
    title: "автоматизация лабораторий",
    summary: "единая экосистема устройств",
    description:
      "внедряю все устройства лаборатории в единую систему с трекингом каждого и мониторингом состояния. сейчас в работе — крупная инсталляция: 15 3d-принтеров, 20 vr-комплектов, ~100 датчиков для физики, дроны и роботы.",
    tags: ["iot", "robotics", "monitoring"],
    href: null,
    type: null,
  },
  {
    title: "smart-pasture",
    summary: "цифровой контроль скота",
    description:
      "решение для аграрного сектора: подсчёт коров по камерам и с дронов; gps-трекеры с динамиками — пастух размечает зону выпаса на карте, и при попытке выйти за виртуальную границу трекер подаёт звуковой сигнал. акселерометры отслеживают активность и состояние животных.",
    tags: ["computer vision", "drones", "iot", "agritech"],
    href: null,
    type: "заказ",
  },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string | null;
  year: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "stemedu.kz",
    description:
      "образовательная платформа в сфере stem. веб-разработка от макета до продакшена.",
    tags: ["web", "education"],
    href: "https://stemedu.kz",
    year: "2025",
  },
  {
    title: "atomedu.kz",
    description:
      "сайт образовательной инициативы в области атомной науки и технологий.",
    tags: ["web", "education"],
    href: "https://atomedu.kz",
    year: "2025",
  },
  {
    title: "tedx.kz",
    description:
      "веб-проект для локального tedx — лендинг и поддержка мероприятия.",
    tags: ["web", "events"],
    href: "https://tedx.kz",
    year: "2026",
  },
  {
    title: "мониторинг госзакупок рк",
    description:
      "решение для анализа тендеров и лотов на госзакупках казахстана. выявлено более 200 подозрительных лотов, предотвращены значительные бюджетные потери. сейчас не работает по техническим причинам.",
    tags: ["analytics", "govtech", "data"],
    href: null,
    year: "2025",
    status: "не работает",
  },
];

const bots = [
  {
    title: "@zhansayaamath_bot",
    description: "telegram-бот по математике для подготовки и тренировки.",
    href: "https://t.me/zhansayaamath_bot",
  },
  {
    title: "@kazakhzerthana_bot",
    description: "бот для исследований и экспериментов на казахском языке.",
    href: "https://t.me/kazakhzerthana_bot",
  },
  {
    title: "@propickerbot",
    description: "утилитарный бот для подбора / выбора.",
    href: "https://t.me/propickerbot",
  },
];

const achievements = [
  {
    title: "google build with ai",
    place: "1 место",
    year: "2024",
  },
  {
    title: "astana tech cup",
    place: "1 место × 2 · выход в международный финал, турция",
    year: "2025 · 2026",
  },
  {
    title: "decentrathon 5 — zhasyl.kz",
    place: "3 место · приз $2000",
    year: "2026",
  },
  {
    title: "international engineering mindsets competition «pi-synergy»",
    place: "3 место",
    year: "2026",
  },
];

const skills = [
  "machine learning",
  "llm engineering",
  "robotics",
  "drones",
  "3d-принтеры",
  "solana / web3",
  "lab automation",
  "iot",
  "physics",
  "python",
  "rust",
  "web development",
  "docker",
  "telegram bots",
];

const experience = [
  {
    role: "исполнитель в государственных грант-проектах",
    period: "с янв. 2026",
  },
  {
    role: "pavlodar hub",
    period: "ранее",
  },
];

const education = [
  {
    institution:
      "международный казахско-турецкий университет им. ахмеда яссауи",
    program: "физика",
    level: "1 курс",
    period: "с 2025",
  },
  {
    institution:
      "специализированная школа-лицей «зерде» для одарённых детей, г. экибастуз",
    program: "среднее образование",
    level: "",
    period: "до 2025",
  },
];

const languages = [
  { name: "казахский", level: "родной" },
  { name: "русский", level: "родной" },
  { name: "английский", level: "b2" },
  { name: "турецкий", level: "a2" },
  { name: "польский", level: "a2" },
];

const contacts = [
  {
    label: "email",
    value: "tuleutaev.bekarys2025@ayu.edu.kz",
    href: "mailto:tuleutaev.bekarys2025@ayu.edu.kz",
  },
  {
    label: "github",
    value: "github.com/ekbmusk",
    href: "https://github.com/ekbmusk",
  },
  {
    label: "telegram",
    value: "@callmebekaa",
    href: "https://t.me/callmebekaa",
  },
  {
    label: "instagram",
    value: "@bekarysdotme",
    href: "https://instagram.com/bekarysdotme",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <Header />
      <Hero />
      <About />
      <Current />
      <Projects />
      <Bots />
      <Achievements />
      <Experience />
      <Education />
      <Languages />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="mb-20 flex items-center justify-between font-mono text-sm">
      <Link href="/" className="text-foreground hover:text-accent transition">
        bk.
      </Link>
      <nav className="hidden sm:flex gap-6 text-muted lowercase">
        <a href="#current" className="hover:text-foreground transition">
          сейчас
        </a>
        <a href="#projects" className="hover:text-foreground transition">
          проекты
        </a>
        <a href="#achievements" className="hover:text-foreground transition">
          победы
        </a>
        <a href="#contact" className="hover:text-foreground transition">
          контакты
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mb-24">
      <p className="font-mono text-sm text-muted mb-6 lowercase">
        <span className="text-accent">●</span> доступен для проектов
      </p>
      <p className="font-mono text-sm text-muted mb-3 lowercase">
        привет, я <span className="text-foreground">bekarysdotme</span>
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
          href="https://t.me/callmebekaa"
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
        ml/llm-инженерия, робототехника, web3.
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
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-12">
      <div className="mb-8 flex items-baseline gap-4 border-b border-border pb-3">
        <span className="font-mono text-xs text-muted tracking-wider">
          {label}
        </span>
        <h2 className="text-2xl font-medium lowercase">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="01" title="обо мне">
      <div className="space-y-4 text-muted leading-relaxed lowercase">
        <p>
          работаю на стыке веба, машинного обучения и железа: от
          образовательных платформ и telegram-ботов до робототехники, дронов и
          llm-инженерии.
        </p>
        <p>
          раньше — pavlodar hub. с 1 января 2026 года выполняю работы в рамках
          государственных грант-проектов. победитель google build with ai 2024,
          двукратный чемпион astana tech cup, призёр decentrathon 5.
        </p>
      </div>
    </Section>
  );
}

function Current() {
  return (
    <Section id="current" label="02" title="сейчас в работе">
      <ul className="grid sm:grid-cols-2 gap-4">
        {current.map((c) => {
          const inner = (
            <div className="h-full p-5 border border-border rounded-lg bg-white/[0.015] transition group-hover:border-accent/40 group-hover:bg-white/[0.03]">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-wider text-accent flex items-center gap-1.5 lowercase">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  в&nbsp;разработке
                </span>
                {c.type && (
                  <span className="font-mono text-[10px] tracking-wider text-muted border border-border rounded-full px-2 py-0.5 lowercase">
                    {c.type}
                  </span>
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

function Projects() {
  return (
    <Section id="projects" label="03" title="проекты">
      <ul className="divide-y divide-border">
        {projects.map((p) => {
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

function Bots() {
  return (
    <Section id="bots" label="04" title="telegram-боты">
      <ul className="grid sm:grid-cols-3 gap-3">
        {bots.map((b) => (
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

function Achievements() {
  return (
    <Section id="achievements" label="05" title="победы">
      <ul className="divide-y divide-border">
        {achievements.map((a) => (
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

function Experience() {
  return (
    <Section id="experience" label="06" title="опыт">
      <ul className="divide-y divide-border">
        {experience.map((e) => (
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

function Education() {
  return (
    <Section id="education" label="07" title="образование">
      <ul className="divide-y divide-border">
        {education.map((e) => (
          <li key={e.institution} className="py-4 flex flex-col gap-1">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-foreground lowercase">
                {e.institution}
              </span>
              <span className="font-mono text-xs text-muted shrink-0 lowercase">
                {e.period}
              </span>
            </div>
            <span className="text-sm text-muted lowercase font-mono">
              {[e.program, e.level].filter(Boolean).join(" · ")}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Languages() {
  return (
    <Section id="languages" label="08" title="языки">
      <ul className="divide-y divide-border">
        {languages.map((l) => (
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

function Skills() {
  return (
    <Section id="skills" label="09" title="стек">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
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

function Contact() {
  return (
    <Section id="contact" label="10" title="контакты">
      <p className="text-muted mb-6 lowercase">
        открыт к интересным задачам и сотрудничеству. напишите — отвечаю в
        течение дня.
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {contacts.map((c) => (
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

function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-border font-mono text-xs text-muted flex justify-between lowercase">
      <span>© {new Date().getFullYear()} bekarysdotme</span>
      <span>сделано на next.js</span>
    </footer>
  );
}
