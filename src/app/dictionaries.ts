export type Locale = "en" | "ru" | "kk";

export const locales: Locale[] = ["en", "ru", "kk"];
export const defaultLocale: Locale = "en";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string | null;
  year: string;
  status?: string;
};

type Current = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  href: string | null;
  type: string | null;
  forSale?: boolean;
};

type Bot = {
  title: string;
  description: string;
  href: string;
};

type Achievement = {
  title: string;
  place: string;
  year: string;
};

type Experience = {
  role: string;
  period: string;
};

type Language = {
  name: string;
  level: string;
};

type Contact = {
  label: string;
  value: string;
  href: string;
};

type MediaItem = {
  title: string;
  description: string;
  year: string;
  image: string;
  href: string;
};

export type Dictionary = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    now: string;
    projects: string;
    wins: string;
    contact: string;
  };
  hero: {
    available: string;
    intro: string;
    tagline: string;
  };
  sections: {
    about: string;
    current: string;
    projects: string;
    bots: string;
    achievements: string;
    experience: string;
    languages: string;
    skills: string;
    media: string;
    contact: string;
  };
  inDev: string;
  forSale: string;
  forSaleCta: string;
  about: string[];
  contactCopy: string;
  madeWith: string;
  langToggleLabel: string;
  current: Current[];
  projects: Project[];
  bots: Bot[];
  achievements: Achievement[];
  experience: Experience[];
  languages: Language[];
  skills: string[];
  media: MediaItem[];
  contacts: Contact[];
};

