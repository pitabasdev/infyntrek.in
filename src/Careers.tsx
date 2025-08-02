"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {motion} from "framer-motion"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Shield,
  Zap,
  Heart,
  Coffee,
  Laptop,
  GraduationCap,
  Building,
  
} from "lucide-react"
import { Link } from "react-router"

const jobs= [
  {
    id: 1,
    title: "Web Development Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    stipend: "₹1,000 - ₹5,000 / month",
    duration: "3 months",
    experience: "Basic knowledge required",
    description:
      "Contribute to real-world web applications using HTML, CSS, JavaScript, and React. Perfect for students passionate about full-stack or frontend development.",
    requirements: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
    posted: "2 days ago",
    link: "https://internship-application-form.waverleyitlearning.in/",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning Intern",
    department: "Data & Analytics",
    location: "Remote",
    type: "Internship",
    stipend: "₹1,000 - ₹5,000 / month",
    duration: "3 months",
    experience: "Basic Python & ML concepts",
    description:
      "Assist in building ML models, preprocessing data, and evaluating algorithms. Ideal for those interested in hands-on AI experience.",
    requirements: ["Python", "NumPy", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    posted: "3 days ago",
    link: "https://internship-application-form.waverleyitlearning.in/",
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    department: "Data & Analytics",
    location: "Remote",
    type: "Internship",
    stipend: "₹1,000 - ₹5,000 / month",
    duration: "3 months",
    experience: "Fundamentals of data and reporting",
    description:
      "Work on cleaning, analyzing, and visualizing datasets to support key decisions. Exposure to BI tools and SQL queries.",
    requirements: ["Excel", "SQL", "Power BI or Tableau", "Data Cleaning", "Reports"],
    posted: "1 day ago",
    link: "https://internship-application-form.waverleyitlearning.in/",
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    stipend: "₹1,000 - ₹5,000 / month",
    duration: "3 months",
    experience: "Some design project/portfolio preferred",
    description:
      "Work on wireframes, mockups, and usability testing. Collaborate with developers and learn user-centric design processes.",
    requirements: ["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping"],
    posted: "4 days ago",
    link: "https://internship-application-form.waverleyitlearning.in/",
  },
  {
    id: 5,
    title: "Python Developer Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    stipend: "₹1,000 - ₹5,000 / month",
    duration: "3 months",
    experience: "Python basics with OOP",
    description:
      "Develop APIs, automate tasks, and contribute to backend projects using Python frameworks. Ideal for backend enthusiasts.",
    requirements: ["Python", "Flask / Django", "REST APIs", "OOP", "Git"],
    posted: "5 days ago",
    link: "https://internship-application-form.waverleyitlearning.in/",
  }
];


const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness programs",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, unlimited PTO, and remote work options",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Latest Technology",
    description: "Top-tier equipment and access to cutting-edge tools and software",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Learning & Development",
    description: "Annual learning budget, conferences, and professional development opportunities",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive Compensation",
    description: "Market-leading salaries, equity options, and performance bonuses",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Modern Offices",
    description: "Beautiful workspaces in prime locations with all amenities",
  },
]

export default function Career() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  

  const departments = [
    "All",
    "Engineering",
    "Design",
    "Infrastructure",
    "Security",
    "Solutions",
    "Data & Analytics",
    "Product",
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className=" bg-background">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5  ">
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
          {"Join Our Mission to Transform Technology"
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
         We're building the future of IT solutions. Join our team of innovators, problem-solvers, and technology enthusiasts who are passionate about making a difference.
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
            <Link to="#jobs">`
          <button className="w-60 transform rounded-lg bg-blue-700 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 ">
            View Open Positions
          </button>
          </Link>
            <Link to="#aboutus">
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Learn About Us
          </button>
          </Link>
        </motion.div>
        
      </div>
    </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground">
              We believe in creating an environment where innovation thrives, people grow, and technology makes a
              meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-100">
                <Zap className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                We embrace cutting-edge technologies and encourage creative problem-solving.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                Work with talented individuals who support each other's growth and success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Security</h3>
              <p className="text-muted-foreground">
                Join a stable, growing company with excellent benefits and career progression.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible schedules, remote options, and a culture that values personal well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search and Filters */}
      <section className="py-16 bg-muted/30" id="jobs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">Find your next opportunity and join our growing team</p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search jobs by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                    className="whitespace-nowrap"
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.stipend}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <Badge variant="secondary">{job.experience}</Badge>
                        <span className="text-sm text-muted-foreground">{job.posted}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{job.description}</CardDescription>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="outline">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 sm:flex-none bg-blue-700 hover:bg-blue-800"
                      onClick={() => window.open(job.link, "_blank")}>
                      Apply Now</Button>
                      <Button variant="outline" className="flex-1 sm:flex-none"
                      onClick={() => window.open(job.link, "_blank")}
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No jobs found matching your criteria. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24" id="aboutus">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Benefits & Perks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive benefits and perks to ensure our team members can do their best work while
                maintaining a healthy work-life balance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-700">{benefit.icon}</div>
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't see the perfect role? We're always looking for talented individuals to join our team. Send us your
              resume and let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={()=>{
                window.open("support@waverleyIT.in", "_blank")
              }}>
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
