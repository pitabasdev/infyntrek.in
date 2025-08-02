"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Building2, Users, Award, Shield } from "lucide-react"
import { toast } from "sonner"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success("Your message has been sent successfully!", {
      icon: <CheckCircle className="w-5 h-5" />,
      duration: 3000,
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const services = [
    "Cloud Solutions",
    "Cybersecurity",
    "IT Consulting",
    "Software Development",
    "Network Infrastructure",
    "Data Analytics",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge IT solutions? Let's discuss how we can help you achieve
            your technology goals and drive innovation forward.
          </p>
          <div className="flex justify-center mt-8 space-x-8">
            <div className="flex items-center space-x-2 text-blue-200">
              <Users className="w-5 h-5" />
              <span className="text-sm">150+ Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Award className="w-5 h-5" />
              <span className="text-sm">10+ Years</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Shield className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">Contact Information</h3>
              </div>
              <div className="space-y-8">
                <div className=" shadow group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Office Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Marathahalli, Bengaluru, Karnataka , 560037 , India
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" shadow group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Phone Numbers</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Main:{" "}
                        <a href="tel:+919035911837" className="hover:text-green-600 transition-colors">
                          +91 9035911837
                        </a>
                        
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shadow group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Email Addresses</h4>
                      <p className="text-gray-600 leading-relaxed">
                        General:{" "}
                        <a href="mailto:support@waverleyit.in" className="hover:text-purple-600 transition-colors">
                          support@waverleyit.in
                        </a>
                        <br />
                        Sales:{" "}
                        <a href="mailto:support@waverleyit.in" className="hover:text-purple-600 transition-colors">
                          support@waverleyit.in
                        </a>
                        <br />
                        Support:{" "}
                        <a href="mailto:support@waverleyit.in" className="hover:text-purple-600 transition-colors">
                         support@waverleyit.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shadow group hover:bg-white hover:shadow-lg rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Business Hours</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Emergency Support Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Our Services</CardTitle>
                <CardDescription className="text-base">
                  We provide comprehensive IT solutions for businesses of all sizes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {services.slice(0, -1).map((service, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="justify-center py-3 px-4 text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Ltd"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+61 2 1234 5678"
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service of Interest
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        className="w-full h-12 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements or how we can help you..."
                        className="min-h-[140px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center leading-relaxed">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Sydney's technology district, our office is easily accessible by public transport
              and offers convenient parking.
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.731521723006!2d77.692521!3d12.9579976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1750171591202!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Waverley IT Office Location"
                className="rounded-lg"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600"> Marathahalli, Bengaluru, Karnataka , 560037 , India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Parking</p>
                    <p className="text-sm text-gray-600">Free visitor parking available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Transport</p>
                    <p className="text-sm text-gray-600">5 min walk from Central Station</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

    </div>
  )
}
