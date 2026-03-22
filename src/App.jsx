import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FaArrowUpRightFromSquare,
  FaCalendarCheck,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa6'
import { FaGuitar } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import clsx from 'clsx'

const GITHUB_URL = 'https://github.com/Kushh-Santhosh'
const LINKEDIN_URL = 'https://www.linkedin.com/in/kushal-santhosh-p-007a62330'
const INSTAGRAM_URL = 'https://instagram.com/santhosh_podaralla'
const CALENDLY_URL =
  'https://calendly.com/kushh-santhosh/30min?hide_event_type_details=1&hide_gdpr_banner=1'
const PROFILE_IMAGE = '/kushal-profile.jpg'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const heroCards = [
  {
    title: 'AI Project Systems',
    subtitle: 'Automation and smart workflow tools',
    position: 'top-6 left-5 rotate-[-9deg]',
    gradient: 'from-cyan-300/90 to-blue-500/80',
  },
  {
    title: 'Scalable Web Apps',
    subtitle: 'React platforms with premium UI/UX',
    position: 'top-20 right-0 rotate-[8deg]',
    gradient: 'from-sky-300/80 to-indigo-500/80',
  },
  {
    title: 'Future Tech Vision',
    subtitle: 'Building toward a technology company',
    position: 'bottom-6 left-10 rotate-[-3deg]',
    gradient: 'from-blue-300/80 to-cyan-500/80',
  },
]

const projects = [
  {
    title: 'AI Project',
    description:
      'AI experiments, automation flows, and intelligent features for modern apps.',
    link: GITHUB_URL,
    image: '/projects/ai-systems.svg',
    theme: 'from-cyan-500/25 via-sky-500/20 to-transparent',
    tag: 'AI Systems',
  },
  {
    title: 'Web Development Projects',
    description:
      'Responsive websites and robust web platforms built for performance and scale.',
    link: GITHUB_URL,
    image: '/projects/web-platform.svg',
    theme: 'from-blue-500/25 via-indigo-500/20 to-transparent',
    tag: 'Web Platforms',
  },
  {
    title: 'App Development Projects',
    description:
      'Application experiences focused on clean interaction, speed, and usability.',
    link: GITHUB_URL,
    image: '/projects/app-dev.svg',
    theme: 'from-sky-500/25 via-cyan-500/20 to-transparent',
    tag: 'Apps',
  },
]

const skills = [
  'AI Development',
  'Web Development',
  'App Development',
  'Firebase',
  'UI/UX Design',
  'GitHub',
  'React',
  'JavaScript',
]

const services = [
  {
    title: 'Website Development',
    description: 'Modern responsive websites for businesses and personal brands.',
  },
  {
    title: 'Web Application Development',
    description: 'Custom web-based tools and full product experiences.',
  },
  {
    title: 'AI-Based Features',
    description: 'Intelligent features integrated into practical applications.',
  },
  {
    title: 'Website Hosting & Deployment',
    description: 'Launch-ready deployments with reliable performance.',
  },
]

const currentFocus = [
  'Building modern websites and web applications',
  'Working on AI-based systems and tools',
  'Hosting and testing my own projects',
  'Learning through real-world project execution',
  'Helping others build and launch websites',
]

const journey = [
  { year: '2023', text: 'Started learning web development.' },
  { year: '2024', text: 'Built multiple websites and small applications.' },
  { year: '2025', text: 'Started working with AI tools and automation.' },
  {
    year: '2026',
    text: 'Building larger systems and planning future platforms.',
  },
  { year: 'Future', text: 'Launching my own technology company.' },
]

const differentiators = [
  'I learn by building real projects',
  'I focus on long-term goals and bigger systems',
  'I experiment with new technologies regularly',
  'I enjoy solving real-world problems',
  'I aim to build scalable platforms, not just demos',
]

const interests = [
  'Web Development',
  'Artificial Intelligence',
  'Automation Systems',
  'Modern UI/UX Design',
  'Platform Development',
  'Scalable Web Systems',
]

const socialLinks = [
  { label: 'GitHub', href: GITHUB_URL, icon: FaGithub },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: FaLinkedin },
  { label: 'Instagram', href: INSTAGRAM_URL, icon: FaInstagram },
]

