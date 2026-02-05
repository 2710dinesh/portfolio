
import { Github, Linkedin, Mail, Download, ArrowDown, Code2, Briefcase, Target, Users } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'MERN Stack Developer',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Professional background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      {/* Professional geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl float pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-xl float pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-xl float pulse-glow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-secondary/10 rounded-full blur-xl float pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Professional greeting */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 1, y: 0 }} // Visible by default for LCP
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-text-primary mb-6 leading-tight font-serif" 
              initial={{ opacity: 1, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }} // Optimized for LCP
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-shimmer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                whileHover={{ scale: 1.1 }}
              >
                Dinesh R
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-4xl text-text-secondary mb-4 h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <TypingAnimation 
                texts={roles}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="font-semibold text-primary-light"
              />
            </motion.div>
          </motion.div>
          
          {/* Professional description */}
          <motion.p 
            className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            Aspiring Full-Stack Developer passionate about building scalable web applications and AI driven solutions.
          </motion.p>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.button 
              className="btn-primary group flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Download size={20} />
              </motion.div>
              Download Resume
            </motion.button>
            <motion.button 
              onClick={scrollToAbout}
              className="btn-secondary group flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span>Learn More</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </motion.button>
          </motion.div>
          
          {/* Professional social links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com/2710dinesh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/dineshr2710', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className={`text-text-muted hover:text-primary group`}
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="p-4 rounded-full glass group-hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Professional expertise preview */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 text-text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            {[
              { icon: Code2, text: 'React & TypeScript' },
              { icon: Briefcase, text: 'Enterprise Solutions' },
              { icon: Target, text: 'Performance Optimization' },
              { icon: Users, text: 'Team Leadership' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <item.icon size={16} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-primary transition-all duration-300 group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to About section"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.span 
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Scroll Down
            </motion.span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-current rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;