import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

import codingDesk from "@/assets/coding-desk.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshitha N — Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Lakshitha N, a B.E. CSE (AI & ML) student exploring software development, Java, full stack development, and problem solving.",
      },
      { property: "og:title", content: "Lakshitha N — Aspiring Software Engineer" },
      {
        property: "og:description",
        content: "Student developer building strong foundations in software, AI/ML, and problem solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Learning", "learning"],
  ["Problem Solving", "problem-solving"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Leadership", "leadership"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  { number: "01", title: "Languages", items: ["Java", "C", "C++", "Python", "JavaScript"] },
  { number: "02", title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { number: "03", title: "Data", items: ["SQL", "MySQL"] },
  { number: "04", title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { number: "05", title: "Foundations", items: ["DSA", "Problem Solving"] },
];

const learningTracks = [
  {
    icon: Code2,
    title: "Java",
    text: "Strengthening object-oriented programming, core concepts, and clean coding habits.",
    label: "Core focus",
  },
  {
    icon: Braces,
    title: "Full Stack Development",
    text: "Connecting thoughtful interfaces with the logic and data that power useful products.",
    label: "Building up",
  },
  {
    icon: BookOpen,
    title: "Data Structures & Algorithms",
    text: "Learning to choose efficient structures and reason through problems step by step.",
    label: "In practice",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    text: "Exploring foundational ideas behind intelligent systems through coursework and practice.",
    label: "Exploring",
  },
];

const projectConcepts = [
  {
    number: "01",
    type: "Web application concept",
    title: "A focused productivity tool",
    text: "An early concept for turning everyday planning into a simple, useful full stack experience.",
    tags: ["Full Stack", "JavaScript", "UI/UX"],
  },
  {
    number: "02",
    type: "Java concept",
    title: "A practical Java system",
    text: "A future build designed to apply object-oriented programming to a clear real-world workflow.",
    tags: ["Java", "OOP", "Problem Solving"],
  },
  {
    number: "03",
    type: "AI/ML exploration",
    title: "A small intelligent experience",
    text: "An upcoming experiment connecting an approachable interface with introductory machine learning.",
    tags: ["Python", "AI/ML", "Data"],
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("lakshitha-theme");
    const shouldUseDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("lakshitha-theme", next ? "dark" : "light");
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#home" className="group flex items-center gap-3" aria-label="Lakshitha N, home">
            <span className="grid size-9 place-items-center bg-primary font-display text-sm font-bold text-primary-foreground transition-transform group-hover:-rotate-3">
              LN
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-wider">Lakshitha N</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>
              {dark ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 xl:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 sm:grid-cols-3">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[92vh] scroll-mt-18 items-center overflow-hidden border-b border-border pt-18">
          <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-24">
            <div className="animate-rise">
              <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="size-2 bg-highlight" />
                Madurai, Tamil Nadu
              </div>
              <p className="mb-4 font-mono text-sm text-accent-foreground">Hello, I’m</p>
              <h1 className="font-display text-[clamp(4rem,10vw,8.8rem)] font-extrabold uppercase leading-[0.82]">
                Lakshitha
                <span className="block text-outline">N.</span>
              </h1>
              <div className="mt-8 max-w-xl border-l-4 border-highlight pl-5">
                <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                  Aspiring Software Engineer &amp; CSE (AI &amp; ML) student.
                </p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                  Growing through code, curiosity, and consistent problem solving—one strong foundation at a time.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-none px-6 uppercase tracking-wider">
                  <a href="#projects">Explore my work <ArrowDown /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6 uppercase tracking-wider">
                  <a href="#contact">Let’s connect <ArrowUpRight /></a>
                </Button>
              </div>
            </div>

            <div className="relative animate-rise-delayed lg:justify-self-end">
              <div className="absolute -left-4 -top-4 z-10 bg-highlight px-4 py-2 font-mono text-xs font-bold uppercase text-highlight-foreground sm:-left-7 sm:top-8">
                Learning in public
              </div>
              <div className="relative aspect-[4/3] max-h-[600px] overflow-hidden border border-border bg-muted shadow-editorial">
                <img src={codingDesk} alt="A study desk with keyboard, notebook, and programming diagrams" width={1400} height={1000} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground/90 px-5 py-4 text-background backdrop-blur-sm">
                  <span className="font-mono text-xs uppercase">Think · Build · Improve</span>
                  <Code2 className="size-5" />
                </div>
              </div>
              <div className="absolute -bottom-5 right-4 grid size-20 place-items-center bg-accent font-display text-center text-xs font-bold uppercase text-accent-foreground sm:-right-5 sm:size-24">
                Grad
                <br />2029
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-18 border-b border-border py-24 sm:py-32">
          <div className="section-wrap grid gap-12 lg:grid-cols-[.4fr_1fr]">
            <SectionLabel number="01" title="About me" />
            <div>
              <p className="font-display text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Building the skills to turn <span className="text-accent-foreground">ideas into useful software.</span>
              </p>
              <div className="mt-10 grid gap-8 text-base leading-8 text-muted-foreground sm:grid-cols-2">
                <p>
                  I’m a second-year B.E. Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at SRM MCET.
                </p>
                <p>
                  My focus is on software development, Java, full stack development, AI/ML, and developing a thoughtful approach to problem solving.
                </p>
              </div>
              <div className="mt-12 grid border-y border-border sm:grid-cols-3">
                {["Curious learner", "Consistent practice", "Team contributor"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <span className="font-display font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-18 bg-foreground py-24 text-background sm:py-32">
          <div className="section-wrap">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionLabel number="02" title="Skills" inverse />
              <p className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl">A growing toolkit, organized by how I use it.</p>
            </div>
            <div className="divide-y divide-background/20 border-y border-background/20">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-row grid gap-4 py-7 md:grid-cols-[5rem_14rem_1fr] md:items-center">
                  <span className="font-mono text-xs text-background/50">{group.number}</span>
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="border border-background/25 px-3 py-1.5 font-mono text-xs uppercase transition-colors hover:border-highlight hover:bg-highlight hover:text-highlight-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="learning" className="scroll-mt-18 border-b border-border py-24 sm:py-32">
          <div className="section-wrap">
            <div className="grid gap-10 lg:grid-cols-[.55fr_1fr]">
              <div>
                <SectionLabel number="03" title="Currently learning" />
                <h2 className="mt-8 font-display text-4xl font-semibold sm:text-6xl">In active development.</h2>
                <p className="mt-6 max-w-md leading-7 text-muted-foreground">Learning is the work. These are the areas receiving my attention right now.</p>
              </div>
              <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {learningTracks.map(({ icon: Icon, title, text, label }, index) => (
                  <article key={title} className="group min-h-64 bg-background p-7 transition-colors hover:bg-muted sm:p-9">
                    <div className="mb-12 flex items-start justify-between">
                      <Icon className="size-7 text-accent-foreground" />
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <span className="mb-3 inline-block bg-secondary px-2 py-1 font-mono text-[10px] font-bold uppercase text-secondary-foreground">{label}</span>
                    <h3 className="font-display text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problem-solving" className="scroll-mt-18 overflow-hidden border-b border-border bg-secondary py-24 sm:py-32">
          <div className="section-wrap grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionLabel number="04" title="Problem solving" />
              <h2 className="mt-8 font-display text-4xl font-semibold leading-tight sm:text-6xl">Practice. Reflect. Repeat.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                I’m practicing beginner programming problems to strengthen logic, recognize patterns, and become more comfortable translating ideas into code.
              </p>
              <div className="mt-9 flex flex-wrap gap-2">
                {["JavaScript", "C++", "Python"].map((language) => (
                  <span key={language} className="bg-background px-4 py-2 font-mono text-xs font-bold uppercase text-foreground shadow-sm">{language}</span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg bg-code p-6 text-code-foreground shadow-editorial sm:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-code-foreground/15 pb-4">
                <span className="font-mono text-xs text-code-foreground/60">practice.js</span>
                <div className="flex gap-1.5"><i className="size-2 rounded-full bg-highlight" /><i className="size-2 rounded-full bg-accent" /></div>
              </div>
              <pre className="overflow-hidden font-mono text-xs leading-7 sm:text-sm"><code><span className="text-code-muted">// progress begins with practice</span>{"\n"}<span className="text-code-keyword">function</span> solve(problem) {" {"}{"\n"}  <span className="text-code-keyword">const</span> steps = breakItDown(problem);{"\n"}  practice(steps);{"\n"}  reflect();{"\n"}  <span className="text-code-keyword">return</span> improve();{"\n"}{"}"}</code></pre>
              <div className="mt-8 flex items-center gap-2 border-t border-code-foreground/15 pt-4 font-mono text-xs text-code-foreground/60">
                <span className="size-2 animate-pulse rounded-full bg-success" /> Building consistency
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-18 border-b border-border py-24 sm:py-32">
          <div className="section-wrap">
            <div className="grid gap-10 lg:grid-cols-[.55fr_1fr]">
              <div>
                <SectionLabel number="05" title="Projects" />
                <h2 className="mt-8 font-display text-4xl font-semibold sm:text-6xl">Upcoming projects.</h2>
                <div className="mt-6 inline-flex items-center gap-2 border border-accent px-3 py-2 font-mono text-xs font-bold uppercase text-accent-foreground">
                  <span className="size-2 animate-pulse rounded-full bg-accent" /> Work in progress
                </div>
                <p className="mt-6 max-w-sm leading-7 text-muted-foreground">No inflated claims or made-up metrics—just honest concepts taking shape as my skills grow.</p>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {projectConcepts.map((project) => (
                  <article key={project.number} className="group grid gap-5 py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                    <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-foreground">{project.type}</span>
                      <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{project.text}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="bg-muted px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{tag}</span>)}
                      </div>
                    </div>
                    <span className="grid size-10 place-items-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"><ChevronRight /></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-18 border-b border-border py-24 sm:py-32">
          <div className="section-wrap grid gap-12 lg:grid-cols-[.4fr_1fr]">
            <SectionLabel number="06" title="Education" />
            <article className="relative overflow-hidden bg-primary p-7 text-primary-foreground sm:p-12">
              <GraduationCap className="absolute -bottom-8 -right-5 size-52 text-primary-foreground/10" strokeWidth={1} />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary-foreground/20 pb-7">
                  <span className="font-mono text-xs uppercase tracking-wider">2025 — 2029</span>
                  <span className="bg-primary-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase text-primary">2nd year</span>
                </div>
                <h2 className="mt-8 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">B.E. Computer Science &amp; Engineering</h2>
                <p className="mt-3 font-display text-xl text-primary-foreground/75">Artificial Intelligence &amp; Machine Learning</p>
                <div className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-bold">SRM Madurai College for Engineering and Technology</span>
                  <span className="flex items-center gap-2 text-primary-foreground/70"><MapPin className="size-4" /> Madurai, Tamil Nadu</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="leadership" className="scroll-mt-18 bg-muted py-24 sm:py-32">
          <div className="section-wrap">
            <div className="mb-14 grid gap-8 lg:grid-cols-2">
              <SectionLabel number="07" title="Leadership & activities" />
              <h2 className="font-display text-4xl font-semibold sm:text-6xl">Learning beyond the classroom.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <LeadershipCard icon={Users} role="Joint Secretary" event="InnoVision Club" detail="Department of CSE AI & ML · SRM MCET" />
              <LeadershipCard icon={Sparkles} role="Event Coordinator" event="IdeaPitch, TECHERA’26" detail="Idea presentation and technical event coordination" />
            </div>
            <div className="mt-4 flex items-center gap-4 border border-border bg-background p-6">
              <span className="grid size-11 shrink-0 place-items-center bg-highlight text-highlight-foreground"><Check /></span>
              <p className="text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Technical event coordination</strong> — contributing through planning, communication, and collaborative execution.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-18 bg-foreground py-24 text-background sm:py-32">
          <div className="section-wrap grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel number="08" title="Contact" inverse />
              <h2 className="mt-8 font-display text-5xl font-bold leading-[.95] sm:text-7xl">Let’s start a conversation.</h2>
              <p className="mt-6 max-w-md leading-7 text-background/60">Open to learning, collaborating, and connecting with people who care about technology and growth.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <SocialLink href="mailto:your.email@example.com" label="Email" icon={Mail} />
                <SocialLink href="https://github.com/your-username" label="GitHub" icon={Github} />
                <SocialLink href="https://www.linkedin.com/in/your-profile" label="LinkedIn" icon={Linkedin} />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase text-background/40">Placeholder links — ready for your profiles</p>
            </div>

            <form onSubmit={submitContact} className="border border-background/20 p-6 sm:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="contact-label">Name<Input required name="name" placeholder="Your name" className="contact-input" /></label>
                <label className="contact-label">Email<Input required type="email" name="email" placeholder="you@example.com" className="contact-input" /></label>
              </div>
              <label className="contact-label mt-6">Subject<Input required name="subject" placeholder="What would you like to talk about?" className="contact-input" /></label>
              <label className="contact-label mt-6">Message<Textarea required name="message" placeholder="Write your message..." className="contact-input min-h-32 resize-none" /></label>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-background/50">This preview form confirms locally.</p>
                <Button type="submit" size="lg" className="rounded-none bg-highlight text-highlight-foreground hover:bg-highlight/90">Send message <Send /></Button>
              </div>
              {sent && <p role="status" className="mt-5 border border-success/50 bg-success/10 px-4 py-3 text-sm text-success">Thanks — your message was captured in this preview.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/15 bg-foreground py-7 text-background">
        <div className="section-wrap flex flex-col gap-4 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lakshitha N. Built with curiosity.</p>
          <a href="#home" className="flex items-center gap-2 font-bold uppercase tracking-wider text-background transition-colors hover:text-highlight">Back to top <ArrowUpRight className="size-4 -rotate-45" /></a>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ number, title, inverse = false }: { number: string; title: string; inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] ${inverse ? "text-background/60" : "text-muted-foreground"}`}>
      <span className={inverse ? "text-highlight" : "text-accent-foreground"}>{number}</span>
      <span className={`h-px w-8 ${inverse ? "bg-background/30" : "bg-border"}`} />
      {title}
    </div>
  );
}

function LeadershipCard({ icon: Icon, role, event, detail }: { icon: typeof Users; role: string; event: string; detail: string }) {
  return (
    <article className="group border border-border bg-background p-7 transition-transform hover:-translate-y-1 sm:p-9">
      <div className="flex items-start justify-between gap-5">
        <span className="grid size-12 place-items-center bg-secondary text-secondary-foreground"><Icon /></span>
        <ArrowUpRight className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mt-10 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground">{role}</p>
      <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{event}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{detail}</p>
    </article>
  );
}

function SocialLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Mail }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-2 border border-background/25 px-4 py-3 text-sm font-semibold transition-colors hover:border-highlight hover:bg-highlight hover:text-highlight-foreground">
      <Icon className="size-4" /> {label}
    </a>
  );
}