const en: Dictionary = {
  metaTitle: "Bekarys Tuleutayev (bekarysdotme) — ML/LLM Engineer, Robotics, Web3",
  metaDescription:
    "Bekarys Tuleutayev — ML/LLM engineer, robotics, drones, web3. Winner of Google Build with AI 2024, two-time Astana Tech Cup champion, Decentrathon 5 prize winner.",
  nav: {
    now: "now",
    projects: "projects",
    wins: "wins",
    contact: "contact",
  },
  hero: {
    available: "available for projects",
    intro: "hi, i'm",
    tagline: "ml/llm engineering, robotics, web3.",
  },
  sections: {
    about: "about",
    current: "currently in progress",
    projects: "projects",
    bots: "telegram bots",
    achievements: "wins",
    experience: "experience",
    languages: "languages",
    skills: "stack",
    media: "media",
    contact: "contact",
  },
  inDev: "in development",
  forSale: "for sale",
  forSaleCta: "get in touch",
  about: [
    "i work at the intersection of web, machine learning, and hardware: from edtech platforms and telegram bots to robotics, drones, and llm engineering.",
    "i've been combining physics and coding for 10 years.",
    "previously — pavlodar hub. since january 1, 2026 i've been delivering work on government grant projects. winner of google build with ai 2024, two-time astana tech cup champion, decentrathon 5 prize winner.",
  ],
  contactCopy:
    "open to interesting tasks and collaboration. drop a line — i reply within the day.",
  madeWith: "made with next.js",
  langToggleLabel: "language",
  current: [
    {
      title: "lab automation",
      summary: "unified device ecosystem",
      description:
        "wiring every lab device into a single system with per-unit tracking and health monitoring. currently shipping a large install: 15 3d printers, 20 vr kits, ~100 physics sensors, drones, and robots.",
      tags: ["iot", "robotics", "monitoring"],
      href: null,
      type: null,
    },
    {
      title: "fintech-index",
      summary: "digitalization index for kazakhstani banks",
      description:
        "a multidimensional, explainable index of bank digitalization built from annual reports. dictionary-based text-mining enriched with fasttext contextual embeddings; the lexicon is expanded by manual selection — no automatic synonyms — to keep subjectivity in check and hold up to reviewers. output: frequency and entropy (ewm) sub-indices across 9 categories with year-dynamic weights.",
      tags: ["nlp", "text-mining", "fasttext", "fintech"],
      href: null,
      type: null,
      forSale: true,
    },
  ],
  projects: [
    {
      title: "stemedu.kz",
      description:
        "stem education platform. web development from mockup to production.",
      tags: ["web", "education"],
      href: "https://stemedu.kz",
      year: "2025",
    },
    {
      title: "atomedu.kz",
      description:
        "website for an educational initiative in nuclear science and technology.",
      tags: ["web", "education"],
      href: "https://atomedu.kz",
      year: "2025",
    },
    {
      title: "tedx.kz",
      description:
        "web project for a local tedx — landing page and event support.",
      tags: ["web", "events"],
      href: "https://tedx.kz",
      year: "2026",
    },
    {
      title: "kazakhstan public procurement monitor",
      description:
        "tool for analyzing tenders and lots in kazakhstan's public procurement. more than 200 suspicious lots flagged, significant budget losses prevented. currently offline for technical reasons.",
      tags: ["analytics", "govtech", "data"],
      href: null,
      year: "2025",
      status: "offline",
    },
    {
      title: "zhasyl.kz",
      description:
        "carbon offsets on solana: tokenization, fractionalization, and on-chain verification of every tonne of co₂. web3 infrastructure for a transparent carbon credit market.",
      tags: ["solana", "web3", "climatetech"],
      href: "https://zhasyl.kz",
      year: "2026",
    },
    {
      title: "smart-pasture",
      description:
        "digital livestock control. an agritech solution: counting cattle via cameras and drones; gps trackers with speakers — the shepherd marks a grazing zone on the map and the tracker plays a sound when an animal crosses the virtual fence. accelerometers track activity and health.",
      tags: ["computer vision", "drones", "iot", "agritech"],
      href: null,
      year: "2026",
    },
  ],
  bots: [
    {
      title: "@zhansayaamath_bot",
      description: "telegram bot for math practice and exam prep.",
      href: "https://t.me/zhansayaamath_bot",
    },
    {
      title: "@kazakhzerthana_bot",
      description: "bot for research and experiments in kazakh.",
      href: "https://t.me/kazakhzerthana_bot",
    },
    {
      title: "@propickerbot",
      description: "utility bot for picking / choosing.",
      href: "https://t.me/propickerbot",
    },
  ],
  achievements: [
    {
      title: "google build with ai",
      place: "1st place",
      year: "2024",
    },
    {
      title: "astana tech cup",
      place: "1st place × 2 · advanced to the international final, turkey",
      year: "2025 · 2026",
    },
    {
      title: "decentrathon 5 — zhasyl.kz",
      place: "3rd place · $2000 prize",
      year: "2026",
    },
    {
      title: "international engineering mindsets competition «pi-synergy»",
      place: "3rd place",
      year: "2026",
    },
  ],
  experience: [
    {
      role: "contractor on government grant projects",
      period: "since jan 2026",
    },
    {
      role: "pavlodar hub",
      period: "previously",
    },
  ],
  languages: [
    { name: "kazakh", level: "native" },
    { name: "russian", level: "native" },
    { name: "english", level: "b2" },
    { name: "turkish", level: "a2" },
    { name: "polish", level: "a2" },
  ],
  skills: [
    "machine learning",
    "llm engineering",
    "robotics",
    "drones",
    "3d printers",
    "solana / web3",
    "lab automation",
    "iot",
    "physics",
    "python",
    "rust",
    "web development",
    "docker",
    "telegram bots",
  ],
  media: [
    {
      title: "utility model patent № 11764",
      description:
        "modular training stand for studying electrical connection types of solar cells.",
      year: "2026",
      image: "/media/patent-solar-stand.jpg",
      href: "/media/patent-solar-stand.pdf",
    },
    {
      title: "copyright certificate № 69190",
      description:
        "intelligent physics learning platform: ai, testing, and virtual lab integration.",
      year: "2026",
      image: "/media/copyright-physics-ai.jpg",
      href: "/media/copyright-physics-ai.pdf",
    },
    {
      title: "copyright certificate № 67432",
      description:
        "vr simulation for teaching the vernier scale of a caliper.",
      year: "2026",
      image: "/media/copyright-vr-caliper.jpg",
      href: "/media/copyright-vr-caliper.pdf",
    },
    {
      title: "copyright certificate № 67084",
      description:
        "stem&creativity — e-learning resource (website).",
      year: "2026",
      image: "/media/copyright-stem-creativity.jpg",
      href: "/media/copyright-stem-creativity.pdf",
    },
    {
      title: "decentrathon 5.0",
      description:
        "3rd place in the «tokenization of real-world assets» case — national solana hackathon track.",
      year: "2026",
      image: "/media/decentrathon-5.jpg",
      href: "/media/decentrathon-5.jpg",
    },
    {
      title: "solana summit kazakhstan",
      description:
        "$2000 prize for 3rd place at the national solana hackathon.",
      year: "2026",
      image: "/media/solana-summit-prize.jpg",
      href: "/media/solana-summit-prize.jpg",
    },
    {
      title: "solana community meetup",
      description: "jet × jito meetup — solana international community.",
      year: "2026",
      image: "/media/solana-meetup.jpg",
      href: "/media/solana-meetup.jpg",
    },
    {
      title: "awards shelf",
      description:
        "diplomas and patents — astana tech cup and the «fibonacci robot olympiad» republican robotics championship.",
      year: "2026",
      image: "/media/awards-wall.jpg",
      href: "/media/awards-wall.jpg",
    },
  ],
  contacts: [
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
      value: "@bekarysdotme",
      href: "https://t.me/bekarysdotme",
    },
    {
      label: "linkedin",
      value: "in/bekarysdotme",
      href: "https://linkedin.com/in/bekarysdotme",
    },
    {
      label: "instagram",
      value: "@bekarysdotme",
      href: "https://instagram.com/bekarysdotme",
    },
  ],
};

