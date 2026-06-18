export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Analyzer",
    description: "SEO and performance audit tool for website health analysis.",
    longDescription: "A full-stack web application that audits websites for SEO health, page performance, and analytics, consolidating results into an easy-to-read report. It fetches site metrics and transforms raw data into clear, actionable insights.",
    tech: ["Python", "Flask", "BeautifulSoup", "SQLite", "SEO", "Analytics"],
    githubUrl: "https://github.com/naikbilal06",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    features: [
      "Website SEO and performance scoring",
      "Visual analytics dashboard",
      "Automated page audits",
      "Data processing with BeautifulSoup",
      "SQLite-backed reporting",
      "Actionable optimization insights"
    ]
  },
  {
    id: 2,
    title: "Hotel Management System",
    description: "Reservation and billing system built with ASP.NET Core and SQL Server.",
    longDescription: "A hotel management solution designed to handle room bookings, billing, and customer records. It uses a relational database schema to maintain data integrity and supports real-time availability tracking.",
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap"],
    githubUrl: "https://github.com/naikbilal06",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop",
    features: [
      "Room booking and availability management",
      "Customer record tracking",
      "Billing and invoice generation",
      "Relational database design",
      "Secure data handling",
      "Responsive management interface"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and contact details.",
    longDescription: "A responsive portfolio website that highlights web development experience, technical skills, and key projects with modern design and animations.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/naikbilal06/portfolio",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    features: [
      "Responsive design",
      "Project showcase",
      "Contact form integration",
      "Animations and transitions",
      "Clean layout",
      "Performance optimized"
    ]
  },
  // {
  //   id: 3,
  //   title: "Task Management App",
  //   description: "Productivity app for task management",
  //   longDescription: "A responsive task management application with drag & drop features, priority settings, and progress tracking.",
  //   tech: ["React", "TypeScript", "Tailwind CSS", "Context API", "Local Storage"],
  //   githubUrl: "https://github.com/muzamilCodes/task-manager",
  //   liveUrl: "https://task-manager-muzamil.vercel.app",
  //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
  //   features: [
  //     "Drag & drop interface",
  //     "Priority & deadline settings",
  //     "Progress tracking",
  //     "Dark/Light mode",
  //     "Local storage",
  //     "Responsive design"
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "API Dashboard",
  //   description: "Monitoring dashboard for APIs",
  //   longDescription: "A comprehensive dashboard to monitor, analyze, and manage multiple APIs with performance metrics and logging.",
  //   tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
  //   githubUrl: "https://github.com/muzamilCodes/api-dashboard",
  //   liveUrl: "https://apidashboard.demo",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  //   features: [
  //     "Real-time API monitoring",
  //     "Performance analytics",
  //     "Error tracking & logging",
  //     "Rate limiting visualization",
  //     "Automated alerts",
  //     "Historical data analysis"
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "HealthCare App",
  //   description: "Healthcare appointment booking system",
  //   longDescription: "A platform for patients to book appointments with doctors, view medical records, and receive health tips.",
  //   tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Bootstrap"],
  //   githubUrl: "https://github.com/muzamilCodes/healthcare-system",
  //   liveUrl: "https://healthcare.demo",
  //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
  //   features: [
  //     "Doctor appointment booking",
  //     "Patient medical records",
  //     "Prescription management",
  //     "Video consultation feature",
  //     "Medicine reminder system",
  //     "Health blog & tips"
  //   ]
  // }
];  