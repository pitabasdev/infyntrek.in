"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {motion }from "framer-motion"
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Code,
  Database,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Users2,
  TrendingUp,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router"

const popularCourses = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Complete web development course covering frontend and backend technologies",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    level: "Intermediate",
    price: "₹9,999",
    icon: Code,
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    img:"/web.jpg"
  },
  {
    id: 2,
    title: "Cloud Architecture",
    description: "Master cloud computing with AWS, Azure, and Google Cloud Platform",
    duration: "10 weeks",
    students: 980,
    rating: 4.9,
    level: "Advanced",
    price: "₹11,299",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    img:"/cc4.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Comprehensive security training with hands-on penetration testing",
    duration: "8 weeks",
    students: 750,
    rating: 4.7,
    level: "Intermediate",
    price: "₹11,799",
    icon: Shield,
    skills: ["Ethical Hacking", "Network Security", "CISSP", "CompTIA"],
    img:"/s1.jpg"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Transform data into insights using Python and machine learning",
    duration: "16 weeks",
    students: 890,
    rating: 4.8,
    level: "Advanced",
    price: "₹9,499",
    icon: Database,
    skills: ["Python", "TensorFlow", "SQL", "Tableau"],
    img:"/aa2.jpg"
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications",
    duration: "10 weeks",
    students: 650,
    rating: 4.6,
    level: "Intermediate",
    price: "₹8,999",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    img:"/app4.jpg"
  },
  {
    id: 6,
    title: "DevOps Engineering",
    description: "Master CI/CD, automation, and infrastructure management",
    duration: "12 weeks",
    students: 720,
    rating: 4.7,
    level: "Advanced",
    price: "₹10,099",
    icon: Globe,
    skills: ["Jenkins", "Docker", "Terraform", "Monitoring"],
    img:"/cc2.jpg"
  },
]

const trainingPrograms = [
  {
    title: "Enterprise IT Solutions Bootcamp",
    description:
      "Comprehensive 6-month program covering enterprise-level IT infrastructure, cloud migration, and digital transformation strategies.",
    duration: "6 months",
    format: "Hybrid Learning",
    price: "₹12,999",
    features: [
      "Real-world project portfolio",
      "1-on-1 mentorship sessions",
      "Job placement assistance",
      "Access to enterprise tools",
      "Industry networking events",
      "Capstone project presentation",
    ],
  },
  {
    title: "Leadership in Technology",
    description:
      "Executive-level training for IT leaders focusing on strategic planning, team management, and innovation leadership.",
    duration: "3 months",
    format: "Executive Workshops",
    price: "₹24,999",
    features: [
      "C-level instructor access",
      "Strategic case studies",
      "Peer networking sessions",
      "Innovation lab access",
      "Executive coaching sessions",
      "Leadership assessment tools",
    ],
  },
]

const methodologySteps = [
  {
    step: "01",
    title: "Assess & Plan",
    description: "We evaluate your current skills and create a personalized learning roadmap.",
    icon: Target,
  },
  {
    step: "02",
    title: "Learn & Practice",
    description: "Engage with hands-on projects and real-world scenarios.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Mentor & Support",
    description: "Get guidance from industry experts and collaborate with peers.",
    icon: Users2,
  },
  {
    step: "04",
    title: "Apply & Advance",
    description: "Build your portfolio and receive career support for job placement.",
    icon: TrendingUp,
  },
]

const specialFeatures = [
  {
    title: "Expert Instructors",
    description: "Learn from professionals with years of industry experience at top tech companies.",
    icon: Award,
  },
  {
    title: "Project-Based Learning",
    description: "Build real applications that you can showcase in your professional portfolio.",
    icon: Code,
  },
  {
    title: "Flexible Schedule",
    description: "Choose from live classes, self-paced learning, or hybrid programs.",
    icon: Clock,
  },
  {
    title: "Career Support",
    description: "Resume reviews, interview prep, and job placement assistance included.",
    icon: TrendingUp,
  },
  {
    title: "Updated Curriculum",
    description: "Courses updated regularly to reflect the latest industry trends.",
    icon: Zap,
  },
  {
    title: "Alumni Network",
    description: "Join our community for continued learning and networking opportunities.",
    icon: Heart,
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
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
      <div className="px-4 py-6">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Master Technology Skills"
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
         Transform your career with our comprehensive IT training programs. Learn from industry experts and build skills that employers value.
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
          <button className="w-60 transform rounded-lg bg-blue-700 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800  "
          onClick={() => window.location.href = "#courses"}
                >
            Explore Courses
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        
      </div>
    </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className=" px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our most sought-after courses designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => {
              const IconComponent = course.icon
              return (
                <Card key={course.id} className="hover:shadow-lg transition-shadow border-0 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${course.img || "/default-course.jpg"}`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <Link to={`/contact`} className="text-blue-600 hover:underline">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive programs designed for professionals seeking advanced expertise.
            </p>
          </div>

          <div className="space-y-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{program.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <span className="font-medium block">Duration</span>
                            <span className="text-sm">{program.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <span className="font-medium block">Format</span>
                            <span className="text-sm">{program.format}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Award className="h-5 w-5 mr-2 text-blue-600" />
                          <div>
                            <span className="font-medium block">Investment</span>
                            <span className="text-sm font-bold text-blue-600">{program.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Program Features</h4>
                      <ul className="space-y-3 mb-6">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step approach ensures you master the skills needed for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm inline-block">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Our Courses Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets our training programs apart from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="p-4 bg-blue-100 rounded-lg inline-block mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have advanced their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Register For a Course 
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
