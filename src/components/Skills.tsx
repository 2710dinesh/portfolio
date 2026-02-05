import { useState, useEffect } from 'react';
import { Code2, Server, Wrench, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<{ [key: string]: boolean }>({});

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-theme-lightest to-theme-light',
      bgColor: 'from-theme-lightest/10 to-theme-light/10',
      skills: [
        { name: 'Java', level: 90, color: 'from-theme-lightest to-theme-light' },
        { name: 'Python', level: 85, color: 'from-theme-lightest to-theme-light' },
        { name: 'C', level: 80, color: 'from-theme-lightest to-theme-light' },
        { name: 'JavaScript', level: 85, color: 'from-theme-lightest to-theme-light' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Server,
      color: 'from-theme-light to-theme-medium',
      bgColor: 'from-theme-light/10 to-theme-medium/10',
      skills: [
        { name: 'React', level: 90, color: 'from-theme-light to-theme-medium' },
        { name: 'Node.js', level: 85, color: 'from-theme-light to-theme-medium' },
        { name: 'Express.js', level: 85, color: 'from-theme-light to-theme-medium' },
        { name: 'HTML/CSS', level: 95, color: 'from-theme-light to-theme-medium' },
        { name: 'MongoDB', level: 80, color: 'from-theme-light to-theme-medium' },
        { name: 'MySQL', level: 80, color: 'from-theme-light to-theme-medium' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-theme-medium to-theme-light',
      bgColor: 'from-theme-medium/10 to-theme-light/10',
      skills: [
        { name: 'VS Code', level: 95, color: 'from-theme-medium to-theme-light' },
        { name: 'Eclipse', level: 85, color: 'from-theme-medium to-theme-light' },
        { name: 'Jenkins', level: 75, color: 'from-theme-medium to-theme-light' },
        { name: 'Git', level: 90, color: 'from-theme-medium to-theme-light' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryTitle = entry.target.getAttribute('data-category');
            if (categoryTitle) {
              setVisibleSkills(prev => ({ ...prev, [categoryTitle]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-category]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-background">
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
              Skills & <motion.span 
                className="text-shimmer"
                whileHover={{ scale: 1.1 }}
              >
                Technologies
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
              Professional expertise in modern technologies and enterprise-grade solutions
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                data-category={category.title}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-500 group bg-surface/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + categoryIndex * 0.2 }}
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <motion.div 
                    className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + categoryIndex * 0.2, duration: 0.5 }}
                  />
                </motion.div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-text-secondary font-semibold text-lg group-hover/skill:text-text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        >
                          <motion.span 
                            className="text-text-primary text-sm font-bold"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1, type: "spring", stiffness: 200 }}
                          >
                            {visibleSkills[category.title] ? skill.level : 0}%
                          </motion.span>
                          <motion.div
                            animate={{ rotate: visibleSkills[category.title] ? [0, 10, -10, 0] : 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                          >
                            <Star size={16} className="text-primary-light" />
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-surfaceHighlight rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`bg-gradient-to-r ${skill.color} h-3 rounded-full group-hover/skill:shadow-lg group-hover/skill:shadow-primary/25`}
                            initial={{ width: 0 }}
                            whileInView={{ width: visibleSkills[category.title] ? `${skill.level}%` : '0%' }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                              duration: 1.5,
                              ease: "easeOut"
                            }}
                          >
                            <motion.div 
                              className="h-full bg-white/20 rounded-full"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional skills showcase */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                Additional Expertise
              </h3>
              <p className="text-text-muted">
                Technologies and tools I'm passionate about
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {[
                'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Webpack', 'Vite',
                'GraphQL', 'REST API', 'Microservices', 'Redis', 'MySQL', 'Firebase',
                'Linux', 'Nginx', 'CI/CD', 'Testing', 'Agile', 'Scrum'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="glass p-4 rounded-xl text-center hover:bg-surfaceHighlight transition-all duration-300 group border border-white/5 bg-surface/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3, rotate: [0, -2, 2, 0] }}
                >
                  <span className="text-text-secondary group-hover:text-primary font-medium text-sm">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;