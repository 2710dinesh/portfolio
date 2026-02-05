import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Dineshr8088@gmail.com',
      href: 'mailto:Dineshr8088@gmail.com',
      color: 'from-theme-lightest to-theme-light'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8088815170',
      href: 'tel:+918088815170',
      color: 'from-theme-light to-theme-medium'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karnataka, India',
      href: '#',
      color: 'from-theme-medium to-theme-light'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/2710dinesh',
      color: 'hover:text-theme-light'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dineshr2710',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#',
      color: 'hover:text-purple-400'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: CheckCircle,
      title: 'Reliable',
      description: 'Committed to delivering quality work'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Clear and transparent throughout the process'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      {/* Professional background effects */}
      <div className="absolute inset-0 section-bg opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-text-primary mb-8 font-serif" 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get In <motion.span 
                className="text-shimmer"
                whileHover={{ scale: 1.1 }}
              >
                Touch
              </motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Ready to discuss your next project? Let's explore how we can work together 
              to achieve your business objectives.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-text-primary mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Let's Connect
                </motion.h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-6 text-text-secondary hover:text-white transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-text-muted font-medium">{item.label}</p>
                        <p className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h4 className="text-xl font-bold text-text-primary mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="glass p-4 rounded-2xl text-text-muted hover:text-white transition-all duration-300 group bg-surface/30 border border-white/5"
                      aria-label={link.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon size={24} className={`group-hover:${link.color.split(' ')[1]}`} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-center space-x-4 glass p-4 rounded-xl group hover:bg-surfaceHighlight transition-all duration-300 border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h5 className="text-text-primary font-semibold">{feature.title}</h5>
                      <p className="text-text-muted text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="glass rounded-2xl p-8 border border-white/5 bg-surface/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-text-primary mb-4">Send Message</h3>
                <p className="text-text-secondary">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </motion.div>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-text-secondary mb-2 font-semibold group-focus-within:text-primary transition-colors duration-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-surfaceHighlight transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-text-secondary mb-2 font-semibold group-focus-within:text-primary transition-colors duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-surfaceHighlight transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-text-secondary mb-2 font-semibold group-focus-within:text-primary transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-surfaceHighlight transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-text-secondary mb-2 font-semibold group-focus-within:text-primary transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-surfaceHighlight transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 ${
                    isSubmitted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                      : isSubmitting
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-primary/20'
                  }`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="rounded-full h-5 w-5 border-b-2 border-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center space-x-3"
                      whileHover={{ x: 2 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Send size={20} />
                      </motion.div>
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;