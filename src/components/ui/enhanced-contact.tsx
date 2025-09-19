"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react";

export const EnhancedContact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Speak directly with our experts",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@waverleyit.com",
      secondary: "support@waverleyit.com",
      description: "Get detailed responses within 2 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Instant responses",
      description: "Chat with our technical team",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      primary: "Book consultation",
      secondary: "Free 30-min session",
      description: "Discuss your project requirements",
      color: "from-orange-500 to-red-500"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Technology Drive, Suite 500",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "New York",
      address: "456 Innovation Avenue, Floor 15",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "London",
      address: "789 Digital Street, Level 8",
      zipcode: "London EC2A 4DP, UK",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9AM-5PM GMT"
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
            Let's Start Your Project
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business? Our expert team is here to discuss your vision and craft the perfect solution for your needs.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {method.title}
              </h3>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {method.primary}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {method.secondary}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                {method.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Send us a message
              </h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Solutions</option>
                  <option>Enterprise Software</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Budget
                </label>
                <select className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                  <option>Let's discuss</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Our Global Offices
              </h3>
            </div>

            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {office.city}
                </h4>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{office.address}</div>
                      <div>{office.zipcode}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Team Availability */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" />
                <h4 className="text-lg font-bold">Expert Team Available</h4>
              </div>
              <p className="text-green-100 mb-4">
                Our technical experts are standing by to discuss your project and provide immediate assistance.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
                <span>15+ experts online now</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 1000+ companies that have transformed their business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};