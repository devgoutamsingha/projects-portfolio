import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Monitor, Server, Layers, Crown, ChevronLeft, ChevronRight,
  Heart, TrendingUp, Play, Home, ShoppingBag, GraduationCap,
  Car, MapPin, Scissors, Calendar, BookOpen, Plane, Utensils,
  Package, Briefcase, Shield, Globe, Store, Building2,
  Code2, Database, Smartphone, Zap, Cloud, Lock,
  Menu, X, ExternalLink, User
} from "lucide-react";

const CATEGORIES = [
  { id: "cover", label: "Home", icon: User },
  { id: "frontend", label: "Frontend", icon: Monitor },
  { id: "backend", label: "Backend", icon: Server },
  { id: "fullstack", label: "Full Stack", icon: Layers },
  { id: "techlead", label: "Tech Lead", icon: Crown },
];

const TECH_COLORS: Record<string, string> = {
  "React": "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  "React Native": "bg-cyan-400/20 text-cyan-200 border border-cyan-400/30",
  "Next.js": "bg-white/10 text-white border border-white/20",
  "Node.js": "bg-green-500/20 text-green-300 border border-green-500/30",
  "NestJS": "bg-red-500/20 text-red-300 border border-red-500/30",
  "Express": "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  "MongoDB": "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  "PostgreSQL": "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  "GraphQL": "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  "Redis": "bg-red-400/20 text-red-200 border border-red-400/30",
  "Okta": "bg-blue-400/20 text-blue-200 border border-blue-400/30",
  "AWS": "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  "MQTT": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "Ionic": "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
  "D3.js": "bg-orange-400/20 text-orange-200 border border-orange-400/30",
  "Mixpanel": "bg-violet-500/20 text-violet-300 border border-violet-500/30",
  "HLS": "bg-teal-500/20 text-teal-300 border border-teal-500/30",
};

type Project = {
  name: string;
  role: string;
  stack: string[];
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const FRONTEND_PROJECTS: Project[] = [
  {
    name: "GuideDoc",
    role: "Frontend Developer",
    stack: ["Ionic", "D3.js", "Mixpanel"],
    description: "US healthcare platform helping patients find the right medical specialists based on symptoms and guided discovery workflows.",
    icon: Heart,
    accent: "from-rose-600 to-pink-700",
  },
  {
    name: "InvestyFly",
    role: "Frontend Developer",
    stack: ["Ionic"],
    description: "Mobile trading application enabling users to invest and track US stocks and other financial instruments.",
    icon: TrendingUp,
    accent: "from-emerald-600 to-green-700",
  },
  {
    name: "Kevin Hart",
    role: "Frontend Developer",
    stack: ["Ionic", "HLS"],
    description: "OTT video streaming platform for movies, TV shows, and premium video content.",
    icon: Play,
    accent: "from-violet-600 to-purple-700",
  },
  {
    name: "RedOne",
    role: "Frontend Developer",
    stack: ["Ionic", "HLS"],
    description: "Subscription-based OTT streaming platform delivering video-on-demand content.",
    icon: Play,
    accent: "from-red-600 to-rose-700",
  },
  {
    name: "Grexter",
    role: "Frontend Developer",
    stack: ["Ionic"],
    description: "Property discovery platform for finding apartments, rental homes, and real-estate listings.",
    icon: Home,
    accent: "from-amber-600 to-yellow-700",
  },
  {
    name: "Yuuver",
    role: "Frontend Developer",
    stack: ["React", "Node.js"],
    description: "E-commerce platform for apparel and fashion products with web-based shopping experience.",
    icon: ShoppingBag,
    accent: "from-fuchsia-600 to-pink-700",
  },
  {
    name: "ADMTC",
    role: "Frontend Developer",
    stack: ["React", "Node.js"],
    description: "Education and training CMS platform for managing courses, content, and learner engagement.",
    icon: GraduationCap,
    accent: "from-blue-600 to-indigo-700",
  },
];

const BACKEND_PROJECTS: Project[] = [
  {
    name: "YeloMotor",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB"],
    description: "Marketplace for buying and selling cars and motorcycles.",
    icon: Car,
    accent: "from-yellow-600 to-amber-700",
  },
  {
    name: "Bemup",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "Ride-hailing platform connecting riders and drivers with real-time trip updates.",
    icon: MapPin,
    accent: "from-sky-600 to-blue-700",
  },
  {
    name: "UrPC",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "US-based ride-hailing and transportation platform.",
    icon: MapPin,
    accent: "from-indigo-600 to-violet-700",
  },
  {
    name: "BeautyRanger",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "On-demand salon and beauty service booking platform.",
    icon: Scissors,
    accent: "from-pink-600 to-rose-700",
  },
  {
    name: "WanaSeeU",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "Event management and attendee engagement platform.",
    icon: Calendar,
    accent: "from-teal-600 to-emerald-700",
  },
  {
    name: "BedCoin",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "Business and bookkeeping management platform.",
    icon: BookOpen,
    accent: "from-orange-600 to-amber-700",
  },
  {
    name: "PaceRider",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "MongoDB", "MQTT"],
    description: "Africa-focused ride-hailing and transportation solution.",
    icon: MapPin,
    accent: "from-green-600 to-teal-700",
  },
  {
    name: "YollyTally",
    role: "Backend Developer",
    stack: ["Node.js", "Express", "PostgreSQL", "MQTT"],
    description: "B2B commerce and business transaction platform.",
    icon: Briefcase,
    accent: "from-slate-600 to-gray-700",
  },
];

