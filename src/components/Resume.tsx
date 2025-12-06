import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvFile from "@/assets/Ahmad_resume.pdf";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Ahmad_Raza_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Master's in Global IT Engineering - Kyungsung University, Busan, South Korea",
        "Bachelor's in Computer Science - Pakistan",
      ],
    },
    {
      icon: Briefcase,
      title: "Technical Skills",
      items: [
        "Deep Learning & Computer Vision",
        "Image Restoration & Enhancement",
        "PyTorch, TensorFlow, OpenCV",
        "Python, C++, MATLAB",
      ],
    },
    {
      icon: Award,
      title: "Key Project Areas",
      items: [
        "Weather-degraded image processing (Snow, Haze, Sand-dust)",
        "Real-time object detection and tracking",
        "Custom CNN architectures and feature-fusion networks",
        "Machine learning for medical prediction",
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Resume & <span className="gradient-text">CV</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 mb-8"
            >
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                AI & Computer Vision Engineer with expertise in deep learning, image restoration, and
                weather-degraded image enhancement. Proven track record of developing custom neural
                architectures and implementing end-to-end solutions for real-world computer vision challenges.
              </p>

              <div className="flex justify-center mt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full CV
                </Button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
