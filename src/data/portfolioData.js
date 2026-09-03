export const profile = {
  name: 'Deepthi Rasad',
  role: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'deepthirasad@gmail.com',
  phone: '+94 76 5733123',
  linkedin: 'https://www.linkedin.com/in/deepthi-rasad-62babb352/',
  github: 'https://github.com/deepthirasad',
  photo: '/photo.png',
  resume: '/resume.pdf',
  basedIn: 'Sri Lanka · GMT+5:30',
  languages: 'English · Sinhala · Japanese',
};

export const education = {
  degree: 'BSc (Hons) in Information Technology',
  school: 'University of Moratuwa',
  period: 'Expected 2026',
};

export const heroStats = [
  { value: '10+', label: 'PROJECTS DELIVERED' },
  { value: '20+', label: 'CLIENTS WORLDWIDE' },
  { value: 'L2', label: 'FIVERR SELLER BADGE' },
];

export const stack = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'Supabase',
  'PostgreSQL', 'Firebase', 'Python', 'Unity', 'Unreal Engine', 'Docker',
];

// Rendered in the signal color to match the accent chips in the mockup.
export const stackHighlight = new Set(['TypeScript', 'PostgreSQL']);

export const highlightCards = [
  {
    index: '01 / FRONTEND',
    title: 'Interfaces that respond',
    desc: 'React, Next.js and Tailwind - responsive layouts, motion, and accessible component systems.',
  },
  {
    index: '02 / BACKEND',
    title: 'APIs and data, wired up',
    desc: 'Node, Express and .NET with REST APIs, auth flows, and PostgreSQL, MongoDB or Supabase behind them.',
  },
  {
    index: '03 / GAMES & AI',
    title: 'Playable and predictive',
    desc: 'Unity, Unreal and Godot for gameplay; Python and Scikit-learn for models that inform product decisions.',
  },
];

