import { useEffect, useMemo, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  FaArrowUpRightFromSquare,
  FaCalendarCheck,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6'
import { SiFirebase, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import clsx from 'clsx'

const GITHUB_URL = 'https://github.com/Kushh-Santhosh'
const LINKEDIN_URL = 'https://www.linkedin.com/in/kushal-santhosh-p-007a62330'
const INSTAGRAM_URL = 'https://instagram.com/santhosh_podaralla'
const DISCORD_URL = 'https://discord.com/'
const CALENDLY_URL = 'https://calendly.com/kushh-santhosh/30min?hide_event_type_details=1&hide_gdpr_banner=1'
const PROFILE_IMAGE = '/kushal-profile.jpg'

const premiumEase = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Projects', value: '30+ completed' },
  { label: 'Focus', value: 'Full stack + AI' },
]

const projects = [
  {
    title: 'Fensta',
    tag: 'Startup product',
    description: 'A startup-focused product build with clean brand presentation, web workflows, and scalable implementation direction.',
    image: '/projects/fensta-logo.jpg',
    link: GITHUB_URL,
    tone: 'cyan',
  },
  {
    title: 'BattleBot',
    tag: 'Engineering build',
    description: 'A robotics and engineering project with mechanical experimentation, testing, and practical system building.',
    image: '/projects/battlebot.jpg',
    link: GITHUB_URL,
    tone: 'ember',
  },
  {
    title: 'Python Projects',
    tag: 'Automation + logic',
    description: 'Coding experiments, automation utilities, and problem-solving projects built with Python and practical workflows.',
    image: null,
    link: GITHUB_URL,
    tone: 'violet',
  },
  {
    title: 'Freelance Projects',
    tag: 'Client websites',
    description: 'Responsive websites and landing pages for people and businesses, built with modern UI and reliable deployment.',
    image: null,
    link: GITHUB_URL,
    tone: 'blue',
  },
]

const services = [
  ['Website Development', 'Modern responsive websites for individuals, businesses, and product ideas.'],
  ['Web Application Development', 'Custom web tools and platforms with clean interaction and maintainable structure.'],
  ['AI-Based Features', 'Practical AI features, automation flows, and intelligent product experiments.'],
  ['Hosting & Deployment', 'Launch support for websites and apps with stable hosting and production builds.'],
]

const journey = [
  ['2023', 'Started learning web development and building small pages.'],
  ['2024', 'Built websites, applications, and real project workflows.'],
  ['2025', 'Moved deeper into AI tools, automation, and product thinking.'],
  ['2026', 'Building larger systems and preparing future startup platforms.'],
]

const stack = [
  { name: 'Python', desc: 'Automation, AI workflows, scripting', icon: SiPython, color: '#55d8ea', wide: false },
  { name: 'Java', desc: 'Core programming and app logic', icon: FaJava, color: '#ff8a5c', wide: false },
  { name: 'React', desc: 'Modern interface architecture', icon: SiReact, color: '#61dafb', wide: false },
  { name: 'Node.js', desc: 'Backend APIs and services', icon: SiNodedotjs, color: '#78d982', wide: false },
  { name: 'Firebase', desc: 'Hosting, auth, real-time apps', icon: SiFirebase, color: '#ffcc4d', wide: true },
  { name: 'MongoDB', desc: 'Flexible application databases', icon: SiMongodb, color: '#6ee787', wide: true },
  { name: 'Tailwind', desc: 'Fast premium UI systems', icon: SiTailwindcss, color: '#38bdf8', wide: true },
  { name: 'GitHub', desc: 'Version control and collaboration', icon: FaGithub, color: '#ffffff', wide: false },
  { name: 'AI Tools', desc: 'AI-based projects and prototypes', icon: GiArtificialIntelligence, color: '#a78bfa', wide: true },
]

const socials = [
  { label: 'Email', value: 'kushal.podaralla@gmail.com', href: 'mailto:kushal.podaralla@gmail.com', icon: FaEnvelope },
  { label: 'LinkedIn', value: 'Kushal Santosh P', href: LINKEDIN_URL, icon: FaLinkedin },
  { label: 'Instagram', value: '@santhosh_podaralla', href: INSTAGRAM_URL, icon: FaInstagram },
  { label: 'Discord', value: 'Available for project calls', href: DISCORD_URL, icon: FaDiscord },
]

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  )
}

