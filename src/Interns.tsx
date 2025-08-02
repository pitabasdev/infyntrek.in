"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {motion} from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  Code,
  Database,
  Brain,
  Shield,
  Quote,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react"

const interns = [
  {
    id: 1,
    name: "Sarah Johnson",
    domain: "Web Development",
    description:
      "Built a responsive e-commerce platform using React and Node.js, implementing payment integration and user authentication systems.",
    batch: "Spring 2025",
    image: "/ap1.png",
    icon: Code,
    achievement: "Increased user engagement by 40%",
    projects: 3,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Michael Chen",
    domain: "Data Analytics",
    description:
      "Developed predictive models for customer behavior analysis, creating dashboards that increased conversion rates significantly.",
    batch: "Winter 2024",
    image: "/ag1.png",
    icon: Database,
    achievement: "Boosted conversion rates by 25%",
    projects: 4,
    technologies: ["Python", "SQL", "Tableau"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    domain: "Machine Learning",
    description:
      "Created an AI-powered chatbot for customer support using advanced NLP techniques and deep learning models.",
    batch: "Spring 2025",
    image: "/ass.png",
    icon: Brain,
    achievement: "Reduced response time by 60%",
    projects: 2,
    technologies: ["TensorFlow", "Python", "NLP"],
  },
  {
    id: 4,
    name: "David Kim",
    domain: "Cyber Security",
    description:
      "Implemented comprehensive security protocols and conducted thorough vulnerability assessments across multiple systems.",
    batch: "Fall 2024",
    image: "/a1.jpg",
    icon: Shield,
    achievement: "Enhanced security by 40%",
    projects: 5,
    technologies: ["Kali Linux", "Wireshark", "Metasploit"],
  },
  {
    id: 5,
    name: "Jessica Taylor",
    domain: "Web Development",
    description:
      "Developed a mobile-first progressive web app for inventory management with real-time synchronization capabilities.",
    batch: "Winter 2024",
    image: "/a2.jpg",
    icon: Code,
    achievement: "Improved efficiency by 35%",
    projects: 3,
    technologies: ["Vue.js", "Firebase", "PWA"],
  },
  {
    id: 6,
    name: "Alex Thompson",
    domain: "Data Analytics",
    description:
      "Built comprehensive business intelligence dashboards enabling data-driven decision making across departments.",
    batch: "Spring 2025",
    image: "/aa2.jpg",
    icon: Database,
    achievement: "Streamlined reporting by 50%",
    projects: 4,
    technologies: ["Power BI", "R", "Azure"],
  },
]

const successStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Development Intern",
    batch: "Spring 2025",
    company: "TechCorp Solutions",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:45",
    title: "From Intern to Full-Stack Developer",
    description:
      "Sarah shares her journey from learning React basics to building production applications used by thousands of users.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analytics Intern",
    batch: "Winter 2024",
    company: "DataFlow Inc",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "3:12",
    title: "Transforming Data into Insights",
    description: "Michael discusses how he developed predictive models that increased company conversion rates by 25%.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "ML Engineer Intern",
    batch: "Spring 2025",
    company: "AI Innovations",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "4:08",
    title: "Building AI Solutions That Matter",
    description: "Emily explains how she created an AI chatbot that reduced customer support response time by 60%.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Cyber Security Intern",
    batch: "Fall 2024",
    company: "SecureNet Systems",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "3:33",
    title: "Securing Digital Infrastructure",
    description: "David talks about his experience in penetration testing and how he enhanced system security by 40%.",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Full Stack Developer Intern",
    batch: "Winter 2024",
    company: "WebFlow Dynamics",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:58",
    title: "Creating Seamless User Experiences",
    description:
      "Jessica shares how she built a progressive web app that improved inventory management efficiency by 35%.",
  },
]

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Development Intern",
    batch: "Spring 2025",
    rating: 5,
    review:
      "This internship completely transformed my understanding of web development. The mentorship was world-class, and I got to work on real projects that are now being used by thousands of users.",
    avatar: "/placeholder.svg?height=60&width=60",
    company: "TechCorp Solutions",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analytics Intern",
    batch: "Winter 2024",
    rating: 5,
    review:
      "An absolutely phenomenal experience! I worked with cutting-edge data science tools and got hands-on experience with machine learning algorithms. The team was incredibly supportive.",
    avatar: "/placeholder.svg?height=60&width=60",
    company: "DataFlow Inc",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "ML Engineer Intern",
    batch: "Spring 2025",
    rating: 5,
    review:
      "This internship exceeded every expectation I had. I learned advanced ML techniques, deployed models in production, and worked alongside some of the brightest minds in the industry.",
    avatar: "/placeholder.svg?height=60&width=60",
    company: "AI Innovations",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Cyber Security Intern",
    batch: "Fall 2024",
    rating: 5,
    review:
      "Incredible hands-on experience in cybersecurity! I worked on penetration testing, security audits, and incident response. The knowledge I gained here has been invaluable.",
    avatar: "/placeholder.svg?height=60&width=60",
    company: "SecureNet Systems",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Full Stack Developer Intern",
    batch: "Winter 2024",
    rating: 5,
    review:
      "The perfect blend of learning and practical application. I built full-stack applications from scratch and learned industry best practices. Highly recommend to anyone serious about tech!",
    avatar: "/placeholder.svg?height=60&width=60",
    company: "WebFlow Dynamics",
  },
]

