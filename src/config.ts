export const siteConfig = {
  name: "Chetan Battan",
  title: "Computer Science Student | Specialising in AI & Human-Centred Computing",
  description: "Portfolio website of Chetan Battan",
  accentColor: "#1d4ed8",
  social: {
    email: "chetanbattan@outlook.com",
    linkedin: "http://linkedin.com/in/chetan-battan",
    github: "https://github.com/Chetan-Battan",
  },
  aboutMe:
    "I am a Bachelor of Advanced Computing (Honours) student at the Australian National University, with a focus on Human-Centred Computing and Artificial Intelligence. My work integrates technology and human behaviour to explore how people interact with intelligent systems. Through projects in embedded systems, databases, and computational modelling, I have developed strong analytical and programming skills. I aim to apply these technical and human-focused insights to develop secure and adaptive AI systems that enhance human capability and trust in technology.",
  skills: ["Python", "Java", "SQL", "Dafny", "Human-Centred Computing", "Assembly", "Microcontrollers & Embedded Systems", "Web Development"],
  projects: [
    {
      name: "Public Transport Data Analysis and Visualization",
      description:
        "Analyzed and visualized public transport data using static GTFS datasets, building Python-based pipelines to extract, transform, and represent route, schedule, and service information.",
      link: "Ongoing",
      skills: ["Python", "GTFS", "APIs"],
    }, 
    {
      name: "News Summarizer",
      description:
        "Designed and implemented a Python-based news summarization system that retrieves live news articles via APIs and generates concise summaries using a Hugging Face Transformer-based model, applying modern natural language processing techniques to extract key information from unstructured text.",
      link: "https://github.com/ANU-Chetan/news-summarizer-python/",
      skills: ["Python", "APIs", "Transformers"],
    },
    {
      name: "Autonomous Multi-Sensor Navigation Rover                                                                                                                                         ",
      description:
        "Designed an intelligent Arduino-based rover capable of autonomous navigation through sensor fusion, heuristic pathfinding, and real-time obstacle detection under constrained computational resources.",
      link: "none",
      skills: ["3d printing", "Arduino"],
    },
  ],
  experience: [
    {
      company: "Deloitte",
      title: "Virtual Experience Intern",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Completed simulated consulting projects, delivering actionable solutions for business challenges.",
        "Collaborated with virtual teams to design process optimizations and digital strategies.",
      ],
    },
    {
      company: "Events ACT",
      title: "Floriade Program Coordinator",
      dateRange: "Sep 2024 - Oct 2024",
      bullets: [
        "Coordinated and supported large-scale visitor engagement at Floriade, ensuring smooth operations and an enjoyable experience for thousands of attendees.",
        "Collaborated with a diverse team to manage logistics, schedules, and on-the-ground problem-solving in a fast-paced environment.",
        "Applied organizational and communication skills to assist in event execution, demonstrating reliability, adaptability, and teamwork.",
      ],
    },
    {
      company: "Private Tutor",
      title: "Tutor",
      dateRange: "Jan 2020 - Jun 2023",
      bullets: [
        "Taught pre-high school students’ foundational concepts in mathematics and science, helping improve their problem-solving skills and academic performance.",
        "Designed engaging lessons and hands-on exercises that built students’ confidence and interest in STEM subjects.",
      ],
    },
  ],
  education: [
    {
      school: "Australian National University",
      degree: "Bachelor of Advanced Computing (Honours)",
      dateRange: "2024 - 2027",
      achievements: [
        "Recipient of Vice Chancellor's Scholarship",
        "Class Representative of 4 distinct courses",
      ],
    },
  ],
};