function Atmosphere({ pointer }) {
  return (
    <div className="atmosphere" aria-hidden="true" style={{ '--spot-x': `${pointer.x}px`, '--spot-y': `${pointer.y}px` }}>
      <div className="atmosphere-dots" />
      <div className="atmosphere-wave atmosphere-wave-a" />
      <div className="atmosphere-wave atmosphere-wave-b" />
      <div className="atmosphere-wave atmosphere-wave-c" />
      <div className="atmosphere-spot" />
      <div className="atmosphere-vignette" />
    </div>
  )
}

function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function HeroPortrait() {
  return (
    <motion.div
      className="hero-portrait-shell"
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.28, ease: premiumEase }}
    >
      <img src={PROFILE_IMAGE} alt="Kushal Santosh P" className="hero-portrait" />
      <div className="portrait-glass-panel">
        <span>Available for freelance builds</span>
        <strong>Web apps, AI projects, and startup-focused systems</strong>
      </div>
    </motion.div>
  )
}

function TechKeyboard() {
  const [active, setActive] = useState(stack[0])
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()

  const onMove = (event) => {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 10, y: y * -8 })
  }

  return (
    <div className="keyboard-wrap" onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
      <motion.div
        className="keyboard-stage"
        animate={{ rotateX: 56 + tilt.y, rotateZ: -7, rotateY: tilt.x }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="keyboard-base">
          {stack.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                type="button"
                key={item.name}
                className={clsx('tech-key', item.wide && 'tech-key-wide')}
                style={{ '--key-color': item.color }}
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                onClick={() => setActive(item)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045, duration: 0.45, ease: premiumEase }}
              >
                <Icon />
                <span>{item.name}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
      <div className="keyboard-shadow" />
      <motion.div className="keyboard-tooltip" key={active.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <span>{active.name}</span>
        <p>{active.desc}</p>
      </motion.div>
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} visual`} className="project-image" loading="lazy" />
  }

  if (project.title.includes('Python')) {
    return (
      <div className="terminal-visual">
        <span>kushal@dev:~$ python build.py</span>
        <span className="terminal-line">automation_ready = True</span>
        <span className="terminal-line">ai_tools.connect()</span>
        <span className="terminal-pulse">deploy --clean</span>
      </div>
    )
  }

  return (
    <div className="browser-visual">
      <div className="browser-bar"><i /><i /><i /></div>
      <div className="browser-hero" />
      <div className="browser-lines"><span /><span /><span /></div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.a href={project.link} target="_blank" rel="noreferrer" className={clsx('premium-project', `project-${project.tone}`)} whileHover={{ y: -10 }}>
        <div className="project-media">
          <ProjectVisual project={project} />
        </div>
        <div className="project-copy">
          <span>{project.tag}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <strong>Open GitHub <FaArrowUpRightFromSquare /></strong>
        </div>
      </motion.a>
    </Reveal>
  )
}

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 90, damping: 24 })
  const springY = useSpring(pointerY, { stiffness: 90, damping: 24 })
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0.42, 0.82])

  useEffect(() => {
    const onPointerMove = (event) => {
      const next = { x: event.clientX, y: event.clientY }
      setPointer(next)
      pointerX.set(next.x - 180)
      pointerY.set(next.y - 180)
    }

    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [pointerX, pointerY])

  const heroVariants = useMemo(() => ({
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
  }), [])

  const heroItem = {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: premiumEase } },
  }

  return (
    <div className="site-shell">
      <Atmosphere pointer={pointer} />
      <motion.div className="cursor-light" style={{ x: springX, y: springY }} aria-hidden="true" />

      <motion.header className="site-header" style={{ '--header-alpha': headerOpacity }}>
        <nav>
          <a href="#home" className="brand-mark">Kushal Santosh P</a>
          <div className="nav-links">
            {navLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </motion.header>

      <main>
        <section id="home" className="hero-section scene-section">
          <motion.div className="hero-content" variants={heroVariants} initial="hidden" animate="visible">
            <motion.span className="eyebrow" variants={heroItem}>BTech IT Student / Full Stack Developer / AI Developer</motion.span>
            <motion.h1 variants={heroItem}>Building modern web apps and AI-based systems.</motion.h1>
            <motion.p variants={heroItem}>
              I am Kushal Santosh P, a developer from India with 2+ years of experience and 30+ completed projects across freelance websites, app development, AI experiments, and startup-focused builds.
            </motion.p>
            <motion.div className="hero-actions" variants={heroItem}>
              <a href="#projects">View work <FaArrowUpRightFromSquare /></a>
              <a href="#stack">Explore stack</a>
            </motion.div>
            <motion.div className="hero-stats" variants={heroItem}>
              {stats.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
            </motion.div>
          </motion.div>
          <HeroPortrait />
        </section>

        <section id="about" className="scene-section about-section">
          <Reveal>
            <SectionHeading label="About" title="Practical developer, product-minded builder." subtitle="I build by testing real ideas, improving systems step by step, and keeping the final product useful." />
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-image-panel">
              <img src={PROFILE_IMAGE} alt="Kushal Santosh P" />
            </Reveal>
            <Reveal className="about-copy" delay={0.1}>
              <p>
                Hey, I am Kushal Santosh P, a BTech Information Technology student, full stack developer, and AI developer. My work sits between clean websites, functional applications, and AI-based projects that solve practical problems.
              </p>
              <p>
                Over the past 2+ years, I have completed 30+ projects, including freelance web development, app development, hosting work, and AI experiments. I enjoy building systems that look polished but still stay reliable, scalable, and easy to use.
              </p>
              <p>
                My long-term direction is startup-focused: learn through real projects, build stronger platforms, and keep improving until the idea becomes a usable product.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="scene-section projects-section">
          <Reveal>
            <SectionHeading label="Selected work" title="Projects presented like product stories." subtitle="Cinematic glass cards, real uploaded assets, and polished hover movement without losing clarity." />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </section>

        <section id="stack" className="scene-section stack-section">
          <Reveal>
            <SectionHeading label="Tech stack" title="Interactive 3D keyboard of tools I use." subtitle="Hover or tap the keys to feel the stack respond with depth, light, and subtle motion." />
          </Reveal>
          <Reveal delay={0.12}>
            <TechKeyboard />
          </Reveal>
        </section>

        <section id="services" className="scene-section services-section">
          <Reveal>
            <SectionHeading label="Services" title="What I can build for you." subtitle="Clean development support for people, businesses, and early-stage product ideas." />
          </Reveal>
          <div className="services-grid">
            {services.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.06} className="service-card">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="mindset" className="scene-section mindset-section">
          <Reveal>
            <SectionHeading label="Direction" title="I do not just want to write code. I want to build products." subtitle="The focus is bigger systems, practical problem solving, and technology that can become useful platforms." />
          </Reveal>
          <div className="timeline">
            {journey.map(([year, text], index) => (
              <Reveal key={year} delay={index * 0.06} className="timeline-row">
                <span>{year}</span>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="schedule" className="scene-section schedule-section">
          <Reveal>
            <SectionHeading label="Schedule" title="Book a call when you want to discuss a project." subtitle="A clean scheduling panel keeps the booking flow professional and direct." />
          </Reveal>
          <Reveal className="schedule-panel" delay={0.1}>
            <iframe title="Schedule a Call With Kushal Santosh P" src={CALENDLY_URL} width="100%" height="720" loading="lazy" />
          </Reveal>
        </section>

        <section id="contact" className="scene-section contact-section">
          <Reveal>
            <SectionHeading label="Contact" title="Let us build something useful." subtitle="Reach me through email or social platforms for freelance websites, apps, AI projects, or startup work." />
          </Reveal>
          <div className="contact-grid">
            {socials.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={index * 0.06}>
                  <a href={item.href} target={item.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noreferrer" className="contact-card">
                    <Icon />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </section>
      </main>

      <motion.a href="#contact" className="floating-contact" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.55 }}>
        Contact Me
      </motion.a>
    </div>
  )
}

export default App
