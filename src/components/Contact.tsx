import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="contact-content"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="label">Email:</span>
                <a 
                  href="mailto:sheshanthvythilingam22@gmail.com" 
                  className="email-link"
                >
                  sheshanthvythilingam22@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="label">Location:</span>
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="contact-item">
                <span className="label">CV:</span>
                <a 
                  href="/Sheshanth_Vythilingam_CV.pdf" 
                  download 
                  className="download-cv"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 