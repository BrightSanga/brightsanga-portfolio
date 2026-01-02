import React, { useState } from 'react';
import { PROJECTS, SKILLS, EXPERIENCES, SERVICES, TESTIMONIALS, PRICING_PACKAGES } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const WHATSAPP_URL = "https://wa.me/27686854777";
  const GITHUB_URL = "https://github.com/BrightSanga";
  const TWITTER_URL = "https://twitter.com/BrightSangaDev";

  return (
    <div className="relative overflow-x-hidden selection:bg-blue-500/30 min-h-screen">
      {/* Decorative Blobs */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-0 -right-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-8 left-20 w-72 h-72 bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BS.
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block bg-white text-black px-4 py-2 rounded-full text-sm font-bold active:scale-95 transition"
            >
              Let's Talk
            </a>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gray-900 z-50 p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={toggleMenu} className="p-2 text-gray-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="gradient-text"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-600 text-white p-4 rounded-2xl text-center text-lg active:scale-95 transition"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase bg-blue-400/10 rounded-full"
          >
            Web Architect & Software Developer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-7xl md:text-9xl font-black mb-8 leading-[1] tracking-tighter"
          >
            I'm <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">Bright Sanga</span>.
            <br/>
            <span className="gradient-text block mt-6 pb-6 text-5xl md:text-7xl lg:text-8xl leading-tight">
              Crafting the Future of Web.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-2xl max-w-4xl mb-12 leading-relaxed font-medium"
          >
            Merging the precision of <span className="text-white font-bold">Physics</span> with <span className="text-white font-bold">High-Performance Software Engineering</span>. Based in <span className="text-white font-bold">Malawi</span> and <span className="text-white font-bold">South Africa</span>, building for the global digital frontier.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4"
          >
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition shadow-2xl shadow-blue-500/30 text-center"
            >
              Explore My Work
            </a>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-700 active:scale-95 transition text-center"
            >
              Start a Project
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-500 hover:text-white transition-all group"
            >
              <svg className="w-10 h-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.22.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-gray-400 group-hover:text-blue-400 transition-colors">GitHub Profile</span>
                <span className="text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">Check out my Repositories</span>
              </div>
            </a>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-950/40 border-y border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Clients', val: '5+' },
              { label: 'Projects Completed', val: '3+' },
              { label: 'Linux OS Used', val: '6+' },
              { label: 'Physics Distinctions', val: '3' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Physics and Web development. <br/>The perfect Synergy</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                My journey began with a curiosity about how the universe works, leading me to <span className="text-white">MUBAS</span> to study <span className="text-white">Industrial Physics</span>. By leveraging <span className="text-white">logical problem solving and mathematical precision</span>, I optimize digital performance and build robust architectures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
                  <h4 className="text-white font-bold mb-2">Technical Philosophy</h4>
                  <p className="text-sm text-gray-500">"Efficiency is the ultimate form of intelligence."</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
                  <h4 className="text-white font-bold mb-2">Systems Engineering</h4>
                  <p className="text-sm text-gray-500">I build scalable, efficient, and highly performant software.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-bl-full group-hover:bg-blue-600/10 transition-all duration-700"></div>
            <h3 className="text-xl font-bold mb-10 flex items-center gap-2">
              <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400">🚀</span> Professional Journey
            </h3>
            <div className="space-y-10">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-gray-800 last:border-0 pb-2">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="text-[10px] font-black text-blue-400 mb-1 uppercase tracking-widest">{exp.year}</div>
                  <div className="text-white font-bold text-lg">{exp.title}</div>
                  <div className="text-sm text-gray-400 mb-2">{exp.organization}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{exp.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Core Services</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Specialized technical solutions tailored for modern digital needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-950 border border-gray-800 p-10 rounded-[2rem] hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Technical Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center"
                >
                  <span className="text-4xl block mb-4">{skill.icon}</span>
                  <span className="font-bold text-sm block mb-3">{skill.name}</span>
                  <div className="w-full h-1 bg-gray-800 rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Pricing</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Choose the perfect plan for your needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_PACKAGES.map((pkg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gray-950 border ${pkg.isFeatured ? 'border-blue-500' : 'border-gray-800'} p-8 rounded-[2rem] flex flex-col`}
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div>
                    <p className={`text-4xl font-black ${pkg.isFeatured ? 'gradient-text' : 'text-white'}`}>{pkg.price}</p>
                    <p className="text-xl text-gray-400">{pkg.priceMWK}</p>
                  </div>
                  <ul className="space-y-4 text-gray-400 mt-6 mb-8 flex-grow">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${pkg.isFeatured ? 'text-blue-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full text-center py-4 rounded-full font-bold text-lg transition ${pkg.isFeatured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-4">My Published Work</h2>
              <p className="text-gray-500 text-lg">Practical solutions developed with an emphasis on scalability and clean architecture.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-gray-950 border border-gray-800 rounded-[2.5rem] p-8 hover:border-blue-500/30 transition-all duration-500 flex flex-col"
              >
                <div className="p-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-8 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                  <div className="mt-auto flex gap-4">
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-xl text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.22.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-gray-950/40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Kind Words</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((test, i) => (
                <div key={i} className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Stylized initial placeholder */}
                    <div className="w-14 h-14 rounded-full border-2 border-blue-500 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-xl">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{test.name}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">{test.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic text-lg leading-relaxed">"{test.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to start <br/>a project?</h2>
              <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-lg mx-auto">
                Whether it's a new web application, a Linux server setup, or a physics-based simulation, let's talk.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 active:scale-95 transition shadow-2xl text-center"
                >
                  Let's Talk
                </a>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-2xl font-black gradient-text mb-6">BS.</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                A passionate developer and physicist from Malawi and South Africa, creating digital experiences that bridge the gap between complex science and intuitive user interfaces.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Sitemap</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {navLinks.map(l => (
                  <li key={l.name}><a href={l.href} onClick={(e) => scrollToSection(e, l.href)} className="hover:text-white transition">{l.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Socials</h4>
              <div className="flex gap-6">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition underline decoration-gray-800 underline-offset-8">GitHub</a>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition underline decoration-gray-800 underline-offset-8">Twitter</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Bright Sanga. All rights reserved.</p>
            <p>Designed and Developed in <span className="font-medium text-gray-400">Malawi & South Africa</span>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
