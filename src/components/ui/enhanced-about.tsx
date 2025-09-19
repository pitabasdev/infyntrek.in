"use client";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award, Globe, Shield, TrendingUp, Clock } from "lucide-react";

export const EnhancedAbout = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            About WaverleyIT
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Since 2018, we've been pioneering enterprise digital transformation, delivering cutting-edge 
            solutions that empower businesses to thrive in the digital era. Our award-winning team of 
            experts combines deep technical expertise with strategic business acumen.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Mission</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To democratize enterprise-grade technology by making advanced IT solutions accessible, 
              scalable, and secure for businesses of all sizes. We bridge the gap between innovation 
              and implementation, ensuring our clients stay ahead of the competition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Vision</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the global leader in intelligent digital transformation, setting new standards 
              for innovation, security, and client success. We envision a future where technology 
              seamlessly enhances human potential and business growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Client-Centric Excellence",
                desc: "Every decision prioritizes client success. We build partnerships, not just solutions.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Security-First Approach",
                desc: "Enterprise-grade security is built into every solution from the ground up.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Innovation Leadership",
                desc: "We stay ahead of technology trends to deliver tomorrow's solutions today.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Award,
                title: "Uncompromising Quality",
                desc: "Award-winning standards drive every project, ensuring exceptional outcomes.",
                color: "from-orange-500 to-red-500"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Trusted by Industry Leaders Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "40+", label: "Countries Served", sublabel: "Global Presence" },
              { icon: Users, number: "10,000+", label: "Projects Completed", sublabel: "Success Stories" },
              { icon: Award, number: "25+", label: "Industry Awards", sublabel: "Recognition" },
              { icon: Clock, number: "6", label: "Years of Excellence", sublabel: "Proven Track Record" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-10 h-10 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Why Industry Leaders Choose WaverleyIT
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Expertise",
                description: "Our team holds 50+ industry certifications and has delivered solutions for Fortune 500 companies.",
                benefits: ["AWS & Azure Certified", "Enterprise Architecture", "Security Compliance"]
              },
              {
                title: "Agile Methodology",
                description: "We deliver projects 40% faster using proven agile methodologies and continuous integration practices.",
                benefits: ["Rapid Deployment", "Continuous Updates", "Risk Mitigation"]
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team ensures 99.99% uptime with proactive monitoring and instant response.",
                benefits: ["Global Support Centers", "Proactive Monitoring", "SLA Guarantees"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20"
              >
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};