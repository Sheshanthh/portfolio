import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import HeroBackground from './components/HeroBackground'
import AnimatedBackground from './components/AnimatedBackground'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const roles = [
    'Software Engineering Undergraduate',
    'Full-Stack Web Developer',
    'Backend Developer (Java / .NET / Node)',
    'Tech Enthusiast',
    'Tennis Player'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 2000;

  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const aboutY = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [300, -100]);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "center center"]
  });

  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesSectionRef,
    offset: ["start end", "center center"]
  });

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsSectionRef,
    offset: ["start end", "center center"]
  });

  const { scrollYProgress: contactScrollProgress } = useScroll({
    target: contactSectionRef,
    offset: ["start end", "center center"]
  });

  const aboutOpacity = useTransform(aboutScrollProgress, [0, 0.5], [0, 1]);
  const aboutTranslateY = useTransform(aboutScrollProgress, [0, 0.5], [50, 0]);

  const servicesOpacity = useTransform(servicesScrollProgress, [0, 0.5], [0, 1]);
  const servicesTranslateY = useTransform(servicesScrollProgress, [0, 0.5], [50, 0]);

  const projectsOpacity = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);
  const projectsTranslateY = useTransform(projectsScrollProgress, [0, 0.5], [50, 0]);

  const contactOpacity = useTransform(contactScrollProgress, [0, 0.5], [0, 1]);
  const contactTranslateY = useTransform(contactScrollProgress, [0, 0.5], [50, 0]);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentRoleIndex % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1));

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex(prevIndex => prevIndex + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleNavLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <AnimatedBackground />
      <nav className="navbar">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {/* Removed SV text */}
        </motion.div>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <AnimatePresence>
          <motion.div 
            className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(item)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </nav>

      <main className="main-content" ref={mainRef}>
        <section id="home" className="hero-section">
          <HeroBackground />
          <motion.div
            className="hero-content"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="name-part-1">Sheshanth</span>{' '}
              <span className="name-part-2">Vythilingam</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {displayText}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Full-stack developer specializing in React, Node.js, Spring Boot, and .NET
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="#projects" 
                className="primary-btn" 
                onClick={() => handleNavLinkClick('projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="secondary-btn" 
                onClick={() => handleNavLinkClick('contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="/Sheshanth_Vythilingam_CV.pdf" 
                download 
                className="secondary-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.a
                href="https://github.com/Sheshanthh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub style={{ marginRight: '0.5rem' }} />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vythilingam-sheshanth-378606277"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin style={{ marginRight: '0.5rem' }} />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_.sheshanthh/profilecard/?igsh=N3E3bXd5cDdqeGpr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram style={{ marginRight: '0.5rem' }} />
                Instagram
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        <motion.div 
          ref={aboutSectionRef} 
          style={{ y: aboutY, opacity: aboutOpacity, translateY: aboutTranslateY }}
        >
          <About />
        </motion.div>
        
        <motion.div
          ref={servicesSectionRef}
          style={{ opacity: servicesOpacity, translateY: servicesTranslateY }}
        >
          <Services />
        </motion.div>
        
        <motion.div 
          ref={projectsSectionRef} 
          style={{ y: projectsY, opacity: projectsOpacity, translateY: projectsTranslateY }}
        >
          <Projects />
        </motion.div>

        <motion.div
          ref={contactSectionRef}
          style={{ opacity: contactOpacity, translateY: contactTranslateY }}
        >
          <Contact />
        </motion.div>
      </main>
    </div>
  )
}

export default App 