const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "June 10, 2026",
    title: "I Failed an Interview Because of This Question.",
    image: "/images/blog1.png",
    link: "https://medium.com/@aliarman69720/i-failed-an-interview-because-of-this-question-7f3edb91f775",
  },
  {
    id: 2,
    date: "June 11, 2026",
    title: "Orchestration vs Choreography in Microservices",
    image: "/images/blog2.png",
    link: "https://medium.com/@aliarman69720/orchestration-vs-choreography-in-microservices-0958b87cca15",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },

  // NEW LAYER (this is what makes you stand out)
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2)",
      "Docker",
      "CI/CD",
      "VPS Deployment",
      "Linux Server Management",
    ],
  },
  {
    category: "System Design",
    items: [
      "Microservices Architecture",
      "Caching Strategies (Redis)",
      "Scalable Backend Design",
    ],
  },
  {
    category: "Integrations & APIs",
    items: [
      "Meta API Approval & Integration",
      "REST APIs",
      "Webhook Systems",
      "Third-party API Integration",
    ],
  },
  {
    category: "Deployment",
    items: [
      "Play Store Deployment",
      "App Store Deployment",
      "Vercel & Render Deployment",
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/aliarman89067",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ali-arman-08507524a/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Avatar Replyclone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "avatar-replyclone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Avatar.ReplyClone.io is an AI-powered social media management SaaS",
            "platform built with Next.js, NestJS, OpenAI, Neon, Upstash, and Stripe. Users can manage multiple social accounts,",
            "schedule content, handle messages, create AI avatar videos, and automate publishing workflows from one dashboard.",
            "The platform was designed and launched in under one month with a scalable,",
            "production-ready architecture supporting thousands of active users.",
          ],
        },
        {
          id: 2,
          name: "avatar.replyclone.io",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://avatar.replyclone.io/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "avatar-replyclone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/avatar-replyclone.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Advaram",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-30",
      children: [
        {
          id: 1,
          name: "advaram.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AdVaram developed and launched a real-time rewarded advertising platform on both the App Store",
            "and Google Play within 3 weeks. Built with React Native (Expo), Node.js, and Express,",
            "the app includes business campaign management, reward systems,",
            "OCR receipt validation, referrals, face verification, secure authentication, support chat,",
            "and bank/gift card withdrawals within a scalable mobile SaaS architecture.",
          ],
        },
        {
          id: 2,
          name: "app.store.advaram.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://apps.apple.com/us/app/advaram/id6767310060",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "play.store.advaram.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://play.google.com/store/apps/details?id=com.rama.earnxspot&pcampaignid=web_share",
          position: "top-20 left-60",
        },
        {
          id: 4,
          name: "advaram.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/advaram.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/KHpobNVM2bj3gdKYjT1pSU/Untitled?node-id=0-1&t=sCZasolIvOccoDkd-1",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "ReplyClone AI Landing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "ReplyClone AI Landing Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Designed and developed the ReplyClone AI landing page and conversion funnel focused on maximizing",
            "engagement, subscriptions, and sales performance. Built with Next.js and modern SaaS UI/UX",
            "principles, the landing page includes responsive layouts, persuasive conversion-focused sections,",
            "pricing systems, testimonials, animated visuals, and optimized CTA flows designed for scalable paid traffic and high-converting marketing campaigns.",
          ],
        },
        {
          id: 2,
          name: "replyclone.io",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.replyclone.io",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "replyclone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/replyclone.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/profile.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/profile.png",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    // {
    //   id: 4,
    //   name: "about-me.txt",
    //   icon: "/images/txt.png",
    //   kind: "file",
    //   fileType: "txt",
    //   position: "top-60 left-5",
    //   subtitle: "Meet the Developer Behind the Code",
    //   image: "/images/adrian.jpg",
    //   description: [
    //     "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
    //     "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
    //     "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
    //     "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
    //   ],
    // },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null as unknown | null,
    isMaximized: false,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
