export const profile = {
  name: 'Deepthi Rasad',
  role: 'Full-Stack Developer & Game Developer',
  location: 'Sri Lanka',
  email: 'deepthirasad@gmail.com',
  phone: '+94 76 5733123',
  linkedin: 'https://linkedin.com/in/deepthirasad',
  github: 'https://github.com/deepthirasad',
  summary:
    "I build full-stack apps and games for people who need something shipped, not just prototyped. BSc (Hons) IT graduate from the University of Moratuwa, working with international clients since 2021 — from browser games to production web platforms.",
  // Replace with your own photo at /public/photo.jpg
  photo: '/photo.jpg',
};

export const stats = [
  { value: '30+', label: 'games delivered' },
  { value: '50+', label: 'clients worked with' },
  { value: '4', label: 'years freelancing' },
  { value: '2', label: 'product storefronts run' },
];

export const skills = [
  {
    group: 'Web',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Cross-platform UI', 'API Integration'],
  },
  {
    group: 'Game Dev',
    items: ['Unity', 'Unreal Engine', 'Godot', 'C#', 'C++', 'GDScript'],
  },
  {
    group: 'AI / Data',
    items: ['Python', 'Scikit-learn', 'Random Forest', 'OR-Tools', 'Pandas'],
  },
];

export const projects = [
  {
    id: 'floorplan-ai',
    title: 'AI Residential Floor Plan Recommender',
    tag: 'Machine Learning',
    year: '2026',
    description:
      'Converts a client\u2019s stated preferences into structured floor-plan requirements. Random Forest models predict room dimensions (R\u00b2 0.75\u20130.98), then OR-Tools constraint solving checks the layout is actually buildable.',
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'OR-Tools'],
    image: '/projects/floorplan.jpg',
    video: '/projects/floorplan.mp4',
    link: '',
  },
  {
    id: 'classroom-platform',
    title: 'Student Learning & Classroom Platform',
    tag: 'Web App',
    year: '2025',
    description:
      'Full-stack platform where teachers publish classroom activities and students work through them. Supabase auth, PostgreSQL-backed data model, and access-controlled views for each role.',
    stack: ['React.js', 'Supabase', 'PostgreSQL'],
    image: '/projects/classroom.jpg',
    video: '/projects/classroom.mp4',
    link: '',
  },
  {
    id: 'kids-wellness',
    title: 'Cross-Platform Kids Wellness App',
    tag: 'Mobile App',
    year: '2025',
    description:
      'Mood tracking and interactive wellness activities across multiple child profiles. Firebase Auth with Google Sign-In, Cloud Firestore sync, and a set of reusable animated Flutter widgets.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    image: '/projects/wellness.jpg',
    video: '/projects/wellness.mp4',
    link: '',
  },
  {
    id: 'client-webapps',
    title: 'Client Full-Stack Web Applications',
    tag: 'Web App',
    year: '2025\u2013Present',
    description:
      'A run of custom web apps for international Fiverr clients \u2014 authentication, REST APIs, and database integration, deployed on Vercel and handed off with support.',
    stack: ['React.js', 'Next.js', 'Node.js', 'Vercel'],
    image: '/projects/webapps.jpg',
    video: '/projects/webapps.mp4',
    link: '',
  },
  {
    id: 'html5-games',
    title: 'Interactive HTML5 Game Platform',
    tag: 'Game Dev',
    year: '2021\u20132024',
    description:
      'Thirty-plus browser games built to spec for international clients \u2014 custom game logic, scoring systems, and animation, all in vanilla JavaScript and CSS3.',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/games.jpg',
    video: '/projects/games.mp4',
    link: '',
  },
];

export const experience = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Fiverr \u00b7 Remote',
    period: '2025 \u2014 Present',
    detail:
      'Web and mobile apps for international clients: React.js, Next.js, Node.js, Flutter, Firebase, Supabase. Own the full lifecycle \u2014 requirements, build, deploy, support.',
  },
  {
    role: 'Game Developer Intern',
    org: 'RAM Studios (CodeGen International)',
    period: '2025 \u00b7 6 months',
    detail:
      'Built and tested game features in Unreal Engine and Unity with C# and C++, implementing gameplay mechanics and UI inside a professional dev team.',
  },
  {
    role: 'Freelance Game Developer',
    org: 'Fiverr \u00b7 Remote',
    period: '2021 \u2014 2024',
    detail:
      '30+ browser-based HTML5 games delivered for 50+ international clients, plus Unity/C projects with custom mechanics and scoring systems.',
  },
];

export const education = {
  degree: 'BSc (Hons) in Information Technology',
  school: 'University of Moratuwa, Sri Lanka',
  period: 'Expected 2026 \u00b7 academic requirements complete',
};

export const certifications = [
  'Fiverr Level 2 Badge',
  'AWS Certified \u2014 Basic (Alison, 2026)',
  'Responsive Web Design \u2014 freeCodeCamp (2024)',
  'HackMoral 2024 \u2014 Hackathon Participant',
  'CodeRush 2023 & 2024 \u2014 Hackathon Participant',
];
