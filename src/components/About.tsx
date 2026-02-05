import { BookOpen, Briefcase, Code, GraduationCap, MapPin, Calendar, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science & Engineering',
      institution: 'Global Academy of Technology',
      year: '2025-2026',
      score: '8.51 CGPA'
    },
    {
      degree: 'Pre-University / 12th Standard',
      institution: "Marimallappa's Pre-University College",
      year: '2021-2022',
      score: '79.86%'
    },
    {
      degree: '10th Standard',
      institution: "St. Mary's English Medium High School",
      year: '2019-2020',
      score: '86.24%'
    }
  ];

  const personalDetails = [
    { icon: Calendar, label: 'Date of Birth', value: '27/10/2004' },
    { icon: Languages, label: 'Languages', value: 'Kannada, Tamil, Malayalam, English, Hindi, Lambani' },
    { icon: MapPin, label: 'Address', value: 'Martalli PO, Hanur taluk, Chamarajanagara District, Karnataka - 571444' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-background">
      {/* Professional background effects */}
      <div className="absolute inset-0 section-bg opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
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
              About <motion.span className="text-shimmer">Me</motion.span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          {/* Core Bio & Internship */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Bio */}
            <motion.div 
              className="glass p-8 rounded-2xl border border-white/5 bg-surface/50 h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <Code className="text-primary" /> Career Objective
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Aspiring Full-Stack Developer passionate about building scalable web applications and AI driven solutions. 
                Eager to apply problem-solving skills, technical expertise, and teamwork to contribute to impactful projects in a dynamic organization.
              </p>
            </motion.div>

            {/* Internship */}
            <motion.div 
              className="glass p-8 rounded-2xl border border-white/5 bg-surface/50 h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <Briefcase className="text-secondary" /> Internship Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-white">MERN Stack Developer Intern</h4>
                  <p className="text-primary font-medium">Roll2Bowl Technologies Pvt Ltd | 3 Months</p>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Contributed to the development of scalable web applications using SQL and MongoDB, Express.js, React.js, and Node.js.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-text-primary mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="text-primary" size={32} /> Education
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-2xl border border-white/5 bg-surface/30 hover:bg-surface/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary font-bold text-sm mb-2">{edu.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-text-secondary mb-4">{edu.institution}</p>
                  <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white">
                    {edu.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Details & Certifications */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Personal Details */}
            <motion.div 
              className="glass p-8 rounded-2xl border border-white/5 bg-surface/50"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">Personal Details</h3>
              <div className="space-y-6">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-white/5 p-3 rounded-lg h-fit">
                      <detail.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-text-muted mb-1">{detail.label}</h4>
                      <p className="text-white font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="glass p-8 rounded-2xl border border-white/5 bg-surface/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <BookOpen className="text-secondary" /> Certifications
              </h3>
              <ul className="space-y-6">
                {[
                  'Python for Data Science, AI & Development – IBM',
                  'Data Science and Analytics – HP LIFE | HP Foundation',
                  'Awareness and Hands-on Session on IoT and Its Applications'
                ].map((cert, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-text-secondary text-lg">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;