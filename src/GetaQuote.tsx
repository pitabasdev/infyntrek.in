"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Shield, Award, Users, Upload, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router"
import { Clients } from "./utils/Clients"
import { Testimonials } from "./components/eldoraui/testimonals"
import { toast } from "sonner"
import FaqPage from "./utils/Faq"
export default function GetaQuote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    timeline: "",
    budget: "",
  })

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Cybersecurity",
    "IT Consulting",
    "Database Management",
    "DevOps Services",
    "UI/UX Design",
    "Digital Marketing",
    "Maintenance & Support",
  ]

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.projectDescription) {
      toast.error("Please fill in all required fields.")
      return
    }
    else{
        toast.success("Your quote request has been submitted successfully!")
        // Here you can handle the form submission, e.g., send data to your server
        console.log("Form Data:", formData)
        console.log("Selected Services:", selectedServices)
        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            projectDescription: "",
            timeline: "",
            budget: "",
        })
        setSelectedServices([])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
     

       <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Transform Your Business with Expert IT Solutions"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Get a custom quote for your next project. From web development to cloud solutions, we deliver cutting-edge technology that drives results.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
            <Link to="#get-a-quote">
          <button className="w-60 transform rounded-lg bg-blue-700 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 ">
            Get a Quote
          </button>
            </Link>
            <Link to="/services">
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            View Services
          </button>
            </Link>
        </motion.div>
      </div>
    </div>
    <Clients />

      {/* Why Choose Us Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Leading Companies Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but
              also drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full border border-blue-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level security protocols, compliance with GDPR, HIPAA, and SOC 2. Your data is protected with
                  military-grade encryption.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 h-full border border-green-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  500+ successful projects, 98% client retention rate, and recognition from industry leaders. Results
                  speak louder than words.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 h-full border border-purple-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified professionals with expertise in latest technologies. Continuous training ensures we stay
                  ahead of the curve.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 h-full border border-orange-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agile Methodology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Iterative development process with regular updates and feedback loops. Deliver working software faster
                  and more efficiently.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 h-full border border-cyan-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock monitoring and support. Our dedicated team ensures your systems run smoothly at all
                  times.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 h-full border border-yellow-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Future-proof architecture that grows with your business. From startup to enterprise, our solutions
                  scale seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h3>
              <p className="text-lg text-gray-600">
                From concept to deployment, we follow a structured approach that ensures success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Discovery</h4>
                <p className="text-gray-600 text-sm">
                  We analyze your requirements and create a detailed project roadmap
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Design</h4>
                <p className="text-gray-600 text-sm">Create wireframes, prototypes, and technical architecture</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Development</h4>
                <p className="text-gray-600 text-sm">Agile development with regular updates and quality assurance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Launch</h4>
                <p className="text-gray-600 text-sm">Deployment, testing, and ongoing support & maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="get-a-quote">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card id="quote-form" className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Get Your Custom Quote</CardTitle>
                <CardDescription className="text-blue-100">
                  Tell us about your project and we'll provide a detailed proposal within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Services Needed *</h3>
                    <p className="text-sm text-gray-600">Select all services that apply to your project</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                          />
                          <Label htmlFor={service} className="text-sm font-medium">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {selectedServices.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedServices.map((service) => (
                          <Badge key={service} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Project Timeline *</Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap">ASAP (Rush job)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-2months" id="1-2months" />
                          <Label htmlFor="1-2months">1-2 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-6months" id="3-6months" />
                          <Label htmlFor="3-6months">3-6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6months+" id="6months+" />
                          <Label htmlFor="6months+">6+ months</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-3">
                    <Label>Additional Documents</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Drop files here or <span className="text-blue-600 font-medium">browse</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Upload any relevant documents, wireframes, or requirements (Max 10MB)
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    disabled={selectedServices.length === 0}
                  >
                    Get My Custom Quote
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Why Choose TechSolutions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">24-Hour Response</p>
                    <p className="text-xs text-gray-600">Quick turnaround on all quotes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Secure & Reliable</p>
                    <p className="text-xs text-gray-600">Enterprise-grade security standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Award-Winning Team</p>
                    <p className="text-xs text-gray-600">Certified professionals with 10+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">150+ Happy Clients</p>
                    <p className="text-xs text-gray-600">Trusted by startups to Fortune 500</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">+91 9035911837</p>
                    <p className="text-xs text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">support@waverleyIT.in</p>
                    <p className="text-xs text-gray-600">We respond within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Marathahalli, Bengaluru, Karnataka</p>
                    <p className="text-xs text-gray-600">Serving clients worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  "TechSolutions delivered our project on time and exceeded our expectations. Their team is professional
                  and highly skilled."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-gray-600">CEO, StartupCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<Testimonials />
      </div>
       <div className="max-w-7xl mx-auto  ">
        <FaqPage />
      </div>
      
      

          {/* Company Logos */}
          
        

      
      
    </div>
  )
}