const ru: Dictionary = {
  metaTitle: "Бекарыс Тулеутаев (bekarysdotme) — ML/LLM-инженер, робототехника, web3",
  metaDescription:
    "Бекарыс Тулеутаев — ML/LLM-инженер, робототехника, дроны, web3. Победитель Google Build with AI 2024, двукратный чемпион Astana Tech Cup, призёр Decentrathon 5.",
  nav: {
    now: "сейчас",
    projects: "проекты",
    wins: "победы",
    contact: "контакты",
  },
  hero: {
    available: "доступен для проектов",
    intro: "привет, я",
    tagline: "ml/llm-инженерия, робототехника, web3.",
  },
  sections: {
    about: "обо мне",
    current: "сейчас в работе",
    projects: "проекты",
    bots: "telegram-боты",
    achievements: "победы",
    experience: "опыт",
    languages: "языки",
    skills: "стек",
    media: "media",
    contact: "контакты",
  },
  inDev: "в разработке",
  forSale: "продаётся",
  forSaleCta: "связаться",
  about: [
    "работаю на стыке веба, машинного обучения и железа: от образовательных платформ и telegram-ботов до робототехники, дронов и llm-инженерии.",
    "уже 10 лет совмещаю физику и программирование.",
    "раньше — pavlodar hub. с 1 января 2026 года выполняю работы в рамках государственных грант-проектов. победитель google build with ai 2024, двукратный чемпион astana tech cup, призёр decentrathon 5.",
  ],
  contactCopy:
    "открыт к интересным задачам и сотрудничеству. напишите — отвечаю в течение дня.",
  madeWith: "сделано на next.js",
  langToggleLabel: "язык",
  current: [
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
      title: "fintech-index",
      summary: "финтех-индекс банков рк",
      description:
        "многомерный объяснимый индекс цифровизации банков по их годовым отчётам. словарный text-mining + контекстные эмбеддинги fasttext для обогащения лексикона; расширение словаря — ручной отбор без автоматических синонимов (контроль субъективности и защита перед рецензентами). на выходе — частотный и энтропийный (ewm) суб-индексы по 9 категориям с динамическими весами по годам.",
      tags: ["nlp", "text-mining", "fasttext", "fintech"],
      href: null,
      type: null,
      forSale: true,
    },
  ],
  projects: [
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
    {
      title: "zhasyl.kz",
      description:
        "углеродный офсет на solana: токенизация, дробление и on-chain верификация каждой тонны co₂. web3-инфраструктура для прозрачного рынка углеродных кредитов.",
      tags: ["solana", "web3", "climatetech"],
      href: "https://zhasyl.kz",
      year: "2026",
    },
    {
      title: "smart-pasture",
      description:
        "цифровой контроль скота. решение для аграрного сектора: подсчёт коров по камерам и с дронов; gps-трекеры с динамиками — пастух размечает зону выпаса на карте, и при попытке выйти за виртуальную границу трекер подаёт звуковой сигнал. акселерометры отслеживают активность и состояние животных.",
      tags: ["computer vision", "drones", "iot", "agritech"],
      href: null,
      year: "2026",
    },
  ],
  bots: [
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
  ],
  achievements: [
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
  ],
  experience: [
    {
      role: "исполнитель в государственных грант-проектах",
      period: "с янв. 2026",
    },
    {
      role: "pavlodar hub",
      period: "ранее",
    },
  ],
  languages: [
    { name: "казахский", level: "родной" },
    { name: "русский", level: "родной" },
    { name: "английский", level: "b2" },
    { name: "турецкий", level: "a2" },
    { name: "польский", level: "a2" },
  ],
  skills: [
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
  ],
  media: [
    {
      title: "патент на полезную модель № 11764",
      description:
        "модульный учебно-тренировочный стенд для изучения электрических видов соединения солнечных элементов.",
      year: "2026",
      image: "/media/patent-solar-stand.jpg",
      href: "/media/patent-solar-stand.pdf",
    },
    {
      title: "свидетельство об авторском праве № 69190",
      description:
        "интеллектуальная платформа для обучения физике: ai, тестирование и интеграция виртуальной лаборатории.",
      year: "2026",
      image: "/media/copyright-physics-ai.jpg",
      href: "/media/copyright-physics-ai.pdf",
    },
    {
      title: "свидетельство об авторском праве № 67432",
      description:
        "vr-симулятор для обучения работе с нониусной шкалой штангенциркуля.",
      year: "2026",
      image: "/media/copyright-vr-caliper.jpg",
      href: "/media/copyright-vr-caliper.pdf",
    },
    {
      title: "свидетельство об авторском праве № 67084",
      description:
        "stem&creativity — электронный образовательный ресурс (веб-сайт).",
      year: "2026",
      image: "/media/copyright-stem-creativity.jpg",
      href: "/media/copyright-stem-creativity.pdf",
    },
    {
      title: "decentrathon 5.0",
      description:
        "3 место в кейсе «tokenization of real-world assets» — трек national solana hackathon.",
      year: "2026",
      image: "/media/decentrathon-5.jpg",
      href: "/media/decentrathon-5.jpg",
    },
    {
      title: "solana summit kazakhstan",
      description:
        "приз $2000 за 3 место на national solana hackathon.",
      year: "2026",
      image: "/media/solana-summit-prize.jpg",
      href: "/media/solana-summit-prize.jpg",
    },
    {
      title: "solana community meetup",
      description: "митап jet × jito — международное комьюнити solana.",
      year: "2026",
      image: "/media/solana-meetup.jpg",
      href: "/media/solana-meetup.jpg",
    },
    {
      title: "полка наград",
      description:
        "дипломы и патенты — astana tech cup и республиканский чемпионат по робототехнике «fibonacci robot olympiad».",
      year: "2026",
      image: "/media/awards-wall.jpg",
      href: "/media/awards-wall.jpg",
    },
  ],
  contacts: [
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
      value: "@bekarysdotme",
      href: "https://t.me/bekarysdotme",
    },
    {
      label: "linkedin",
      value: "in/bekarysdotme",
      href: "https://linkedin.com/in/bekarysdotme",
    },
    {
      label: "instagram",
      value: "@bekarysdotme",
      href: "https://instagram.com/bekarysdotme",
    },
  ],
};

