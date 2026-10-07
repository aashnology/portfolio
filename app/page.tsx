'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  Terminal, 
  Cpu, 
  Activity, 
  Send,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  status?: string;
  edition: string;
}

const ANALYTICS_PROJECTS: Project[] = [
  {
    edition: "VOL. 01",
    title: "KKBox Churn Retention",
    tagline: "Subscription Lifespan & Renewal Dynamics",
    category: "Predictive Analytics & Retention",
    description: "Deep quantitative analysis exploring behavioral inflection points, transactional anomalies, and tenure features to forecast user churn in recurring digital subscriptions.",
    tags: ["Python", "SQL", "Scikit-Learn", "Survival Analysis", "Feature Engineering"],
    githubUrl: "https://github.com/aashnology/kkbox-churn-retention",
  },
  {
    edition: "VOL. 02",
    title: "Skip Behavior Analysis",
    tagline: "Algorithmic Patterning in Audio Streams",
    category: "Consumer Behavior & Streaming",
    description: "Granular statistical modeling assessing skip latency, track duration thresholds, and context-dependent engagement across large-scale audio telemetry data.",
    tags: ["Pandas", "EDA", "Statistical Testing", "Data Storytelling", "Seaborn"],
    githubUrl: "https://github.com/aashnology/skip-behavior-analysis",
  },
  {
    edition: "VOL. 03",
    title: "Churn Ops",
    tagline: "End-to-End Orchestrated Pipeline",
    category: "Production ML & MLOps",
    status: "IN DEVELOPMENT",
    description: "Automated end-to-end churn intelligence system integrating telemetry extraction, drift monitoring, automated inference batches, and alerting endpoints.",
    tags: ["ETL Pipelines", "Airflow", "FastAPI", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/aashnology/churn-ops",
  }
];

const SIDE_QUESTS: Project[] = [
  {
    edition: "ISSUE A",
    title: "KyuYaar",
    tagline: "Agentic Decision Support Framework",
    category: "Decision Intelligence & LLM Agents",
    description: "Context-aware conversational intelligence framework architected to parse business operational queries and synthesize structured, evidence-based reasoning.",
    tags: ["Python", "Streamlit", "Agentic Systems", "Prompt Engine"],
    githubUrl: "https://github.com/aashnology/KyuYaar",
  },
  {
    edition: "ISSUE B",
    title: "Isse Automate Kardo",
    tagline: "Autonomous Workflow Orchestration",
    category: "Workflow Automation & CLI",
    description: "Zero-friction workflow engine eliminating repetitive operational bottlenecks through programmatic file operations, parsing, and pipeline triggers.",
    tags: ["Automation", "Python", "CLI Tooling", "Process Engineering"],
    githubUrl: "https://github.com/aashnology/Isse-Automate-Kardo",
  },
  {
    edition: "ISSUE C",
    title: "Woof",
    tagline: "Pet Care & Canine Behavior Insights",
    category: "Consumer Tech & Diagnostics",
    description: "Clean mobile-first architecture tracking companion animal routines, nutritional benchmarks, and health indices with high-contrast minimalist visualization.",
    tags: ["TypeScript", "Next.js", "Data Modeling", "UI/UX"],
    githubUrl: "https://github.com/aashnology/Woof",
  },
  {
    edition: "ISSUE D",
    title: "StimulusBio",
    tagline: "Computational Bio-Signals & Informatics",
    category: "Bioinformatics & Signal Modeling",
    description: "Algorithmic exploration of cellular metrics and biological stimuli datasets, translating complex computational biological inputs into legible signal models.",
    tags: ["Bioinformatics", "Data Exploration", "NumPy", "Scientific Computing"],
    githubUrl: "https://github.com/aashnology/StimulusBio",
  }
];

const EXPERTISE_AREAS = [
  {
    number: "01",
    title: "Data Engineering & Pipelines",
    description: "Designing robust, fault-tolerant ingestion pipelines and data models that turn raw transactional telemetry into crisp, query-optimized analytical warehouses."
  },
  {
    number: "02",
    title: "Predictive Modeling & Churn",
    description: "Deconstructing user lifecycles through survival analysis, logistic risk scores, and classification frameworks to safeguard customer lifetime value."
  },
  {
    number: "03",
    title: "Analytics Engineering",
    description: "Bridge between raw storage and business leadership: establishing semantic layers, deterministic metric logic, and high-fidelity BI reporting modules."
  },
  {
    number: "04",
    title: "Automation & Tooling",
    description: "Developing custom CLI scripts, agentic assistants, and scheduled routines that systematically eradicate human drag from data ecosystems."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'analytics', 'sidequests', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white selection:text-black antialiased">
      
      {/* TOP TICKER & ISSUE META */}
      <div className="border-b border-[#222222] text-[10px] uppercase tracking-[0.25em] text-[#888888] py-2 px-6 flex justify-between items-center bg-[#0d0d0d] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>AUTUMN / WINTER 2026 EDITION</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>PORTFOLIO COLLECTION NO. IV</span>
          <span>DATA SCIENCE & PIPELINE OPS</span>
        </div>
        <div>
          <span>DEV: aashnology</span>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="border-b border-[#222222] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-[33px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-serif text-2xl tracking-tight text-white font-normal hover:opacity-80 transition-opacity">
              AASHNA <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#777] ml-2">/ ARCHIVE</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] font-medium text-[#999999]">
            {[
              { label: '01. Front Cover', id: 'hero' },
              { label: '02. Profile', id: 'about' },
              { label: '03. Analytics Index', id: 'analytics' },
              { label: '04. Side Quests', id: 'sidequests' },
              { label: '05. Inquiries', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-all duration-300 relative py-1 hover:text-white ${
                  activeSection === link.id ? 'text-white' : ''
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aashnology"
              target="_blank"
              rel="noreferrer"
              className="text-[#999999] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#222222] bg-[#0d0d0d] px-6 py-6 flex flex-col gap-4 text-xs tracking-[0.2em] uppercase text-[#aaaaaa]">
            <button onClick={() => scrollTo('hero')} className="text-left py-2 hover:text-white">01. Front Cover</button>
            <button onClick={() => scrollTo('about')} className="text-left py-2 hover:text-white">02. Profile & Vision</button>
            <button onClick={() => scrollTo('analytics')} className="text-left py-2 hover:text-white">03. Analytics Index</button>
            <button onClick={() => scrollTo('sidequests')} className="text-left py-2 hover:text-white">04. Side Quests</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2 hover:text-white">05. Inquiries</button>
          </div>
        )}
      </header>

      <main>
        {/* =========================================================================
            SECTION 1: HERO
        ========================================================================= */}
        <section id="hero" className="border-b border-[#222222] relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.3em] text-[#888888]">
              <span className="h-px w-8 bg-[#444444]"></span>
              <span>The Curated Portfolio of Aashna</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
              <div className="lg:col-span-8">
                <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white font-normal uppercase">
                  Data <br />
                  <span className="italic font-light lowercase">meets</span> <br />
                  Elegance.
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between self-end border-t lg:border-t-0 lg:border-l border-[#222222] pt-8 lg:pt-0 lg:pl-10">
                <p className="text-[#a0a0a0] text-sm md:text-base font-light leading-relaxed mb-8">
                  Where statistical rigor, pipeline engineering, and creative computational design converge. Architecting clarity from raw chaos for modern platforms.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#777777] mb-8">
                  <div className="flex justify-between border-b border-[#1f1f1f] pb-2">
                    <span>SPECIALIZATION</span>
                    <span className="text-white">ANALYTICS & PIPELINES</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1f1f1f] pb-2">
                    <span>DISCIPLINE</span>
                    <span className="text-white">DATA SCIENCE / ENGINEERING</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1f1f1f] pb-2">
                    <span>STATUS</span>
                    <span className="text-emerald-400">AVAILABLE</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => scrollTo('analytics')}
                    className="group bg-white text-black px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-[#d4d4d4] transition-all"
                  >
                    <span>Explore Work</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="border border-[#333333] hover:border-white text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center transition-colors"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-4 gap-6 text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              <div>
                <span className="block text-white font-serif text-lg tracking-normal">01 / RETENTION</span>
                Behavioral Survival Models
              </div>
              <div>
                <span className="block text-white font-serif text-lg tracking-normal">02 / TELEMETRY</span>
                Streaming Pattern Analysis
              </div>
              <div>
                <span className="block text-white font-serif text-lg tracking-normal">03 / ORCHESTRATION</span>
                Continuous Automation Ops
              </div>
              <div>
                <span className="block text-white font-serif text-lg tracking-normal">04 / INTERFACES</span>
                Human-Agent Interaction
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ABOUT ME
        ========================================================================= */}
        <section id="about" className="border-b border-[#222222] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#777777] mb-12">
              <span>02</span>
              <span className="h-px w-6 bg-[#333333]"></span>
              <span>Biographical Profile & Statement</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="relative border border-[#262626] p-4 bg-[#0d0d0d]">
                  <div className="aspect-[4/5] bg-gradient-to-b from-[#1c1c1c] to-[#111111] border border-[#222222] flex flex-col justify-between p-8 relative overflow-hidden">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#888888] flex justify-between">
                      <span>FIGURE 01. PROFILE</span>
                      <span>FIG. 2026</span>
                    </div>

                    <div className="my-auto text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full border border-[#444444] flex items-center justify-center bg-[#141414]">
                        <Terminal size={32} className="text-white" />
                      </div>
                      <div className="font-serif text-2xl uppercase tracking-wider text-white">Aashna</div>
                      <p className="text-xs text-[#888] font-mono tracking-wide max-w-[220px] mx-auto">
                        DATA ANALYST & ENGINEER
                      </p>
                    </div>

                    <div className="border-t border-[#222222] pt-4 flex justify-between text-[10px] text-[#666] font-mono uppercase tracking-widest">
                      <span>ETL / SQL / PYTHON</span>
                      <span>VOGUE MINIMAL</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#666666] italic">
                      "Precision in numbers is an aesthetic discipline."
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
                    Engineering Clarity from Telemetry & Scale.
                  </h2>
                  <p className="text-[#a9a9a9] text-base leading-relaxed font-light mb-6">
                    I treat data not merely as numbers in tabular storage, but as the pulse of human interaction and structural efficiency. With a rigorous background bridging data science and engineering, I specialize in translating fragmented business pipelines into cohesive predictive architectures.
                  </p>
                  <p className="text-[#888888] text-sm leading-relaxed font-light">
                    From modeling subscriber retention curves on high-frequency streaming platforms to engineering automated agents that liberate cross-functional teams, my philosophy is rooted in clean lines, reproducible code, and measurable business momentum.
                  </p>
                </div>

                <div className="border-t border-[#222222] pt-8">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-white font-medium mb-6">
                    Core Technical Pillars
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {EXPERTISE_AREAS.map((item) => (
                      <div key={item.number} className="border-l border-[#262626] pl-4 py-1">
                        <span className="font-mono text-xs text-[#666666] block mb-1">{item.number}</span>
                        <h4 className="text-sm font-medium text-white mb-2">{item.title}</h4>
                        <p className="text-xs text-[#888888] leading-relaxed font-light">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-8 border-t border-[#222222]">
                  <div>
                    <span className="block font-serif text-2xl text-white">Python & SQL</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">Primary Stack</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl text-white">Pipelines</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">Telemetry & ML</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl text-white">Production</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">End-to-End Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: DATA ANALYTICS PROJECTS
        ========================================================================= */}
        <section id="analytics" className="border-b border-[#222222] py-24 md:py-32 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#222222]">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#777777] mb-3">
                  <span>03</span>
                  <span className="h-px w-6 bg-[#333333]"></span>
                  <span>Curated Works</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight text-white">
                  Data Analytics & Ops
                </h2>
              </div>
              <p className="text-xs text-[#777] tracking-[0.2em] uppercase max-w-xs mt-4 md:mt-0">
                Predictive retention, telemetry analysis, and enterprise data lifecycle systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ANALYTICS_PROJECTS.map((project, idx) => (
                <div
                  key={idx}
                  className="group border border-[#222222] bg-[#090909] p-8 flex flex-col justify-between hover:border-white transition-all duration-300 relative"
                >
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] mb-6">
                      <span>{project.edition}</span>
                      {project.status ? (
                        <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 border border-amber-400/20">{project.status}</span>
                      ) : (
                        <span className="text-[#888888]">{project.category}</span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl text-white mb-2 group-hover:italic transition-all">
                      {project.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.15em] text-[#999999] mb-6">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-[#888888] leading-relaxed font-light mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8 border-t border-[#1a1a1a] pt-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono uppercase tracking-wider text-[#777] bg-[#121212] px-2 py-1 border border-[#1f1f1f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs uppercase tracking-[0.2em] font-medium text-white border-b border-[#333333] pb-2 group-hover:border-white transition-colors"
                    >
                      <span>Examine Repository</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: SIDE QUESTS PROJECTS
        ========================================================================= */}
        <section id="sidequests" className="border-b border-[#222222] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#222222]">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#777777] mb-3">
                  <span>04</span>
                  <span className="h-px w-6 bg-[#333333]"></span>
                  <span>Experimental Labs</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight text-white">
                  Side Quests & Automations
                </h2>
              </div>
              <p className="text-xs text-[#777] tracking-[0.2em] uppercase max-w-xs mt-4 md:mt-0">
                Agentic workflows, bio-signals, companion apps, and productivity frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SIDE_QUESTS.map((quest, idx) => (
                <div
                  key={idx}
                  className="border border-[#1e1e1e] p-8 sm:p-10 bg-[#0c0c0c] flex flex-col justify-between hover:border-[#555] transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] uppercase text-[#666666] mb-4">
                      <span>{quest.edition}</span>
                      <span>{quest.category}</span>
                    </div>

                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-serif text-2xl sm:text-3xl text-white">
                        {quest.title}
                      </h3>
                      <span className="text-[11px] text-[#777] uppercase tracking-wider">
                        Open Source
                      </span>
                    </div>

                    <p className="text-xs uppercase tracking-[0.15em] text-[#888888] mb-4">
                      {quest.tagline}
                    </p>

                    <p className="text-sm text-[#888888] font-light leading-relaxed mb-6">
                      {quest.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {quest.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono uppercase tracking-wider text-[#777777] bg-[#141414] px-2.5 py-1 border border-[#222222]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={quest.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-[#bbb] transition-colors"
                    >
                      <span>View Source on GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: CONTACT ME
        ========================================================================= */}
        <section id="contact" className="py-24 md:py-36 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#777777] mb-12">
              <span>05</span>
              <span className="h-px w-6 bg-[#333333]"></span>
              <span>Direct Inquiries</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
                    Initiate <br />
                    Dialogue.
                  </h2>
                  <p className="text-[#888888] text-sm leading-relaxed font-light">
                    Available for high-impact analytical initiatives, pipeline engineering, or full-time data intelligence roles.
                  </p>
                </div>

                <div className="space-y-4 border-t border-[#222222] pt-8">
                  <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#666]">GitHub</span>
                    <a
                      href="https://github.com/aashnology"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-wider text-white hover:underline flex items-center gap-1"
                    >
                      github.com/aashnology <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#666]">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/aashnadataanalyst"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-wider text-white hover:underline flex items-center gap-1"
                    >
                      in/aashnadataanalyst <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#666]">Direct Dispatch</span>
                    <a
                      href="mailto:contact@aashnology.com"
                      className="text-xs uppercase tracking-wider text-white hover:underline flex items-center gap-1"
                    >
                      Inquire via Email <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>

                <div className="p-6 border border-[#222222] bg-[#0e0e0e] text-xs font-mono text-[#777777] leading-relaxed">
                  <div className="text-white uppercase tracking-widest mb-2 font-serif text-sm">Response Protocol</div>
                  All professional correspondence is typically answered within 24 to 48 standard business hours.
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border border-[#222222] bg-[#0c0c0c] p-8 sm:p-12">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[#aaaaaa] font-medium mb-8">
                    Correspondence Transmission Form
                  </h3>

                  {formSubmitted ? (
                    <div className="py-16 text-center space-y-4">
                      <Sparkles className="mx-auto text-white" size={32} />
                      <h4 className="font-serif text-2xl text-white uppercase">Message Dispatched</h4>
                      <p className="text-xs text-[#888888] tracking-widest uppercase">
                        Your communication has been registered.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-[#777777] mb-2">
                          01 / Full Legal or Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Elena Rostova or Enterprise Org"
                          className="w-full bg-[#121212] border border-[#262626] focus:border-white text-white px-4 py-3.5 text-sm outline-none transition-colors rounded-none placeholder:text-[#444]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-[#777777] mb-2">
                          02 / Return Electronic Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          className="w-full bg-[#121212] border border-[#262626] focus:border-white text-white px-4 py-3.5 text-sm outline-none transition-colors rounded-none placeholder:text-[#444]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-[#777777] mb-2">
                          03 / Opportunity Type *
                        </label>
                        <select className="w-full bg-[#121212] border border-[#262626] focus:border-white text-white px-4 py-3.5 text-sm outline-none transition-colors rounded-none">
                          <option>Data Analyst / Engineering Role</option>
                          <option>Consulting & Pipeline Architecture</option>
                          <option>Collaborative Side Quest</option>
                          <option>General Editorial Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-[#777777] mb-2">
                          04 / Message Body *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Detail scope, timeline, and architectural expectations..."
                          className="w-full bg-[#121212] border border-[#262626] focus:border-white text-white px-4 py-3.5 text-sm outline-none transition-colors rounded-none placeholder:text-[#444] resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-white text-black py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-[#dcdcdc] transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Transmit Dispatch</span>
                        <Send size={13} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1c1c1c] bg-[#050505] py-16 text-xs text-[#666666]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-serif text-white text-lg tracking-wider uppercase">Aashna</span>
            <span className="text-[10px] tracking-[0.2em] uppercase ml-2 text-[#555]">/ aashnology</span>
          </div>

          <div className="flex gap-8 text-[11px] uppercase tracking-widest">
            <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">Cover</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('analytics')} className="hover:text-white transition-colors">Analytics</button>
            <button onClick={() => scrollTo('sidequests')} className="hover:text-white transition-colors">Side Quests</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="text-[10px] font-mono tracking-widest text-[#555]">
            © {new Date().getFullYear()} AASHNA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}