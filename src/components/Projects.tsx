import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectSnow from "@/assets/project-snow.jpg";
import projectSnow2 from "@/assets/snow.jpg";
import projectHaze from "@/assets/project-haze.jpg";
import projectDust from "@/assets/project-dust.jpg";
import projectTracking from "@/assets/project-tracking.jpg";
import heartDiseaseImage from "@/assets/heart_disease.jpg";
import machineLearning from "@/assets/Machine-Learning.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "F-Net: Snow Mask Generation Feature-Fusion Network",
      description:
        "A deep learning framework designed to generate precise snow masks using a multi-scale feature-fusion architecture, enabling accurate localization of snow patterns and improved image desnowing.",
      tech: ["PyTorch", "OpenCV", "Python", "Feature Fusion", "Multi-scale Architecture"],
      github: "https://github.com/ahmadrazah2/F-Net-Snow-Mask-Generation-Feature-Fusion-Networks-of-Image-Desnowing",
      image: projectSnow,
      highlights: ["Multi-scale feature fusion", "Strong PSNR/SSIM on Snow100K-S", "Precise snow mask generation"],
    },
    {
      title: "MGRRN: Mask-Guided Residual Reconstruction Network For Image Desnowing",
      description:
        "A mask-guided residual reconstruction network that uses predicted snow masks to restore clean images from heavily snow-degraded inputs, leveraging residual learning and multi-loss optimization.",
      tech: ["PyTorch", "Deep Learning", "Residual Learning", "Multi-loss Optimization"],
      github: "https://github.com/ahmadrazah2/Mask-Guided-Residual-Reconstruction-Network-MGRRN-for-image-desnowing",
      image: projectSnow2,
      highlights: ["Mask-guided reconstruction", "L1, SSIM & Perceptual losses", "High visual quality restoration"],
    },
    {
      title: "Sand-Dust Image Enhancement",
      description:
        "An image enhancement pipeline for sand-dust or sandstorm-degraded images using red and blue channel manipulation to restore visibility, contrast, and color balance.",
      tech: ["Python", "OpenCV", "Image Processing", "Channel Enhancement"],
      github: "https://github.com/ahmadrazah2/Sand-Dust-Image-Enhancement-Using-Red-and-Blue-Channels",
      image: projectDust,
      highlights: ["Channel-based enhancement", "Sand-dust degradation handling", "Color balance restoration"],
    },
    {
      title: "DFCRN: Deep Fully Convolutional Regression Network",
      description:
        "PyTorch implementation of a deep fully convolutional regression network that predicts transmission maps for single-image haze removal, restoring clarity and depth in hazy images.",
      tech: ["PyTorch", "Deep Learning", "Image Restoration", "Transmission Maps"],
      github: "https://github.com/ahmadrazah2/DFCRN-Deep-Fully-Convolutional-Regression-Network-for-Single-Image-Haze",
      image: projectHaze,
      highlights: ["End-to-end regression", "Single image dehaze", "Transmission map prediction"],
    },
    {
      title: "YOLO + DeepSORT Real-Time Object Tracking",
      description:
        "Real-time object detection and tracking pipeline using YOLO and DeepSORT to track persons and vehicles across video frames, designed for CCTV-style scenarios.",
      tech: ["Python", "YOLO", "DeepSORT", "OpenCV", "Real-time Processing"],
      github: "https://github.com/ahmadrazah2/YOLO-DeepSORT-Tracking",
      image: projectTracking,
      highlights: ["Real-time tracking", "Multi-object tracking", "CCTV applications"],
    },
    {
      title: "Heart Disease Prediction",
      description:
        "An ensemble-based machine learning model for heart disease prediction using feature engineering with models like Random Forest, Logistic Regression, and Decision Trees.",
      tech: ["Python", "Scikit-learn", "Ensemble Learning", "Feature Engineering"],
      github: "https://github.com/ahmadrazah2/Heart_disease_Prediction",
      image: heartDiseaseImage,
      highlights: ["Ensemble ML approach", "High accuracy prediction", "Conference paper submission"],
    },
    {
      title: "Machine Learning Experiments",
      description:
        "A collection of experiments and notebooks, including classification tasks such as handwritten digit recognition (MNIST) and other foundational ML models.",
      tech: ["Python", "Jupyter", "Scikit-learn", "PyTorch", "TensorFlow"],
      github: "https://github.com/ahmadrazah2/Machine_Learning",
      image: machineLearning,
      highlights: ["MNIST classification", "Various ML experiments", "Educational notebooks"],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary">Key Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
