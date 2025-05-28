import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ARoma – Restaurant Management App",
      description: "Worked as Lead Developer, planning and overseeing the entire project. Personally developed a real-time admin dashboard to streamline menu updates.",
      stack: ["React.js", "Node.js", "Express.js", "SSE"],
      github: "Shavinkar-SKR/ARoma",
      image: "/aroma-preview.jpg"
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Built a secure, scalable platform deployed on AWS EC2 with React frontend and optimized backend. Reduced latency by 20% via AWS load balancing",
      stack: ["React.js", "Node.js", "AWS", "Stripe", "MongoDB"],
      github: "Sheshanthh/sheshanth-mern-stack",
      image: "/ecommerce-preview.jpg"
    },
    {
      title: "Real-Time Ticketing System",
      description: "Engineered a high-concurrency system achieving 30% faster booking times under 500+ requests",
      stack: ["Java", "Spring Boot", "React"],
      github: "Sheshanthh/Ticketin_System_OOP",
      image: "/ticketing-preview.jpg"
    },
    {
      title: "Real-Time Stock Trading Platform",
      description: "Built a high performance trading engine with real time order matching, live price updates and using a microservices architecture deployed with docker",
      stack: [".NET", "React", "SignalR", "Docker", "Alpha Vantage API"],
      github: "Sheshanthh/StockApi",
      image: "/trading-preview.jpg"
    },
    {
      title: "Student Management System",
      description: "Developed a desktop application with CRUD functionality for student records",
      stack: ["Java"],
      github: "Sheshanthh/java-student-management-system",
      image: "/student-management-preview.jpg"
    },
    {
      title: "Sustainable Development Website (Quality Education)",
      description: "Enhanced navigation via sitemap and designed gallery for Quality Education.",
      stack: ["HTML", "CSS", "JavaScript"],
      github: "Suwagath/WebDev-Quality_Education",
      image: "/quality-education-preview.jpg"
    },
    {
      title: "Personal Finance Tracker",
      description: "Built a Python based tool for tracking transactions",
      stack: ["Python", "Tkinter"],
      github: "Sheshanthh/python-based-project",
      image: "/finance-tracker-preview.jpg"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-content"
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)" }}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 