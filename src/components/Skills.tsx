import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Eye,
  Image,
  Code2,
  Layers,
  Cpu,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Core Expertise",
      icon: Brain,
      skills: [
        "Deep Learning",
        "Computer Vision",
        "Image Restoration & Enhancement",
        "Weather-Degraded Image Processing",
        "Image Segmentation & Mask Generation",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["PyTorch", "TensorFlow / Keras", "OpenCV", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "C++"],
    },
    {
      title: "Model & Training Skills",
      icon: Cpu,
      skills: [
        "Custom CNN Architectures",
        "Feature-Fusion Networks",
        "Residual Reconstruction",
        "Perceptual Loss (VGG)",
        "SSIM & L1 Loss",
        "Regression-Based Enhancement",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: [
        "Git & GitHub",
        "Jupyter Notebooks",
        "Google Colab",
        "Kaggle",
        "VS Code",
        "PyCharm",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-muted text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
