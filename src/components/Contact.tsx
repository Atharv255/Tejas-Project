import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Terminal, Send, Linkedin, Github } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // TODO: Replace with actual email integration (e.g., EmailJS, SendGrid, or your backend API)
    setTimeout(() => {
      console.log('Form data:', formData);
      toast.success('Message transmitted successfully! I\'ll respond soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);

    /* Example EmailJS integration:
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    */
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "tejaswa.dev@email.com", link: "mailto:tejaswa.dev@email.com" },
    { icon: Terminal, label: "Status", value: "Available for Projects", link: null },
    { icon: MapPin, label: "Location", value: "India", link: null }
  ];

  const socials = [
    { icon: Github, label: "GitHub", link: "#" },
    { icon: Linkedin, label: "LinkedIn", link: "#" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="neon-glow-purple text-primary">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="glass-strong rounded-lg p-4 flex items-center gap-4 group hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg neon-border bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-strong rounded-lg p-6"
            >
              <p className="text-muted-foreground mb-4 text-sm">Connect on platforms:</p>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      className="flex items-center justify-center w-12 h-12 rounded-lg neon-border bg-primary/5 hover:bg-primary/10 transition-all hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Info box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="neon-border-purple rounded-xl p-6 bg-purple-500/5"
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always interested in new opportunities, challenging projects, and collaborations. 
                Whether it's AI/ML development, full-stack applications, or innovative GenAI solutions, 
                I'm excited to bring ideas to life.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full glass border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full glass border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full min-h-32 glass border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full neon-border py-4 rounded-lg flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all disabled:opacity-50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Transmit Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