const domainColors = {
  "Web Development": "text-blue-600",
  "Data Analytics": "text-green-600",
  "Machine Learning": "text-purple-600",
  "Cyber Security": "text-red-600",
}

export default function InternPage() {
  const [currentReview, setCurrentReview] = useState(0)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % successStories.length)
    setIsPlaying(false)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + successStories.length) % successStories.length)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen bg-white">
        
      {/* Hero Section */}
      <section className="py-20 px-4 md:py-32">
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
      <div className="px-4 py-10 ">
        <div className="w-full flex flex-col items-center justify-center">
 <Badge variant="outline" className="mb-8 px-4 py-2 text-sm ">
              Internship Program 2024-2025
            </Badge>
        </div>
        
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Empowering the Next Generation of Tech Leaders"
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
          Join our comprehensive internship program and gain hands-on experience in cutting-edge IT solutions. Work alongside industry experts and build the skills that matter
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
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Apply Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
           Learn More
          </button>
        </motion.div>
       
      </div>
    </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "150+", label: "Interns Trained" },
              { icon: Briefcase, value: "95%", label: "Placement Rate" },
              { icon: MapPin, value: "50+", label: "Partner Companies" },
              { icon: Award, value: "4", label: "Specializations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Video Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Play className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Hear From Our Interns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch real stories from our interns as they share their transformative experiences and career
              breakthroughs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Main Video Player */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <video
                    key={successStories[currentVideo].videoUrl}
                    className="w-full h-full object-cover"
                    poster={successStories[currentVideo].thumbnail}
                    muted={isMuted}
                    controls={false}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src={successStories[currentVideo].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={togglePlay}
                      className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-black hover:text-black shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </Button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full p-0 bg-black/50 hover:bg-black/70 text-white border-0"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-600 text-white">{successStories[currentVideo].duration}</Badge>
                        <Badge variant="outline" className="border-white/30 text-white">
                          {successStories[currentVideo].batch}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{successStories[currentVideo].title}</h3>
                      <p className="text-gray-200 mb-2">{successStories[currentVideo].description}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{successStories[currentVideo].name}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-blue-300">{successStories[currentVideo].role}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-300">{successStories[currentVideo].company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="lg"
                onClick={prevVideo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full p-0 bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextVideo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full p-0 bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Video Thumbnails Slider */}
            <div className="mt-8">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {successStories.map((story, index) => (
                  <div
                    key={story.id}
                    onClick={() => {
                      setCurrentVideo(index)
                      setIsPlaying(false)
                    }}
                    className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                      index === currentVideo
                        ? "ring-2 ring-blue-600 ring-offset-2"
                        : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
                    }`}
                  >
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={story.thumbnail || "/placeholder.svg"}
                        alt={story.title}
                        
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge className="text-xs bg-black/70 text-white">{story.duration}</Badge>
                      </div>
                    </div>
                    <div className="mt-2 px-1">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">{story.title}</h4>
                      <p className="text-xs text-gray-600">{story.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVideo(index)
                    setIsPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentVideo ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Hall of Fame
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Star Interns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the exceptional individuals who have made their mark during their internship journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interns.map((intern) => {
              const IconComponent = intern.icon
              return (
                <Card
                  key={intern.id}
                  className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-100">
                          <img
                            src={intern.image || "/placeholder.svg"}
                            alt={intern.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center">
                            <IconComponent
                              className={`w-4 h-4 ${domainColors[intern.domain as keyof typeof domainColors]}`}
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{intern.name}</h3>
                      <Badge variant="secondary" className="mb-4">
                        {intern.domain}
                      </Badge>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{intern.description}</p>

                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="text-xs text-gray-500 mb-1">Key Achievement</div>
                        <div className="text-sm font-medium text-gray-900">{intern.achievement}</div>
                      </div>

                      <div className="flex justify-center gap-6 mb-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{intern.projects}</div>
                          <div className="text-gray-500">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{intern.technologies.length}</div>
                          <div className="text-gray-500">Technologies</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {intern.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {intern.batch}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Interns Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read detailed testimonials from our interns about their transformative experience with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border border-gray-200">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Quote className="w-8 h-8 text-gray-300 mx-auto mb-6" />

                  <div className="mb-6">
                    <img
                      src={reviews[currentReview].avatar || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full mx-auto mb-4 border-2 border-gray-100"
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{reviews[currentReview].name}</h4>
                    <p className="text-blue-600 font-medium mb-1">{reviews[currentReview].role}</p>
                    <p className="text-sm text-gray-500 mb-2">{reviews[currentReview].batch}</p>
                    <Badge variant="outline" className="text-xs">
                      {reviews[currentReview].company}
                    </Badge>
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{reviews[currentReview].review}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 gap-4">
              <Button variant="outline" size="sm" onClick={prevReview} className="w-10 h-10 rounded-full p-0">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReview ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="sm" onClick={nextReview} className="w-10 h-10 rounded-full p-0">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our next cohort and become part of our success story. Applications are now open for Summer 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Download Brochure
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Next Deadline", value: "March 15, 2025" },
                { title: "Program Duration", value: "12 Weeks" },
                { title: "Stipend Range", value:  "₹2K -  ₹15K" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">{item.title}</div>
                  <div className="font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