const FULLSTACK_PROJECTS: Project[] = [
  {
    name: "GyRate",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description: "Shopping and commerce application with web and backend services.",
    icon: ShoppingBag,
    accent: "from-violet-600 to-indigo-700",
  },
  {
    name: "MyTravelTracker",
    role: "Full Stack Developer",
    stack: ["Node.js", "NestJS", "PostgreSQL"],
    description: "Personal travel tracking and journey management application.",
    icon: Plane,
    accent: "from-sky-600 to-cyan-700",
  },
  {
    name: "WallEat",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
    description: "Restaurant bill-sharing platform integrated with multiple POS systems.",
    icon: Utensils,
    accent: "from-orange-600 to-red-700",
  },
  {
    name: "Parentcraft India",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
    description: "Professional training and on-demand learning platform.",
    icon: GraduationCap,
    accent: "from-emerald-600 to-green-700",
  },
  {
    name: "HurryApp",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "React Native"],
    description: "Parcel and courier booking, tracking, and delivery platform.",
    icon: Package,
    accent: "from-amber-600 to-yellow-700",
  },
  {
    name: "PHRS",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
    description: "Healthcare recruitment SaaS connecting nurses, employers, and staffing agencies.",
    icon: Heart,
    accent: "from-rose-600 to-pink-700",
  },
  {
    name: "Roods",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
    description: "Travel SaaS platform with maps, multilingual content, and CMS.",
    icon: Globe,
    accent: "from-blue-600 to-indigo-700",
  },
  {
    name: "FreAdd",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
    description: "Retail, services, and commerce platform for businesses and consumers.",
    icon: Store,
    accent: "from-fuchsia-600 to-violet-700",
  },
];

const TECHLEAD_PROJECTS: Project[] = [
  {
    name: "Guardian CMT CAP",
    role: "Tech Lead / Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "GraphQL"],
    description: "Case management modernization platform with claims and eligibility workflows.",
    icon: Shield,
    accent: "from-blue-600 to-indigo-700",
  },
  {
    name: "Guardian Online",
    role: "Tech Lead",
    stack: ["React", "Next.js", "Node.js", "GraphQL", "Redis", "Okta"],
    description: "Enterprise insurance portal modernization with dashboards, authentication, caching, and cloud migration.",
    icon: Building2,
    accent: "from-indigo-600 to-violet-700",
  },
];

function TechBadge({ tech }: { tech: string }) {
  const cls = TECH_COLORS[tech] ?? "bg-gray-500/20 text-gray-300 border border-gray-500/30";
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{tech}</span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-white font-semibold truncate">{project.name}</h3>
            <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
          </div>
          <p className="text-white/50 text-xs mb-3 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => <TechBadge key={t} tech={t} />)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatsBar({ projects }: { projects: Project[] }) {
  const techs = [...new Set(projects.flatMap((p) => p.stack))];
  return (
    <div className="flex gap-6 mb-8">
      <div className="text-center">
        <div className="text-3xl font-bold text-white">{projects.length}</div>
        <div className="text-white/40 text-xs mt-0.5">Projects</div>
      </div>
      <div className="w-px bg-white/10" />
      <div className="text-center">
        <div className="text-3xl font-bold text-white">{techs.length}</div>
        <div className="text-white/40 text-xs mt-0.5">Technologies</div>
      </div>
    </div>
  );
}