// Media isn't listed here — it's auto-discovered from /public/projects/<id>/
// at runtime (see src/hooks/useProjectMedia.js). For each project below,
// drop in as many numbered screenshots as you have and an optional video:
//   public/projects/<id>/1.jpg, 2.jpg, 3.jpg ...   (.png also works)
//   public/projects/<id>/video.mp4                  (optional)
// Nothing here needs to change — any number of images, with or without a
// video, just shows up. Until files exist, the card/modal show `placeholder`.
export const projects = [
  {
    id: 'pencilpath',
    title: 'PencilPath',
    year: '2026',
    blurb: 'Pen-and-paper-style learning activities for a US classroom platform - built full-stack on Next.js and Supabase.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL'],
    placeholder: 'PencilPath screens',
    modal: {
      kicker: 'STUDENT EDUCATION PLATFORM · 2026',
      title: 'PencilPath',
      body: 'A student-focused education platform designed around interactive, pen-and-paper-style learning activities. Built for a US client to help teachers deliver engaging classroom activities while providing students with an intuitive, familiar learning experience.',
      points: [
        'Designed interactive, pen-and-paper-style learning activities that feel familiar to students.',
        'Built for a US-based client, with tools for teachers to create and deliver classroom activities.',
        'Full-stack build on Next.js with Supabase auth and a PostgreSQL data model, deployed on Vercel.',
      ],
      tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
    },
  },
  {
    id: 'kahanigahr',
    title: 'KahaniGahr',
    year: '2025',
    blurb: "Games, audiobooks and video stories in one kids' learning app, with Firebase content management and subscriptions.",
    tags: ['Unity', 'C#', 'Firebase'],
    placeholder: 'KahaniGahr app screens',
    modal: {
      kicker: 'EDUCATIONAL MOBILE GAME PLATFORM · 2025',
      title: 'KahaniGahr',
      body: 'A kids-focused educational mobile application combining interactive games, audiobooks, and video stories in one platform. Includes Google authentication, Firebase-powered content management, premium subscriptions, and an admin system for managing educational media and content.',
      points: [
        "Combined interactive games, audiobooks and video stories into one kids' learning platform.",
        'Google authentication and Firebase-powered content management for educational media.',
        'Premium subscriptions plus an admin system for managing content and users.',
      ],
      tags: ['Unity', 'C#', 'Firebase', 'Google Authentication'],
    },
  },
  {
    id: 'kids-wellness',
    title: 'Kids Wellness Mobile Application',
    year: '2025',
    blurb: 'Mood tracking, guided meditation and mini-games for kids, with a parent dashboard and admin console.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    placeholder: 'Wellness app screens',
    modal: {
      kicker: 'MINDFULNESS & WELLNESS APPLICATION · 2025',
      title: 'Kids Wellness Mobile Application',
      body: 'A child-friendly mobile application designed to support mindfulness and emotional well-being through mood tracking, guided meditation, interactive mini-games, and personalized child profiles. Includes a parent dashboard, achievement system, and an admin application for managing users and wellness content.',
      points: [
        'Mood tracking, guided meditation and interactive mini-games for emotional well-being.',
        'Personalized child profiles with a parent dashboard and achievement system.',
        'Companion admin application for managing users and wellness content.',
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    },
  },
  {
    id: 'stylo',
    title: 'STYLO',
    year: '2024',
    blurb: 'A microservices e-commerce platform for customers, sellers and admins, built as a university team project.',
    tags: ['React', 'Spring Boot', 'MySQL'],
    placeholder: 'STYLO storefront screens',
    modal: {
      kicker: 'ONLINE CLOTHING STORE · 2024',
      title: 'STYLO',
      body: 'A scalable e-commerce platform developed as a university team project using a microservices architecture. The system supports customers, sellers, and administrators with secure authentication, product management, shopping cart and order processing, and role-based operations.',
      points: [
        'Microservices architecture supporting customers, sellers and administrators.',
        'Secure authentication, product management, and shopping cart / order processing.',
        'Built as a university team project with Cypress and Mockito test coverage.',
      ],
      tags: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Cypress', 'Mockito'],
    },
  },
  {
    id: 'eventify',
    title: 'Eventify',
    year: '2024',
    blurb: 'Connects clients with event vendors - discovery, real-time chat, and full event-planning dashboards.',
    tags: ['Angular', 'ASP.NET Core', 'MySQL'],
    placeholder: 'Eventify dashboard screens',
    modal: {
      kicker: 'EVENT MANAGEMENT SYSTEM · 2024',
      title: 'Eventify',
      body: 'A comprehensive event management platform designed to connect clients with event service providers and streamline event planning. Features include vendor discovery and comparison, real-time communication, location-based search, dashboards, checklists, agendas, notifications, ratings, and administrative management.',
      points: [
        'Vendor discovery and comparison with location-based search via Google Maps.',
        'Real-time communication between clients and event service providers.',
        'Dashboards, checklists, agendas, notifications, ratings and admin management.',
      ],
      tags: ['Angular', 'ASP.NET Core', 'MySQL', 'Firebase', 'Google Maps API'],
    },
  },
  {
    id: 'archviz',
    title: 'Archviz',
    year: '2025',
    blurb: 'An explorable, customizable 3D apartment built in Unreal Engine with Blueprint and C++.',
    tags: ['Unreal Engine', 'C++', 'Blueprint'],
    placeholder: 'Archviz environment capture',
    modal: {
      kicker: 'INTERACTIVE ARCHITECTURAL VISUALIZATION · 2025',
      title: 'Archviz',
      body: 'A realistic 3D architectural visualization application that allows users to explore and customize a virtual apartment environment. Developed interactive environments, player navigation, apartment customization features, and gameplay systems using both Blueprint and C++.',
      points: [
        'Explorable, customizable virtual apartment built as a 3D visualization tool.',
        'Player navigation and interactive environments authored in Blueprint and C++.',
        'Apartment customization features layered on top of core gameplay systems.',
      ],
      tags: ['Unreal Engine', 'C++', 'Blueprint', '3D Environment Design'],
    },
  },
  {
    id: 'kuweni',
    title: 'Kuweni',
    year: '2025',
    blurb: 'A 2D adventure game rooted in Sri Lankan history, built end-to-end in Godot.',
    tags: ['Godot', 'GDScript', 'UI/UX'],
    placeholder: 'Kuweni gameplay capture',
    modal: {
      kicker: '2D HISTORICAL ADVENTURE GAME · 2025',
      title: 'Kuweni',
      body: 'A 2D game inspired by Sri Lankan history, combining interactive gameplay with a culturally inspired narrative. Contributed to programming, asset creation, UI design, animations, sound effects, and overall game development using the Godot Engine.',
      points: [
        'A 2D historical adventure inspired by Sri Lankan history and culture.',
        'Contributed programming, asset creation, UI design, animation and sound.',
        'Built end-to-end in the Godot Engine with GDScript.',
      ],
      tags: ['Godot', 'GDScript', '2D Game Development', 'UI/UX', 'Animation', 'Audio'],
    },
  },
  {
    id: 'floorplan-ai',
    title: 'AI-Based Floor Plan Recommendation System',
    year: '2026',
    blurb: 'Final-year research project turning informal preferences into feasible floor plans, with LLM interpretation, Random Forest predictions and OR-Tools validation.',
    tags: ['Python', 'Random Forest', 'OR-Tools'],
    placeholder: 'Floor plan system screens',
    modal: {
      kicker: 'FINAL-YEAR RESEARCH · AI & MACHINE LEARNING · 2026',
      title: 'AI-Based Floor Plan Recommendation System',
      body: 'An AI-assisted residential floor plan recommendation system that transforms informal user preferences into structured, machine-readable design constraints. My contribution focused on the User Preference module, using LLM-based preference interpretation, Random Forest models for room and house dimension prediction, and OR-Tools for constraint-based space allocation and feasibility validation.',
      points: [
        'Built the User Preference module, translating informal client input into structured design constraints.',
        'Used LLM-based preference interpretation to turn free-form requirements into machine-readable data.',
        'Trained Random Forest models to predict room and house dimensions, validated with OR-Tools constraint solving.',
      ],
      tags: ['Python', 'LLMs', 'Random Forest', 'OR-Tools', 'Machine Learning'],
    },
  },
];
