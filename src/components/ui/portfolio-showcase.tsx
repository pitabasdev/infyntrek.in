"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react";

export const PortfolioShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Global E-Commerce Platform",
      category: "Enterprise Web Development",
      description: "Built a scalable e-commerce platform handling 1M+ daily transactions with microservices architecture.",
      image: "/app1.jpg",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"],
      results: {
        performance: "300% faster load times",
        scale: "1M+ daily users",
        revenue: "$50M+ annual revenue"
      },
      client: "Fortune 500 Retail Chain",
      timeline: "8 months",
      features: ["Real-time inventory", "AI recommendations", "Multi-currency support"],
      link: "#"
    },
    {
      id: 2,
      title: "AI-Powered Healthcare Analytics",
      category: "Machine Learning & AI",
      description: "Developed ML platform for predictive healthcare analytics, improving patient outcomes by 40%.",
      image: "/aa1.jpg",
      technologies: ["Python", "TensorFlow", "Azure ML", "MongoDB", "Docker"],
      results: {
        accuracy: "94% prediction accuracy",
        efficiency: "40% improved outcomes",
        cost: "60% reduced costs"
      },
      client: "Leading Healthcare Provider",
      timeline: "12 months",
      features: ["Predictive analytics", "Real-time monitoring", "HIPAA compliant"],
      link: "#"
    },
    {
      id: 3,
      title: "Smart City IoT Platform",
      category: "IoT & Cloud Solutions",
      description: "Implemented city-wide IoT infrastructure for traffic management and environmental monitoring.",
      image: "/cc1.jpg",
      technologies: ["IoT Core", "AWS Lambda", "React", "PostgreSQL", "MQTT"],
      results: {
        efficiency: "35% traffic improvement",
        sensors: "10,000+ connected devices",
        uptime: "99.9% system availability"
      },
      client: "Metropolitan Government",
      timeline: "18 months",
      features: ["Real-time monitoring", "Predictive maintenance", "Mobile dashboard"],
      link: "#"
    },
    {
      id: 4,
      title: "Financial Trading Platform",
      category: "Fintech & Security",
      description: "High-frequency trading platform processing 100K+ transactions per second with microsecond latency.",
      image: "/web.jpg",
      technologies: ["C++", "Redis", "Kafka", "React", "PostgreSQL"],
      results: {
        speed: "50μs average latency",
        volume: "100K+ TPS",
        reliability: "99.99% uptime"
      },
      client: "Investment Banking Firm",
      timeline: "10 months",
      features: ["Real-time trading", "Risk management", "Regulatory compliance"],
      link: "#"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 py-24">
      {/* Background Effects */}
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
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover how we've helped industry leaders achieve breakthrough results with innovative technology solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-6 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex gap-3">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Results */}
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600 dark:text-slate-300">Client: {project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600 dark:text-slate-300">Timeline: {project.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our portfolio of successful clients and transform your business with innovative technology solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};