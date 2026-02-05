import { useState } from 'react';
import { ExternalLink, Github, Calendar, Star, Eye, Code2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'NeuroBridge: Bridging Gaps',
      description: 'A multi-modal system integrating speech recognition, gesture control, and brainwave data to enhance communication, navigation, and digital safety for differently-abled users.',
      image: 'https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-digital-art-of-brain.jpeg?auto=compress&cs=tinysrgb&w=800', // AI/Brain placeholder
      technologies: ['AI', 'IoT', 'Speech Recognition', 'Gesture Control'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2024',
      category: 'AI/ML',
      featured: true,
      stats: { views: '1.2k', stars: 25, forks: 4 }
    },
    {
      id: 2,
      title: 'Logistics Operations & Tracking',
      description: 'Full-stack admin panel for logistics with real-time fleet tracking, trip orchestration, and warehouse management using microservices architecture.',
      image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800', // Logistics/Tracking placeholder
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Microservices'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2024',
      category: 'Full Stack',
      featured: true,
      stats: { views: '2.8k', stars: 42, forks: 12 }
    },
    {
      id: 3,
      title: 'NLP-Driven Voice Assistant',
      description: 'Python-based AI assistant to automate tasks like opening apps, playing music, and searching online. Features API integration and real-time speech interaction.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', // AI/Robot placeholder
      technologies: ['Python', 'NLP', 'OpenCV', 'Pyttsx3'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      category: 'AI/ML',
      featured: false,
      stats: { views: '1.5k', stars: 30, forks: 8 }
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background">
      {/* Professional background effects */}
      <div className="absolute inset-0 section-bg opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
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
              className="text-5xl md:text-6xl font-black text-white text-text-primary mb-8 font-serif" 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Featured <motion.span 
                className="text-shimmer"
                whileHover={{ scale: 1.1 }}
              >
                Projects
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
              A portfolio of enterprise-grade solutions and innovative projects that showcase technical excellence
            </motion.p>
          </motion.div>

          {/* Category filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                    : 'glass text-text-secondary hover:text-white hover:bg-surfaceHighlight'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  className={`group relative overflow-hidden rounded-2xl ${
                    project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                  }`}
                  whileHover={{ scale: 1.05, y: -10, rotate: [0, -1, 1, 0] }}
                >
                <motion.div 
                  className="glass border border-white/5 hover:border-primary/50 h-full bg-surface/30"
                  whileHover={{ borderColor: "rgba(79, 70, 229, 0.4)" }}
                >
                  {/* Project image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                          <Star size={14} />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <div className="glass px-3 py-1 rounded-full text-xs font-medium text-text-primary bg-black/50 backdrop-blur-md border border-white/10">
                        {project.category}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="flex gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.a
                          href={project.githubUrl}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Project content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-text-muted text-sm">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6 h-16 content-start">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-surfaceHighlight text-text-secondary px-3 py-1 rounded-full text-xs font-medium border border-white/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project stats */}
                    <div className="flex items-center justify-between text-sm text-text-muted mb-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Eye size={14} />
                          <span>{project.stats.views}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Star size={14} />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Code2 size={14} />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action buttons */}

                  </div>
                </motion.div>
              </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="glass p-8 rounded-2xl border border-white/5 max-w-2xl mx-auto bg-surface/50"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Interested in working together?
              </motion.h3>
              <motion.p 
                className="text-text-secondary mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I'm always excited to take on new challenges and create amazing digital experiences.
              </motion.p>
              <motion.button 
                className="btn-primary group flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap size={20} />
                </motion.div>
                <span>Let's Build Something Amazing</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;