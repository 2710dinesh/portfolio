import { Heart, Github, Linkedin, Mail, Code2, ArrowUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/2710dinesh',
      label: 'GitHub',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dineshr2710',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      href: 'mailto:Dineshr8088@gmail.com',
      label: 'Email',
      color: 'hover:text-secondary'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Java'
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-background/95 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary w-10 h-10 rounded-xl flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dinesh
              </div>
            </div>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              Senior Software Engineer specializing in enterprise-grade solutions and
              innovative technology implementations that drive business success.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`text-text-muted ${link.color} group`}
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="p-3 rounded-xl bg-surface/50 group-hover:bg-surfaceHighlight transition-all duration-300">
                    <link.icon size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span>
                      {link.label}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={14} className="ml-2" />
                    </motion.div>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-surface/50 text-text-muted px-3 py-1 rounded-full text-sm hover:bg-surfaceHighlight hover:text-primary transition-all duration-200 border border-white/5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-text-muted flex items-center justify-center md:justify-start">
                Made with <Heart size={16} className="text-secondary mx-2 animate-pulse" /> by Dinesh
              </p>
              <p className="text-gray-600 text-sm mt-1">
                © {currentYear} All rights reserved. Built with React & TypeScript.
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-text-muted hover:text-primary transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <motion.div
                className="p-2 rounded-full bg-surface/50 group-hover:bg-surfaceHighlight transition-all duration-300"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;