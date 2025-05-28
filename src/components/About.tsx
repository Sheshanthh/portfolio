import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript (TypeScript)", "C#"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "Spring Boot", ".NET"]
    },
    {
      category: "Databases & Tools",
      items: ["MongoDB", "MySQL", "Oracle", "GitHub", "AWS (EC2, S3)", "Docker"]
    },
    {
      category: "Concepts",
      items: ["REST APIs", "Microservices", "Agile", "Scrum", "OOP"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="about-content"
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>
        <div className="about-grid">
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a Software Engineering student at the University of Westminster (IIT) passionate about building scalable, efficient, and user-friendly applications. I have strong full-stack development skills with React, Node.js, Spring Boot, .NET, and AWS, along with proficiency in Python, Java, JavaScript/TypeScript, and C#.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Experienced in Docker and Agile workflows, I enjoy solving complex problems collaboratively and learning continuously. I'm excited to apply my skills and grow through meaningful software engineering internships and projects.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="education"
            variants={itemVariants}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            <motion.div 
              className="education-item"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>BEng (Hons) Software Engineering</h4>
              <p>University of Westminster, UK</p>
              <p>Expected 2027</p>
            </motion.div>
            <motion.div 
              className="education-item"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>Foundation Certificate in Higher Education</h4>
              <p>IIT | Grade: Merit</p>
              <p>2022 – Sep 2023</p>
            </motion.div>
            <motion.div 
              className="education-item"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>Cambridge IGCSE Ordinary Level (O/L) Examinations</h4>
              <p>Royal Institute</p>
              <p>2022</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="skills-section"
          variants={itemVariants}
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="skill-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-item"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 