const kk: Dictionary = {
  metaTitle: "Бекарыс Төлеутаев (bekarysdotme) — ML/LLM инженері, робототехника, web3",
  metaDescription:
    "Бекарыс Төлеутаев — ML/LLM инженері, робототехника, дрондар, web3. Google Build with AI 2024 жеңімпазы, екі дүркін Astana Tech Cup чемпионы, Decentrathon 5 жүлдегері.",
  nav: {
    now: "қазір",
    projects: "жобалар",
    wins: "жеңістер",
    contact: "байланыс",
  },
  hero: {
    available: "жобаларға ашықпын",
    intro: "сәлем, мен —",
    tagline: "ml/llm-инженерия, робототехника, web3.",
  },
  sections: {
    about: "өзім туралы",
    current: "қазір жұмыстағы",
    projects: "жобалар",
    bots: "telegram-боттар",
    achievements: "жеңістер",
    experience: "тәжірибе",
    languages: "тілдер",
    skills: "стек",
    media: "media",
    contact: "байланыс",
  },
  inDev: "әзірленуде",
  forSale: "сатылады",
  forSaleCta: "байланысу",
  about: [
    "веб, машиналық оқыту және құрылғылар тоғысында жұмыс істеймін: білім беру платформалары мен telegram-боттардан бастап робототехника, дрондар және llm-инженерияға дейін.",
    "физика мен программалауды 10 жылдан бері қатар алып келемін.",
    "бұрын — pavlodar hub. 2026 жылдың 1 қаңтарынан бері мемлекеттік грант жобаларында жұмыс атқарып жүрмін. google build with ai 2024 жеңімпазы, екі дүркін astana tech cup чемпионы, decentrathon 5 жүлдегері.",
  ],
  contactCopy:
    "қызықты тапсырмалар мен ынтымақтастыққа ашықпын. жазыңыз — күн ішінде жауап беремін.",
  madeWith: "next.js-те жасалған",
  langToggleLabel: "тіл",
  current: [
    {
      title: "зертхана автоматизациясы",
      summary: "құрылғылардың біртұтас экожүйесі",
      description:
        "зертхананың барлық құрылғыларын бірыңғай жүйеге қосып, әрқайсысын трекинг және жай-күй мониторингімен қамтып жүрмін. қазір ірі инсталляция жүзеге асырылуда: 15 3d-принтер, 20 vr-жинақ, ~100 физика сенсоры, дрондар мен роботтар.",
      tags: ["iot", "robotics", "monitoring"],
      href: null,
      type: null,
    },
    {
      title: "fintech-index",
      summary: "қр банктерінің финтех-индексі",
      description:
        "банктердің цифрландыру деңгейінің көпөлшемді, түсіндірілетін индексі — жылдық есептер негізінде. сөздіктік text-mining + лексиконды байыту үшін fasttext контекстік эмбеддингтері; сөздікті кеңейту — қолмен іріктеу арқылы, автоматты синонимдерсіз (субъективтілікті бақылау және рецензенттер алдында қорғау). нәтижесінде — 9 санат бойынша жиілік және энтропиялық (ewm) суб-индекстер, жылдар бойынша динамикалық салмақтармен.",
      tags: ["nlp", "text-mining", "fasttext", "fintech"],
      href: null,
      type: null,
      forSale: true,
    },
  ],
  projects: [
    {
      title: "stemedu.kz",
      description:
        "stem саласындағы білім беру платформасы. макеттен прод-қа дейінгі веб-әзірлеме.",
      tags: ["web", "education"],
      href: "https://stemedu.kz",
      year: "2025",
    },
    {
      title: "atomedu.kz",
      description:
        "атом ғылымы мен технологиялары бойынша білім беру бастамасының сайты.",
      tags: ["web", "education"],
      href: "https://atomedu.kz",
      year: "2025",
    },
    {
      title: "tedx.kz",
      description:
        "жергілікті tedx үшін веб-жоба — лендинг және іс-шараны сүйемелдеу.",
      tags: ["web", "events"],
      href: "https://tedx.kz",
      year: "2026",
    },
    {
      title: "қр мемлекеттік сатып алу мониторингі",
      description:
        "қазақстанның мемлекеттік сатып алу тендерлері мен лоттарын талдау құралы. 200-ден астам күмәнді лот анықталды, едәуір бюджет шығыны болдырылмады. қазір техникалық себептермен жұмыс істемейді.",
      tags: ["analytics", "govtech", "data"],
      href: null,
      year: "2025",
      status: "жұмыс істемейді",
    },
    {
      title: "zhasyl.kz",
      description:
        "solana-дағы көміртек офсеті: әр тонна co₂-ні токенизациялау, бөлшектеу және on-chain тексеру. көміртек кредиттерінің ашық нарығына арналған web3-инфрақұрылым.",
      tags: ["solana", "web3", "climatetech"],
      href: "https://zhasyl.kz",
      year: "2026",
    },
    {
      title: "smart-pasture",
      description:
        "малды цифрлық бақылау. аграрлық сектор үшін шешім: малды камера мен дрон арқылы санау; динамигі бар gps-трекерлер — бақташы картада жайылым аумағын белгілейді, мал виртуалды шектен шықса, трекер дыбыс шығарады. акселерометрлер малдың белсенділігі мен жай-күйін қадағалайды.",
      tags: ["computer vision", "drones", "iot", "agritech"],
      href: null,
      year: "2026",
    },
  ],
  bots: [
    {
      title: "@zhansayaamath_bot",
      description: "математикадан дайындық пен жаттығуға арналған telegram-бот.",
      href: "https://t.me/zhansayaamath_bot",
    },
    {
      title: "@kazakhzerthana_bot",
      description: "қазақ тіліндегі зерттеулер мен тәжірибелерге арналған бот.",
      href: "https://t.me/kazakhzerthana_bot",
    },
    {
      title: "@propickerbot",
      description: "таңдау / іріктеуге арналған утилитарлық бот.",
      href: "https://t.me/propickerbot",
    },
  ],
  achievements: [
    {
      title: "google build with ai",
      place: "1 орын",
      year: "2024",
    },
    {
      title: "astana tech cup",
      place: "1 орын × 2 · халықаралық финалға жолдама, түркия",
      year: "2025 · 2026",
    },
    {
      title: "decentrathon 5 — zhasyl.kz",
      place: "3 орын · $2000 жүлде",
      year: "2026",
    },
    {
      title: "international engineering mindsets competition «pi-synergy»",
      place: "3 орын",
      year: "2026",
    },
  ],
  experience: [
    {
      role: "мемлекеттік грант жобаларының орындаушысы",
      period: "2026 қаң. бастап",
    },
    {
      role: "pavlodar hub",
      period: "бұрын",
    },
  ],
  languages: [
    { name: "қазақша", level: "ана тілі" },
    { name: "орысша", level: "ана тілі" },
    { name: "ағылшынша", level: "b2" },
    { name: "түрікше", level: "a2" },
    { name: "полякша", level: "a2" },
  ],
  skills: [
    "machine learning",
    "llm engineering",
    "robotics",
    "drones",
    "3d-принтерлер",
    "solana / web3",
    "lab automation",
    "iot",
    "physics",
    "python",
    "rust",
    "web development",
    "docker",
    "telegram bots",
  ],
  media: [
    {
      title: "пайдалы модельге патент № 11764",
      description:
        "күн элементтерінің электрлік жалғану түрлерін зерттеуге арналған модульдік оқу-жаттығу стенді.",
      year: "2026",
      image: "/media/patent-solar-stand.jpg",
      href: "/media/patent-solar-stand.pdf",
    },
    {
      title: "авторлық құқық куәлігі № 69190",
      description:
        "физиканы оқытуға арналған интеллектуалды платформа: ai, тестілеу және виртуалды зертхана интеграциясы.",
      year: "2026",
      image: "/media/copyright-physics-ai.jpg",
      href: "/media/copyright-physics-ai.pdf",
    },
    {
      title: "авторлық құқық куәлігі № 67432",
      description:
        "штангенциркульдің нониус шкаласын қолдануды үйретуге арналған vr-симулятор.",
      year: "2026",
      image: "/media/copyright-vr-caliper.jpg",
      href: "/media/copyright-vr-caliper.pdf",
    },
    {
      title: "авторлық құқық куәлігі № 67084",
      description:
        "stem&creativity — электрондық білім беру ресурсы (веб-сайт).",
      year: "2026",
      image: "/media/copyright-stem-creativity.jpg",
      href: "/media/copyright-stem-creativity.pdf",
    },
    {
      title: "decentrathon 5.0",
      description:
        "«tokenization of real-world assets» кейсінде 3 орын — national solana hackathon трегі.",
      year: "2026",
      image: "/media/decentrathon-5.jpg",
      href: "/media/decentrathon-5.jpg",
    },
    {
      title: "solana summit kazakhstan",
      description:
        "national solana hackathon-да 3 орын үшін $2000 жүлде.",
      year: "2026",
      image: "/media/solana-summit-prize.jpg",
      href: "/media/solana-summit-prize.jpg",
    },
    {
      title: "solana community meetup",
      description: "jet × jito митабы — solana халықаралық қауымдастығы.",
      year: "2026",
      image: "/media/solana-meetup.jpg",
      href: "/media/solana-meetup.jpg",
    },
    {
      title: "марапаттар сөресі",
      description:
        "дипломдар мен патенттер — astana tech cup және «fibonacci robot olympiad» республикалық робототехника чемпионаты.",
      year: "2026",
      image: "/media/awards-wall.jpg",
      href: "/media/awards-wall.jpg",
    },
  ],
  contacts: [
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
      value: "@bekarysdotme",
      href: "https://t.me/bekarysdotme",
    },
    {
      label: "linkedin",
      value: "in/bekarysdotme",
      href: "https://linkedin.com/in/bekarysdotme",
    },
    {
      label: "instagram",
      value: "@bekarysdotme",
      href: "https://instagram.com/bekarysdotme",
    },
  ],
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru, kk };