const interactiveObjects = [
  {
    title: 'Guitar',
    subtitle: 'Click to open GitHub',
    icon: FaGuitar,
    href: GITHUB_URL,
  },
  {
    title: 'Laptop',
    subtitle: 'Click to open GitHub',
    icon: FaLaptopCode,
    href: GITHUB_URL,
  },
  {
    title: 'AI Core',
    subtitle: 'Click to open GitHub',
    icon: GiArtificialIntelligence,
    href: GITHUB_URL,
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
        {kicker}
      </p>
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  )
}

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [photoFallback, setPhotoFallback] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -70])

  useEffect(() => {
    const updatePointer = (event) => {
      setPointer({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', updatePointer)
    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])

  const stats = useMemo(
    () => [
      { label: 'Location', value: 'India' },
      { label: 'Experience', value: '2+ Years' },
      { label: 'Role', value: 'Developer + AI Builder' },
    ],
    [],
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night text-slate-100">
      <div className="grid-overlay" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="cursor-glow"
        animate={{ x: pointer.x - 190, y: pointer.y - 190 }}
        transition={{ type: 'spring', damping: 22, stiffness: 130, mass: 0.3 }}
      />

      <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-slate-950/55 px-3 py-2 backdrop-blur-xl">
          <a
            href="#home"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Kushal Santhosh
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#schedule"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/20 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:scale-[1.03] hover:bg-cyan-300/30"
          >
            Book a Call
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
        <section
          id="home"
          className="grid min-h-[88vh] items-center gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.06fr_0.94fr]"
        >
          <Reveal className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Developer | AI Builder | Future Tech Founder
            </span>

            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-[1.02] text-white sm:text-5xl lg:text-7xl">
                Building Smart Apps, AI Systems and Modern Websites
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Hi, I&apos;m Kushal. I build websites, applications, and AI-based systems, and I am
                working toward launching my own technology company in the future.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Over the past few years, I&apos;ve been learning by building real projects,
                experimenting with new technologies, and turning ideas into working systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-300/30 px-6 py-3 text-sm font-semibold text-cyan-50 transition hover:scale-[1.03]"
              >
                View My Work <FaArrowUpRightFromSquare className="text-xs" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <motion.div style={{ y: heroParallax }} className="relative h-[430px] sm:h-[500px]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/12 bg-gradient-to-br from-cyan-300/8 via-sky-300/5 to-transparent" />
            {heroCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={clsx(
                  'absolute w-[78%] rounded-3xl border border-white/20 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-md sm:w-[72%]',
                  card.position,
                )}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
                whileHover={{ scale: 1.04, rotate: 0, y: -8 }}
              >
                <div className={clsx('h-28 rounded-2xl bg-gradient-to-br', card.gradient)} />
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{card.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Reveal className="section-shell" delay={0.1}>
          <SectionHeading
            kicker="Interactive"
            title="Tap the objects to jump into my GitHub world"
            subtitle="Guitar, laptop, and AI core icons are fully interactive with hover glow and smooth motion."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {interactiveObjects.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card group block p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 1.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/40 bg-cyan-300/20 text-2xl text-cyan-100 transition group-hover:shadow-[0_0_35px_rgba(125,211,252,0.5)]">
                      <Icon />
                    </div>
                    <FaArrowUpRightFromSquare className="text-cyan-100/80" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                </motion.a>
              )
            })}
          </div>
        </Reveal>

        <section id="about" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="About Me"
              title="Developer who learns by building real systems"
              subtitle="I focus on useful products, clean architecture, and scalable platforms with modern design."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="glass-card p-5 sm:p-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80">
                {!photoFallback ? (
                  <img
                    src={PROFILE_IMAGE}
                    alt="Kushal Santhosh"
                    className="h-[410px] w-full object-cover"
                    onError={() => setPhotoFallback(true)}
                  />
                ) : (
                  <div className="flex h-[410px] w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-black text-7xl font-black text-cyan-100/80">
                    KS
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal className="space-y-5" delay={0.1}>
              <p className="text-base leading-relaxed text-slate-300">
                Hey, I&apos;m Kushal Santhosh, a developer who enjoys building things and figuring out
                how technology can solve real problems.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                I started my journey by learning web development and slowly moved into building full
                projects, hosting websites, and experimenting with AI tools. Most of my learning
                comes from building real systems, testing them, fixing mistakes, and improving step
                by step.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Over the past 2+ years, I&apos;ve worked on websites, applications, and AI-related
                experiments. I enjoy creating platforms that are visually strong, functional, and
                scalable.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Alongside my own projects, I also build websites for others and help bring ideas to
                life using clean design and reliable technology.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Projects"
              title="Featured builds with premium interactions"
              subtitle="Every project card has smooth hover motion and opens your GitHub repository in a new tab."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.08 * index}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card group block"
                  whileHover={{ y: -8 }}
                >
                  <div className={clsx('project-visual bg-gradient-to-br', project.theme)}>
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/45" />
                    <span className="relative inline-flex rounded-full border border-cyan-100/30 bg-slate-950/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                      {project.tag}
                    </span>
                    <h3 className="relative mt-4 font-display text-2xl text-white">{project.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 opacity-0 transition duration-300 group-hover:opacity-100">
                      Open GitHub <FaArrowUpRightFromSquare className="text-xs" />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Skills"
              title="Current stack and capability set"
              subtitle="Animated skill cards reveal smoothly while scrolling."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="glass-card p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-base font-semibold text-white">{skill}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Services"
              title="What I provide"
              subtitle="Website and product development support from concept to launch."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="mindset" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Mindset"
              title="I do not just write code, I build products"
              subtitle="My focus is creating systems that can evolve into real platforms and solve practical problems."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal className="glass-card p-6" delay={0.05}>
              <h3 className="text-xl font-semibold text-white">What I am currently doing</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="glass-card p-6" delay={0.15}>
              <h3 className="text-xl font-semibold text-white">My long-term goal</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                My long-term goal is to build my own technology company and create platforms,
                applications, and AI systems that can scale to large numbers of users. I am moving
                step by step by strengthening my skills and building larger systems.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="journey" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Journey"
              title="My build-first timeline"
              subtitle="Progress through consistent building, testing, and iteration."
            />
          </Reveal>

          <div className="mt-8 space-y-4">
            {journey.map((step, index) => (
              <Reveal key={step.year} delay={index * 0.05}>
                <div className="glass-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg font-bold text-cyan-100">{step.year}</span>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="different" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Differentiator"
              title="What makes me different"
              subtitle="Curiosity-driven execution with a long-term platform mindset."
            />
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {differentiators.map((point, index) => (
              <motion.div
                key={point}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                {point}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="interests" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Technology Interests"
              title="Areas I am deeply exploring"
              subtitle="I enjoy experimenting with tools that can power modern scalable products."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="glass-card p-4 text-sm font-medium text-slate-200">{item}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="schedule" className="section-shell border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Schedule"
              title="Schedule a Call With Me"
              subtitle="Book a meeting directly using Calendly."
            />
          </Reveal>

          <Reveal className="mt-8" delay={0.12}>
            <div className="glass-card overflow-hidden p-2">
              <iframe
                title="Schedule a Call With Kushal Santhosh"
                src={CALENDLY_URL}
                width="100%"
                height="760"
                loading="lazy"
                className="w-full rounded-2xl bg-white"
              />
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section-shell border-t border-white/10 pb-10 pt-14">
          <Reveal>
            <SectionHeading
              kicker="Contact"
              title="Let us build something meaningful"
              subtitle="Reach out directly through email, phone, or social platforms."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="glass-card p-6" delay={0.05}>
              <div className="space-y-4">
                <a
                  href="mailto:kushal.podaralla@gmail.com"
                  className="contact-row"
                  target="_self"
                >
                  <FaEnvelope className="text-cyan-100" />
                  <span>kushal.podaralla@gmail.com</span>
                </a>
                <a href="tel:+919945690876" className="contact-row" target="_self">
                  <FaPhone className="text-cyan-100" />
                  <span>+91 9945690876 (Phone / WhatsApp)</span>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-row">
                  <FaGithub className="text-cyan-100" />
                  <span>github.com/Kushh-Santhosh</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-row">
                  <FaLinkedin className="text-cyan-100" />
                  <span>linkedin.com/in/kushal-santhosh-p-007a62330</span>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="contact-row">
                  <FaInstagram className="text-cyan-100" />
                  <span>instagram.com/santhosh_podaralla</span>
                </a>
              </div>
            </Reveal>

            <Reveal className="glass-card p-6" delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">Connect</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Social Profiles</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 bg-white/5 p-3 text-xl text-cyan-100 transition hover:scale-110 hover:bg-cyan-300/25"
                      aria-label={link.label}
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>

              <a
                href="#schedule"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-300/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:scale-[1.03] hover:bg-cyan-300/30"
              >
                <FaCalendarCheck />
                Schedule a call now
              </a>
            </Reveal>
          </div>

          <Reveal className="mt-10" delay={0.18}>
            <div className="glass-card overflow-hidden p-0">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Kushh-Santhosh&show_icons=true&hide_border=true&bg_color=00000000&title_color=7dd3fc&text_color=e2e8f0&icon_color=7dd3fc"
                alt="Kushal GitHub stats"
                className="w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      </main>

      <motion.a
        href="#contact"
        className="floating-contact"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
      >
        Contact Me
      </motion.a>
    </div>
  )
}

export default App
