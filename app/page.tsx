"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  ExternalLink,
  Plane,
  Rocket,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Tab Therapist",
    type: "SOFTWARE / CHROME EXTENSION",
    description:
      "A browser companion designed to understand, score and organize tab chaos.",
    tags: ["JavaScript", "Chrome API", "UX"],
    featured: true,
  },
  {
    number: "02",
    title: "AJ 3D Prints",
    type: "MAKER / VENTURE",
    description:
      "A custom 3D-printing venture creating useful, fun and personalized objects.",
    tags: ["3D Printing", "CAD", "Product Design"],
    featured: false,
  },
  {
    number: "03",
    title: "Robotics Lab",
    type: "HARDWARE / EXPERIMENTS",
    description:
      "Experiments with Raspberry Pi, cameras, sensors, microcontrollers and automation.",
    tags: ["Raspberry Pi", "Python", "Electronics"],
    featured: false,
  },
  {
    number: "04",
    title: "SleepSync",
    type: "PRODUCT / APP CONCEPT",
    description:
      "A product concept exploring how technology can help people build better sleep habits.",
    tags: ["Swift", "Apple", "Product"],
    featured: false,
  },
];

const experiments = [
  {
    number: "01",
    category: "3D PRINTING",
    title: "0.2mm Nozzle Detail",
    status: "TESTING",
    icon: Wrench,
  },
  {
    number: "02",
    category: "COMPUTER VISION",
    title: "Raspberry Pi Tracking",
    status: "BUILDING",
    icon: Terminal,
  },
  {
    number: "03",
    category: "SOFTWARE",
    title: "Apple App Development",
    status: "BUILDING",
    icon: Cpu,
  },
  {
    number: "04",
    category: "MOTORSPORT",
    title: "F1 Style Engineering",
    status: "ACTIVE",
    icon: Rocket,
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f4f0] text-[#111111] selection:bg-black selection:text-white">

      {/* ───────────────── NAVIGATION ───────────────── */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.07] bg-[#f4f4f0]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href="#"
            className="text-sm font-bold tracking-[0.2em]"
          >
            AJ<span className="text-black/25">.</span>
          </a>

          <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.18em] text-black/45 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#work" className="transition hover:text-black">
              Work
            </a>

            <a href="#lab" className="transition hover:text-black">
              Lab
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-black/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
            Building
          </div>

        </div>
      </nav>

      {/* ───────────────── HERO ───────────────── */}

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">

        {/* Architectural grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Accent glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/[0.10] blur-[130px]" />

        <div className="w-full">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-black/40"
          >
            <span className="h-px w-12 bg-black/20" />
            Dubai, UAE
            <span className="text-cyan-600">/</span>
            2026
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-6xl text-[clamp(4.5rem,13vw,12rem)] font-semibold leading-[0.78] tracking-[-0.08em]"
          >
            ADITYA
            <br />
            <span className="text-black/20">JAIN.</span>
          </motion.h1>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px] lg:items-end">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-start gap-4"
            >
              <div className="mt-2 h-14 w-px bg-black/20" />

              <p className="max-w-xl text-xl leading-relaxed text-black/55 md:text-2xl">
                Building ideas into{" "}
                <span className="text-black">
                  things that work.
                </span>
              </p>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm leading-7 text-black/40"
            >
              Student. Developer. Maker.
              <br />
              Engineering enthusiast.
              <br />
              Always building something.
            </motion.p>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-20 flex items-center gap-6"
          >

            <a
              href="#work"
              className="group flex items-center gap-3 bg-[#111111] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
            >
              Explore my work

              <ArrowDownRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 sm:block">
              Scroll to explore
            </span>

          </motion.div>

        </div>
      </section>

      {/* ───────────────── CURRENTLY BUILDING ───────────────── */}

      <section className="border-y border-black/[0.08]">

        <div className="mx-auto grid max-w-7xl lg:grid-cols-[220px_1fr]">

          <div className="border-b border-black/[0.08] p-6 lg:border-b-0 lg:border-r lg:p-10">
            <p className="text-[9px] uppercase tracking-[0.22em] text-black/35">
              00 / Now
            </p>
          </div>

          <div className="p-6 lg:p-10">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-cyan-700/70">
                  Currently building
                </p>

                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                  Tab Therapist
                </h2>
              </div>

              <div className="max-w-md text-sm leading-7 text-black/40">
                A Chrome extension that turns browser-tab chaos into
                something understandable, organized and manageable.
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "Chrome Extension",
                "JavaScript",
                "Product Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-black/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-black/40"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ───────────────── ABOUT ───────────────── */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >

          <div className="mb-16 flex items-center gap-4">

            <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
              01
            </span>

            <div className="h-px flex-1 bg-black/[0.08]" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
              About
            </span>

          </div>

          <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">

            <div>

              <h2 className="text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">

                I like taking an idea,

                <br />

                <span className="text-black/25">
                  figuring out how it works,
                </span>

                <br />

                and building it.

              </h2>

            </div>

            <div className="space-y-6 text-sm leading-8 text-black/45">

              <p>
                I&apos;m Aditya, a student and builder based in Dubai.
                I enjoy turning ideas into real projects — from software
                and robotics to 3D printing and motorsport.
              </p>

              <p>
                I&apos;m especially interested in the intersection
                between technology, engineering and creativity.
              </p>

              <div className="grid grid-cols-2 gap-px border border-black/[0.08] bg-black/[0.08]">

                {[
                  ["SOFTWARE", "Apps · Web · Automation"],
                  ["HARDWARE", "Robotics · Electronics"],
                  ["MAKER", "CAD · 3D Printing"],
                  ["MOTORSPORT", "F1 · Engineering"],
                ].map(([title, text]) => (

                  <div
                    key={title}
                    className="bg-[#f4f4f0] p-5"
                  >

                    <p className="mb-2 text-[9px] tracking-[0.15em] text-black/60">
                      {title}
                    </p>

                    <p className="text-xs text-black/30">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ───────────────── WORK ───────────────── */}

      <section
        id="work"
        className="border-t border-black/[0.08]"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="mb-16 flex items-end justify-between">

            <div>

              <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-black/30">
                02 / Selected work
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Things I&apos;ve built.
              </h2>

            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.15em] text-black/25 md:block">
              04 projects
            </span>

          </div>

          <div className="grid gap-px border border-black/[0.08] bg-black/[0.08] md:grid-cols-2">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className={`group relative min-h-[360px] overflow-hidden bg-[#f4f4f0] p-7 transition-colors hover:bg-[#eaeae5] md:p-10 ${
                  project.featured
                    ? "md:col-span-2 md:min-h-[430px]"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="font-mono text-xs text-black/25">
                    {project.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-black/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />

                </div>

                <div className="absolute bottom-8 left-7 right-7 md:bottom-10 md:left-10 md:right-10">

                  <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-cyan-700/60">
                    {project.type}
                  </p>

                  <h3 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mb-6 max-w-xl text-sm leading-7 text-black/40">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="border border-black/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-black/35"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>
        </div>
      </section>

      {/* ───────────────── LAB ───────────────── */}

      <section
        id="lab"
        className="border-y border-black/[0.08]"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="mb-16 max-w-2xl">

            <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-black/30">
              03 / The lab
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">

              Not everything

              <br />

              <span className="text-black/25">
                has a final version.
              </span>

            </h2>

            <p className="mt-6 text-sm leading-7 text-black/40">
              The lab is where unfinished ideas, experiments and
              prototypes live.
            </p>

          </div>

          <div className="border-t border-black/[0.08]">

            {experiments.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.number}
                  className="group grid items-center gap-6 border-b border-black/[0.08] py-7 transition hover:px-3 md:grid-cols-[70px_1fr_180px_40px]"
                >

                  <span className="font-mono text-xs text-black/20">
                    {item.number}
                  </span>

                  <div>

                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-black/25">
                      {item.category}
                    </p>

                    <h3 className="text-lg text-black/70 transition group-hover:text-black">
                      {item.title}
                    </h3>

                  </div>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-black/30">
                    {item.status}
                  </span>

                  <Icon
                    size={17}
                    className="text-black/20 transition group-hover:text-cyan-600"
                  />

                </div>

              );
            })}

          </div>
        </div>
      </section>

      {/* ───────────────── BEYOND ───────────────── */}

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <div className="mb-16">

          <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-black/30">
            04 / Beyond the workshop
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">

            Curiosity doesn&apos;t

            <br />

            <span className="text-black/25">
              stop at the workbench.
            </span>

          </h2>

        </div>

        <div className="grid gap-px border border-black/[0.08] bg-black/[0.08] md:grid-cols-3">

          <div className="group min-h-[280px] bg-[#f4f4f0] p-8 transition hover:bg-[#eaeae5]">

            <Plane
              className="mb-16 text-black/25 transition group-hover:text-black"
              size={24}
            />

            <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-black/25">
              Aviation
            </p>

            <h3 className="text-2xl font-medium">
              How things fly.
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/35">
              Aircraft, flight technology and the engineering behind
              aviation.
            </p>

          </div>

          <div className="group min-h-[280px] bg-[#f4f4f0] p-8 transition hover:bg-[#eaeae5]">

            <Zap
              className="mb-16 text-black/25 transition group-hover:text-black"
              size={24}
            />

            <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-black/25">
              Formula 1
            </p>

            <h3 className="text-2xl font-medium">
              Engineering at speed.
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/35">
              Aerodynamics, strategy, technology and the pursuit of
              performance.
            </p>

          </div>

          <div className="group min-h-[280px] bg-[#f4f4f0] p-8 transition hover:bg-[#eaeae5]">

            <Terminal
              className="mb-16 text-black/25 transition group-hover:text-black"
              size={24}
            />

            <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-black/25">
              Music
            </p>

            <h3 className="text-2xl font-medium">
              A different kind of build.
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/35">
              Piano, music and creative projects outside the technical
              world.
            </p>

          </div>

        </div>
      </section>

      {/* ───────────────── JOURNEY ───────────────── */}

      <section className="border-t border-black/[0.08]">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-black/30">
                05 / Journey
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">

                Still

                <br />

                <span className="text-black/25">
                  just getting started.
                </span>

              </h2>

            </div>

            <div className="border-t border-black/[0.08]">

              {[
                [
                  "2026",
                  "Building",
                  "Software, hardware and new ideas.",
                ],
                [
                  "2026",
                  "Making",
                  "Growing into 3D printing and product design.",
                ],
                [
                  "2026",
                  "Racing",
                  "Engineering through F1 in Schools.",
                ],
                [
                  "2025 →",
                  "Exploring",
                  "Robotics, coding, electronics and making.",
                ],
              ].map(([year, title, text]) => (

                <div
                  key={year + title}
                  className="grid gap-5 border-b border-black/[0.08] py-8 md:grid-cols-[100px_140px_1fr]"
                >

                  <span className="font-mono text-xs text-black/20">
                    {year}
                  </span>

                  <span className="text-sm text-black/65">
                    {title}
                  </span>

                  <span className="text-sm leading-6 text-black/35">
                    {text}
                  </span>

                </div>

              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTACT ───────────────── */}

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="relative overflow-hidden border border-black/[0.08] bg-[#fafaf7] p-8 md:p-16">

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/[0.12] blur-[100px]" />

          <p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-black/35">
            06 / Contact
          </p>

          <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">

            Got an idea?

            <br />

            <span className="text-black/25">
              Let&apos;s build it.
            </span>

          </h2>

          <div className="mt-12 flex flex-wrap gap-3">

            <a
              href="mailto:adityajain1225@gmail.com"
              className="group flex items-center gap-3 bg-[#111111] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
            >
              Get in touch

              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://github.com/AdityaJainDXB"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-black/15 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-black/65 transition hover:border-black/40 hover:text-black"
            >
              <span className="text-sm font-semibold">
                GH
              </span>

              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="border-t border-black/[0.08]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[9px] uppercase tracking-[0.18em] text-black/30 md:flex-row md:items-center md:justify-between lg:px-10">

          <span>
            Aditya Jain © 2026
          </span>

          <span>
            Dubai, UAE · Built with curiosity
          </span>

        </div>

      </footer>

    </main>
  );
}