"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Zap, Award, Play, Star, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, success: 0, clients: 0 })

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 20)
    }

    setTimeout(() => {
      animateCounter(500, "projects")
      animateCounter(98, "success")
      animateCounter(150, "clients")
    }, 500)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse hidden lg:block" />
        <div
          className="absolute bottom-40 left-10 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-bounce hidden lg:block"
          style={{ animationDelay: "1s" }}
        />

        {/* Header with Enhanced Animation */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge
            variant="outline"
            className="mb-6 px-6 py-3 text-sm font-medium  backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 bg-blue-100"
          >
            <Star className="w-4 h-4 mr-2 text-blue-800" />
            About Our Company
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            We build solutions that{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                transform businesses
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light ">
            Our mission is to empower organizations with innovative technology solutions that drive growth, efficiency,
            and sustainable success in the digital age.
          </p>
        </div>

        {/* Enhanced Main Content Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Left Content with Enhanced Styling */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Pioneering innovation since 2018
              </h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  We started with a simple belief: technology should solve real problems and create meaningful impact.
                  Today, we partner with forward-thinking organizations to deliver cutting-edge solutions that drive
                  measurable results.
                </p>
                <p className="text-muted-foreground">
                  Our team of experts combines deep technical expertise with strategic thinking to help businesses
                  navigate digital transformation and achieve their most ambitious goals.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-blue-700"
                >
                  <span className="relative z-10 flex items-center ">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Right Image Section */}
          <div className="relative" id="team">
            <div className="relative group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted to-muted/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                <img
                  src="/a1.jpg"
                  alt="Our team collaborating on innovative solutions"

                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

              </div>
            </div>

            {/* Enhanced Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {counters.projects}+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Projects</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-border to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {counters.success}%
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-border to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {counters.clients}+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: Users,
              title: "Client-Centric",
              desc: "Your success is our priority. We build lasting partnerships through trust and results.",
              delay: "0s",
            },
            {
              icon: Target,
              title: "Goal-Oriented",
              desc: "Every solution is designed with clear objectives and measurable outcomes in mind.",
              delay: "0.1s",
            },
            {
              icon: Zap,
              title: "Innovation-Driven",
              desc: "We leverage cutting-edge technologies to create solutions that set you apart.",
              delay: "0.2s",
            },
            {
              icon: Award,
              title: "Excellence",
              desc: "Quality is non-negotiable. We deliver solutions that exceed expectations.",
              delay: "0.3s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center space-y-6 p-6 rounded-2xl hover:bg-muted/30 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: item.delay }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 group-hover:rotate-6 bg-blue-100">
                  <item.icon className="h-10 w-10  group-hover:scale-110 transition-transform duration-300 text-blue-800" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Team Section */}
        <div
          className={`text-center space-y-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-6">
            <Badge variant="outline" className="px-6 py-3  backdrop-blur-sm border-primary/20 bg-blue-100">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-800" />
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Meet the minds behind the magic
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of strategists, designers, and developers work together to bring your vision to life.
            </p>
          </div>

          {/* Enhanced Team Grid */}
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto ">
            {[
              {
                name: "Bijaya Kumar Gouda",
                role: "Director",
                // desc: "Visionary leader with 15+ years in tech innovation",
                img: "/bg.png"
              },
              {
                name: "Abinash Gouda",
                role: "Managing Director",
                // desc: "Visionary leader with 3+ years in tech innovation",
                img: "/ag1.png"
              },
              {
                name: "Rahul Kumar Sahu",
                role: "Software Developer",
                // desc: "Technical architect driving our innovation forward",
                img: "/rks.png"
              },
              {
                name: "Saroj Senapati",
                role: "Software Developer",
                // desc: "Creative force behind our user-centered solutions",
                img: "/ss.png"
              },
              {
                name: "Dipanshu Kumar Sahu",
                role: "HR Manager",
                // desc: "Visionary leader with 3+ years in tech innovation",
                img: "/Dipanshu Kumar Sahu (HR).png"
              },
              {
                name: "Alok Pradhan",
                role: "Assosiate Trainer",
                // desc: "Visionary leader with 2+ years in tech innovation",
                img: "/Alok Pradhan (Trainner).png"
              }
            ].map((member, index) => (
              <div key={index} className="group space-y-6">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted to-muted/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                    <img
                      src={`${member.img}`}
                      alt={`${member.name}, ${member.role}`}

                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 bg-blue-800">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">{member.role}</p>
             
                </div>
              </div>
            ))}
          </div>




        </div>
      </div>
    </section>
  )
}