function CoverSlide() {
  const allProjects = [...FRONTEND_PROJECTS, ...BACKEND_PROJECTS, ...FULLSTACK_PROJECTS, ...TECHLEAD_PROJECTS];
  const allTechs = [...new Set(allProjects.flatMap((p) => p.stack))];

  const stats = [
    { icon: Monitor, label: "Frontend", value: FRONTEND_PROJECTS.length, color: "text-cyan-400" },
    { icon: Server, label: "Backend", value: BACKEND_PROJECTS.length, color: "text-emerald-400" },
    { icon: Layers, label: "Full Stack", value: FULLSTACK_PROJECTS.length, color: "text-violet-400" },
    { icon: Crown, label: "Tech Lead", value: TECHLEAD_PROJECTS.length, color: "text-amber-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-2xl" />
      </div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/30">
          <span className="text-white text-4xl font-bold">G</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h1 className="text-6xl font-bold text-white mb-3 tracking-tight">Goutam</h1>
        <p className="text-white/50 text-lg mb-2">Full Stack Developer & Tech Lead</p>
        <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-10">
          <Code2 className="w-4 h-4" />
          <span>Building scalable web & mobile solutions</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-4 gap-4 mb-10 w-full max-w-2xl"
      >
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
            <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-white/40 text-xs">{label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div className="text-white/30 text-sm">{allProjects.length} Projects</div>
        <span className="text-white/20">·</span>
        <div className="text-white/30 text-sm">{allTechs.length} Technologies</div>
        <span className="text-white/20">·</span>
        <Zap className="w-3.5 h-3.5 text-amber-400/60" />
        <div className="text-white/30 text-sm">Production Delivered</div>
      </motion.div>
    </div>
  );
}

type Category = { id: string; label: string; icon: React.ComponentType<{ className?: string }>; projects?: Project[]; accent?: string; description?: string };

function ProjectsSlide({ category }: { category: Category }) {
  const Icon = category.icon;
  const projects = category.projects ?? [];

  const accentMap: Record<string, string> = {
    frontend: "text-cyan-400",
    backend: "text-emerald-400",
    fullstack: "text-violet-400",
    techlead: "text-amber-400",
  };

  return (
    <div className="flex flex-col h-full px-8 py-8">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <Icon className={`w-6 h-6 ${accentMap[category.id]}`} />
          <h2 className={`text-2xl font-bold ${accentMap[category.id]}`}>{category.label} Projects</h2>
        </div>
        <p className="text-white/40 text-sm">{category.description}</p>
      </motion.div>

      <StatsBar projects={projects} />

      <div className="flex-1 overflow-y-auto pr-1 scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SLIDES = [
  { id: "cover", label: "Home", icon: User },
  {
    id: "frontend", label: "Frontend", icon: Monitor,
    projects: FRONTEND_PROJECTS,
    description: "Mobile & web UI built with Ionic, React, and D3.js",
    accent: "text-cyan-400",
  },
  {
    id: "backend", label: "Backend", icon: Server,
    projects: BACKEND_PROJECTS,
    description: "APIs and services built with Node.js, Express, MongoDB, and MQTT",
    accent: "text-emerald-400",
  },
  {
    id: "fullstack", label: "Full Stack", icon: Layers,
    projects: FULLSTACK_PROJECTS,
    description: "End-to-end platforms spanning React, Next.js, Node.js, and AWS",
    accent: "text-violet-400",
  },
  {
    id: "techlead", label: "Tech Lead", icon: Crown,
    projects: TECHLEAD_PROJECTS,
    description: "Enterprise-scale leadership on insurance and case management modernization",
    accent: "text-amber-400",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    setMenuOpen(false);
  };
  const prev = () => current > 0 && go(current - 1);
  const next = () => current < SLIDES.length - 1 && go(current + 1);

  const slide = SLIDES[current];

  return (
    <div className="w-full h-screen bg-[#0a0a0f] flex flex-col overflow-hidden font-sans select-none">
      {/* Top nav */}
      <header className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/5 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <span className="text-white/70 text-sm font-medium">Project Portfolio</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {SLIDES.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                  i === current
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu */}
        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 z-30 bg-[#0d0d18] border-b border-white/10 p-4 flex flex-col gap-1"
          >
            {SLIDES.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                    i === current ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide content */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden"
          >
            {slide.id === "cover" ? (
              <CoverSlide />
            ) : (
              <ProjectsSlide category={slide as Category} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer nav */}
      <footer className="shrink-0 flex items-center justify-between px-6 py-4 border-t border-white/5">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          {current > 0 ? SLIDES[current - 1].label : ""}
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all ${
                i === current ? "w-5 h-2 bg-indigo-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
        >
          {current < SLIDES.length - 1 ? SLIDES[current + 1].label : ""}
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
