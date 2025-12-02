import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Code } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Master's in Global IT Engineering - Kyungsung University, Busan",
        "Bachelor's in Computer Science - Pakistan",
      ],
    },
    {
      icon: Target,
      title: "Key Focus Areas",
      items: [
        "Deep learning for image restoration",
        "Snow mask generation and residual reconstruction",
        "Sand-dust and haze removal",
        "Real-time object detection and tracking",
        "Machine learning–based medical prediction models",
      ],
    },
    {
      icon: Code,
      title: "Core Expertise",
      items: [
        "Custom neural architectures for mask generation",
        "Feature-fusion networks",
        "Regression-based enhancement",
        "Weather-degraded image processing",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-center text-muted-foreground mb-16 leading-relaxed"
          >
            I am an AI & Computer Vision Engineer specializing in deep learning–based image restoration and enhancement. My research focuses on weather-degraded image improvement, including desnowing, dehazing, and sand-dust correction. I build custom neural architectures for segmentation, mask generation, and residual reconstruction, and develop end-to-end pipelines for high-quality image restoration and analysis.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
