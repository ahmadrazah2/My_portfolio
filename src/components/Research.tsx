import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Award, TrendingUp } from "lucide-react";

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "F-Net: Snow Mask Generation Feature-Fusion Networks of Image Desnowing",
      description:
        "A novel deep learning framework for generating precise snow masks through multi-scale feature fusion. The approach leverages complementary features from different network depths to accurately localize snow patterns, significantly improving desnowing performance.",
      status: "Conference Submission",
      year: "2025",
      highlights: [
        "Multi-scale feature-fusion architecture for snow mask generation",
        "Superior PSNR and SSIM metrics on Snow100K-S dataset",
        "Effective snow pattern localization across diverse weather conditions",
      ],
    },
    {
      title: "Mask-Guided Residual Reconstruction Network (MGRRN) for Image Desnowing",
      description:
        "A mask-guided residual reconstruction approach that uses predicted snow masks as guidance to restore clean, visually appealing images from heavily snow-degraded inputs. Combines residual learning with multi-loss optimization for enhanced restoration quality.",
      status: "In Progress",
      year: "2025",
      highlights: [
        "Snow mask–guided residual reconstruction for image restoration",
        "Multi-loss optimization with L1, SSIM, and perceptual VGG losses",
        "High-quality visual restoration with sharp details and natural colors",
      ],
    },
    {
      title: "Heart Disease Prediction using Ensemble Machine Learning",
      description:
        "An ensemble-based machine learning model combining Random Forest, Logistic Regression, and Decision Trees for accurate heart disease prediction. Features comprehensive feature engineering and evaluation metrics.",
      status: "Conference Submission",
      year: "2025",
      highlights: [
        "Ensemble approach combining multiple ML algorithms",
        "Comprehensive evaluation with accuracy, precision, recall, and F1-score",
        "Real-world healthcare application for early disease detection",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Research & <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-xl font-bold flex-1">{pub.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                          {pub.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{pub.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Key Results & Contributions:
                      </p>
                      <ul className="space-y-1.5">
                        {pub.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
