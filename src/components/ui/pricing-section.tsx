"use client";
import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Crown } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Startup",
      icon: Zap,
      price: "$2,999",
      period: "project",
      description: "Perfect for emerging businesses ready to scale",
      features: [
        "Custom Web Application",
        "Responsive Mobile Design", 
        "Basic SEO Optimization",
        "3 Months Free Support",
        "Cloud Hosting Setup",
        "SSL Certificate",
        "Analytics Dashboard",
        "Email Integration"
      ],
      popular: false,
      cta: "Get Started",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional", 
      icon: Star,
      price: "$9,999",
      period: "project",
      description: "Comprehensive solutions for growing enterprises",
      features: [
        "Everything in Startup",
        "Advanced Web Platform",
        "API Development & Integration",
        "Database Architecture",
        "6 Months Premium Support",
        "Advanced Security Features",
        "Performance Optimization",
        "Multi-language Support",
        "Advanced Analytics",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "User Management System"
      ],
      popular: true,
      cta: "Most Popular",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "solution",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Everything in Professional",
        "Custom Enterprise Software",
        "AI/ML Integration",
        "Microservices Architecture",
        "24/7 Dedicated Support",
        "Enterprise Security Suite",
        "Scalable Cloud Infrastructure",
        "DevOps & CI/CD Pipeline",
        "Data Analytics Platform",
        "Third-party Integrations",
        "Custom Training Program",
        "SLA Guarantees",
        "Dedicated Project Manager",
        "White-label Solutions"
      ],
      popular: false,
      cta: "Contact Sales",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const addOns = [
    {
      name: "AI Integration",
      price: "$5,000",
      description: "Machine learning models and AI-powered features"
    },
    {
      name: "Mobile App Development",
      price: "$8,000", 
      description: "Native iOS and Android applications"
    },
    {
      name: "Advanced Security Audit",
      price: "$3,000",
      description: "Comprehensive security assessment and hardening"
    },
    {
      name: "Performance Optimization",
      price: "$2,500",
      description: "Speed optimization and performance tuning"
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
            Investment Plans
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan to accelerate your digital transformation. All plans include our commitment to excellence and measurable results.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'scale-105 lg:scale-110' : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${plan.gradient} text-white text-center py-3 font-semibold`}>
                  Most Popular Choice
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:scale-105`
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {addon.price}
                </div>
                <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {addon.name}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {addon.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-12 text-white">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Every business is unique. Our enterprise solutions are tailored to your specific requirements, ensuring perfect alignment with your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};