export const RESUME_URL = "/Shivam_Gupta_Resume.pdf";

export const PROFILE = {
  name: "Shivam Gupta",
  role: "AI Engineer",
  tagline: "Building real-time AI systems, computer vision & LLM-powered products.",
  location: "Delhi, India",
  email: "shivamgupta.3971@gmail.com",
  phone: "+91 8920808390",
  github: "https://github.com/shivamgupta3971",
  linkedin: "https://linkedin.com/in/shivamgupta2525",
};

export const EDUCATION = [
  {
    year: "2024 — 2028",
    school: "Aravali College of Engineering & Management",
    degree: "B.Tech in Computer Science & Engineering",
    detail: "Specialization in Artificial Intelligence & Machine Learning",
    status: "Pursuing",
  },
  {
    year: "2023 — 2024",
    school: "S.S. Khalsa Sr. Sec. School",
    degree: "Class XII, CBSE",
    detail: "Percentage: 70%",
    status: "Completed",
  },
  {
    year: "2021 — 2022",
    school: "Lingayas Public School",
    degree: "Class X, CBSE",
    detail: "Percentage: 80%",
    status: "Completed",
  },
];

export const PROJECTS = [
  {
    id: "fitveda",
    name: "FITVEDA",
    subtitle: "AI Fitness & Dance Coaching",
    color: "hsl(190 100% 55%)",
    color2: "hsl(160 100% 50%)",
    icon: "🏋️",
    image: "/images/fitveda-showcase.png",
    github: "https://github.com/shivamgupta3971/fitveda",
    summary:
      "Real-time AI Dance & Fitness Coach analyzing YouTube workout videos with MediaPipe Pose, live pose scoring and voice coaching.",
    highlights: [
      "MediaPipe Pose real-time scoring with gesture controls",
      "GPT-4o-mini + Groq Vision + TTS voice coaching",
      "Next.js, React, TypeScript, Tailwind, Modal (SAM2)",
      "Spotify-Wrapped style personalized performance report",
    ],
    stack: ["Next.js", "TypeScript", "MediaPipe", "OpenAI", "Groq", "Tailwind"],
  },
  {
    id: "delayed-ai-clone",
    name: "Delayed AI Clone",
    subtitle: "Real-time Computer Vision",
    color: "hsl(268 90% 62%)",
    color2: "hsl(300 90% 65%)",
    icon: "👥",
    image: "/images/delayed-ai-clone-showcase.png",
    github: "https://github.com/shivamgupta3971/Delayed-AI-Clone",
    summary:
      "AI-powered delayed clone system creating a ghost-like temporal shadow of the user with pose, hand and face landmark tracking.",
    highlights: [
      "Python + OpenCV + MediaPipe pipeline",
      "Pose, hand & face mesh with temporal buffering",
      "Low-latency real-time landmark rendering",
      "Optimized for smooth 60 FPS clone effect",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
  },
  {
    id: "f1-replay",
    name: "F1 Replay System",
    subtitle: "Race Telemetry Visualizer",
    color: "hsl(0 90% 60%)",
    color2: "hsl(30 100% 55%)",
    icon: "🏁",
    image: "/images/f1-replay-showcase.png",
    github: "https://github.com/shivamgupta3971/F1_analyst_system",
    summary:
      "Interactive Formula 1 race replay app visualizing real-time telemetry, driver positions, tyres, DRS and lap timing on a rendered track.",
    highlights: [
      "FastF1 + Arcade + NumPy telemetry pipeline",
      "Playback controls, live leaderboard, lap timing",
      "Tyre compounds, DRS, speed / gear / throttle / brake",
      "Cached telemetry for smooth replay & analysis",
    ],
    stack: ["Python", "FastF1", "Arcade", "NumPy"],
  },
  {
    id: "carelink",
    name: "CareLink",
    subtitle: "AI Post-Surgical Monitoring",
    color: "hsl(140 80% 55%)",
    color2: "hsl(190 100% 55%)",
    icon: "🩺",
    image: "/images/carelink-showcase.png",
    github: "https://github.com/shivamgupta3971/Care_Link",
    summary:
      "LLM-powered patient monitoring platform automating post-discharge follow-up calls, complication detection and clinical decision support.",
    highlights: [
      "Automated follow-up calls via Twilio + ElevenLabs",
      "RAG with Elasticsearch, Jina Embeddings, Perplexity",
      "Clinician dashboards, records, analytics, AI chatbot",
      "React + Express + Elastic Cloud full-stack",
    ],
    stack: ["React", "Express", "Elasticsearch", "Twilio", "ElevenLabs", "RAG"],
  },
] as const;

export const SKILL_GROUPS = [
  {
    label: "AI / ML",
    color: "hsl(190 100% 55%)",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "LLMs", "RAG", "Prompt Engineering", "AI Agents", "Pose Estimation", "Semantic Search"],
  },
  {
    label: "Languages",
    color: "hsl(268 90% 62%)",
    skills: ["Python", "TypeScript", "JavaScript", "C", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    color: "hsl(160 100% 50%)",
    skills: ["React", "Next.js", "Express.js", "OpenCV", "MediaPipe", "NumPy", "Tailwind"],
  },
  {
    label: "Tools & Cloud",
    color: "hsl(30 100% 60%)",
    skills: ["Git", "GitHub", "Postman", "Power BI", "FFmpeg", "yt-dlp", "Elasticsearch", "Elastic Cloud"],
  },
  {
    label: "Concepts",
    color: "hsl(320 90% 65%)",
    skills: ["DSA", "REST APIs", "Full-Stack Dev", "Agentic AI", "AI Automation", "Real-Time AI"],
  },
];

export const ACHIEVEMENTS = [
  { title: "National Hackathon Winner", detail: "Winner of 1 National-Level Hackathon", icon: "🏆" },
  { title: "Top 10 Finalist", detail: "Among 1,000+ teams at Chandigarh University Hackathon", icon: "🥇" },
  { title: "India Innovates 2026", detail: "Qualified for nationwide innovation competition", icon: "🚀" },
  { title: "10+ National Hackathons", detail: "Experience in AI, full-stack & rapid prototyping", icon: "⚡" },
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    code: "PL-300",
    issuer: "Microsoft",
    credentialId: "146F873FF8BD8DB6",
    certificationNumber: "CE5B71-3652U9",
    dateEarned: "23 July 2026",
    dateExpired: "24 July 2027",
    url: "https://learn.microsoft.com/en-in/users/shivamgupta-2824/credentials/certification/data-analyst-associate?tab=credentials-tab",
  },
  {
    title: "Complete Data Science, ML, DL & NLP Bootcamp",
    code: "Certification",
    issuer: "Advanced ML Program",
  },
];
