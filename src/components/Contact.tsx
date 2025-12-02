import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_h5n6l24',
        'template_fgk3foj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '6kfL93RXv749qAOqW'
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmadrazah2@gmail.com",
      href: "mailto:ahmadrazah2@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ahmadrazah2",
      href: "https://github.com/ahmadrazah2",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ahmad Raza Hussain",
      href: "https://www.linkedin.com/in/ahmad-raza-hussain-50a989282/",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />

          <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research discussions, or AI/computer vision
            opportunities. I'm always open to exciting projects and networking.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
