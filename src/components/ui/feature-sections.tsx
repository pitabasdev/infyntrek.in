"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  title,
  description,
  icon,
  gradient,
  features,
  images,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: Array<{ title: string; description: string; icon: string }>;
  images: string[];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br",
        gradient
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-white/80 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{feature.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`${title} showcase ${idx + 1}`}
                className="w-full h-32 md:h-48 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ModernFeatureSections = () => {
  const features = [
    {
      title: "Web Development Solutions",
      description: "Cutting-edge web applications built with modern frameworks and technologies. From responsive websites to complex web platforms, we deliver scalable solutions that drive business growth.",
      icon: "⚡",
      gradient: "from-blue-600 to-indigo-700",
      features: [
        { title: "Frontend Development", description: "React, Next.js, Vue.js, TypeScript", icon: "🎨" },
        { title: "Backend Development", description: "Node.js, Python, PostgreSQL, MongoDB", icon: "🔧" },
        { title: "UI/UX Design", description: "Figma, Adobe XD, Responsive Design", icon: "🎭" },
        { title: "Performance Optimization", description: "SEO, Core Web Vitals, Speed Optimization", icon: "🚀" },
      ],
      images: ["/w1.jpg", "/w2.jpg", "/w3.jpg", "/w4.jpg"],
    },
    {
      title: "AI & Machine Learning Innovation",
      description: "Harness the power of artificial intelligence to transform your business operations. From predictive analytics to intelligent automation, we build AI solutions that deliver measurable results.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-700",
      features: [
        { title: "Machine Learning Models", description: "Custom ML algorithms for classification, regression", icon: "🤖" },
        { title: "Natural Language Processing", description: "Chatbots, sentiment analysis, text processing", icon: "💬" },
        { title: "Computer Vision", description: "Image recognition, object detection, analytics", icon: "👁️" },
        { title: "Predictive Analytics", description: "Data insights and forecasting solutions", icon: "📊" },
      ],
      images: ["/aa1.jpg", "/aa2.jpg", "/aa3.jpg", "/aa4.jpg"],
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and services that grow with your business. From migration to optimization, we ensure your cloud environment is secure, efficient, and cost-effective.",
      icon: "☁️",
      gradient: "from-green-600 to-teal-700",
      features: [
        { title: "AWS Services", description: "EC2, S3, Lambda, RDS deployment", icon: "☁️" },
        { title: "Azure Cloud", description: "VMs, Storage, Functions integration", icon: "🔷" },
        { title: "Google Cloud", description: "Compute, Storage, AI/ML services", icon: "🔥" },
        { title: "DevOps Automation", description: "CI/CD, Docker, Kubernetes orchestration", icon: "🚀" },
      ],
      images: ["/cc1.jpg", "/cc2.jpg", "/cc3.jpg", "/cc4.jpg"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive growth in the digital era.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};