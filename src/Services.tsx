import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Brain,
  TrendingUp,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Shield,
  Clock,
  DollarSign,
  Headphones,
} from "lucide-react"
import Service from "./utils/Services";
import { Testimonials } from "./components/eldoraui/testimonals"
import FaqPage from "./utils/Faq"
import { toast } from "sonner"
import { useState } from "react"
export default function ServicesPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedService, setSelectedService] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()
    if (!firstName || !lastName || !email  || !message|| !selectedService || !companyName) {
      toast.error("Please fill in all fields.")
      return;
    }
    toast.success("Thank you for contacting us! We will get back to you soon.")
    setFirstName("")
    setLastName("")
    setEmail("")
   
    setMessage("")

    }
  const services = [
    {
      icon: Code,
      title: "Web Development Solutions",
      description:
        "Custom web applications built with cutting-edge technologies for optimal performance and user experience",
      features: [
        "Responsive Web Design & Development",
        "E-commerce Platforms & Online Stores",
        "Progressive Web Apps (PWAs)",
        "API Development & Third-party Integration",
        "Performance Optimization & SEO",
        "Content Management Systems",
        "Web Application Security",
        "Maintenance & Support Services",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
      price: "Starting from $2,999",
      timeline: "4-12 weeks",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Innovation",
      description: "Intelligent solutions that transform your business operations with advanced AI capabilities",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Recommendation Systems",
        "Automated Decision Making",
        "Chatbots & Virtual Assistants",
        "Data Mining & Pattern Recognition",
        "AI Model Training & Deployment",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Pandas", "Docker", "Kubernetes"],
      price: "Starting from $5,999",
      timeline: "6-16 weeks",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategies",
      description: "Data-driven marketing solutions to boost your online presence and drive measurable results",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing & Management",
        "Content Strategy & Creation",
        "Email Marketing Campaigns",
        "Analytics & Performance Reporting",
        "Conversion Rate Optimization",
        "Brand Strategy & Development",
      ],
      technologies: ["Google Analytics", "Facebook Ads", "Google Ads", "HubSpot", "Mailchimp", "SEMrush", "Hootsuite"],
      price: "Starting from $1,999/month",
      timeline: "Ongoing",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences",
      features: [
        "iOS & Android Native Development",
        "Cross-platform Solutions (React Native/Flutter)",
        "UI/UX Design & Prototyping",
        "App Store Optimization (ASO)",
        "Push Notifications & Analytics",
        "Backend API Development",
        "App Testing & Quality Assurance",
        "Maintenance & Updates",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB", "Node.js", "AWS"],
      price: "Starting from $8,999",
      timeline: "8-20 weeks",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices for modern business operations",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code (IaC)",
        "DevOps & CI/CD Pipelines",
        "Container Orchestration",
        "Security & Compliance",
        "Cost Optimization",
        "Monitoring & Logging",
        "Disaster Recovery Planning",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      price: "Starting from $3,999",
      timeline: "6-14 weeks",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Identity & Access Management",
        "Data Encryption & Protection",
        "Compliance Management",
        "Incident Response Planning",
        "Security Training & Awareness",
        "24/7 Security Monitoring",
      ],
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Splunk", "CrowdStrike", "Okta", "Azure AD"],
      price: "Starting from $4,999",
      timeline: "4-10 weeks",
    },
  ]

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/w3.jpg",
      description: "Modern e-commerce solution with AI-powered recommendations",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Healthcare AI Assistant",
      category: "AI & ML",
      image: "/aa3.jpg",
      description: "AI-powered diagnostic assistant for healthcare professionals",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "/app2.jpg",
      description: "Cross-platform fitness app with social features",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      image: "/cc2.jpg",
      description: "Scalable microservices architecture on AWS",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
  ]

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
    
  <div className="max-w-7xl mx-auto mt-20">
    <Service />
  </div>
      

     

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Technology Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end technology solutions tailored to meet your unique business needs and drive digital
              transformation across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {service.price}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 relative">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features & Capabilities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.location.href = "#scontact" }
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent successful projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
       <Testimonials />
      </section>

      <section className=" py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50" >
        <FaqPage />
      </section>

      {/* Contact Section */}
      <section id="scontact" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Start Your Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take your business to the next level? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                    value={firstName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                    value={lastName}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  value={email} />
                  
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input placeholder="Your Company" onChange={(e)=>{
                    setCompanyName(e.target.value)
                  }}
                  value={companyName} />
                
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    onChange={(e) => {
                      setSelectedService(e.target.value)
                    }}
                    value={selectedService}
                    >
                    <option value={""}>Select a service</option>
                    <option value={"Web Developement"}>Web Development</option>
                    <option value={"AI & Machine Learning"}>AI & Machine Learning</option>
                    <option value={"Digital Marketing"}>Digital Marketing</option>
                    <option value={"Mobile App Development"}>Mobile App Development</option>
                    <option value={"Cloud Solutions"}>Cloud Solutions</option>
                    <option value={"Cybersecurity"}>Cybersecurity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} onChange={(e)=>{
                    setMessage(e.target.value)
                  }} 
                  value={message}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleSubmit}
                        >
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 8260816109</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">support@waverleyIT.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">Marathahalli, Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Support</h3>
                      <p className="text-gray-600">24/7 Customer Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      


    </div>
  )
}
