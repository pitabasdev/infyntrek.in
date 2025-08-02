"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react"

export default function ConsultationBanner() {
  const handleScheduleCall = () => {
    // Replace with your scheduling link (e.g., Calendly)
    window.open("https://calendly.com/your-company", "_blank")
  }

  const handleContactUs = () => {
    // Replace with your contact method
    window.location.href = "mailto:support@waverleyIT.in"
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+919035911837"
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Floating Elements - Only show on larger screens */}
        <div className="hidden lg:block absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="hidden lg:block absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="relative p-6 lg:p-16">
          {/* Mobile-first layout - stack everything vertically on mobile */}
          <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <span className="text-white/90 text-sm font-medium">🚀 Transform Your Business Today</span>
              </div>

              <h2 className="text-3xl font-bold text-white leading-tight mb-4 lg:text-5xl">
                Ready to Elevate Your
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                  IT Infrastructure?
                </span>
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                Join 150+ businesses that trust us with their IT transformation. Get expert consultation and discover
                solutions tailored for your success.
              </p>

              {/* Feature badges - stack on mobile */}
              <div className="space-y-3 mb-6 lg:hidden">
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Calendar className="h-5 w-5 text-yellow-300" />
                  <span className="text-white text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="h-5 w-5 text-green-300" />
                  <span className="text-white text-sm font-medium">Quick Response</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MessageSquare className="h-5 w-5 text-blue-300" />
                  <span className="text-white text-sm font-medium">Expert Advice</span>
                </div>
              </div>

              {/* Feature badges - grid on desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-4 max-w-lg">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Calendar className="h-5 w-5 text-yellow-300" />
                  <span className="text-white text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <Clock className="h-5 w-5 text-green-300" />
                  <span className="text-white text-sm font-medium">Quick Response</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <MessageSquare className="h-5 w-5 text-blue-300" />
                  <span className="text-white text-sm font-medium">Expert Advice</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Started Now</h3>

                <div className="space-y-4">
                  <Button
                    onClick={handleScheduleCall}
                    className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[56px]"
                  >
                    <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="flex-1 text-center">Schedule Now</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>

                  {/* Contact buttons - stack on mobile */}
                  <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
                    <Button
                      onClick={handlePhoneCall}
                      variant="outline"
                      className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 font-medium py-3 rounded-xl backdrop-blur-sm min-h-[48px]"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button
                      onClick={handleContactUs}
                      variant="outline"
                      className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 font-medium py-3 rounded-xl backdrop-blur-sm min-h-[48px]"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm text-center">
                    ⚡ Average response time: <span className="font-semibold text-yellow-300">2 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}