
import { CheckCircle, GraduationCap, Settings, TestTube, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FeatureFourImages } from "./utils/FeatureTour"
import FaqPage from "./utils/Faq"
import { Testimonials } from "./components/eldoraui/testimonals"
export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "CRM Solution",
      description: "Streamline your customer relationships with our comprehensive CRM platform",
      icon: Users,
      features: [
        "Contact Management",
        "Sales Pipeline Tracking",
        "Email Integration",
        "Analytics & Reporting",
        "Mobile App Access",
        "Third-party Integrations",
      ],
      benefits: "Increase sales by 35% and improve customer satisfaction",
      pricing: "Starting at $29/month",
      category: "Sales & Marketing",
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Empower your team with our advanced e-learning platform",
      icon: GraduationCap,
      features: [
        "Course Creation Tools",
        "Progress Tracking",
        "Interactive Assessments",
        "Certification Management",
        "Video Conferencing",
        "Mobile Learning",
      ],
      benefits: "Reduce training costs by 60% and improve knowledge retention",
      pricing: "Starting at $15/user/month",
      category: "Education & Training",
    },
    {
      id: 3,
      title: "Test Automation App",
      description: "Accelerate your software testing with intelligent automation",
      icon: TestTube,
      features: [
        "Automated Test Scripts",
        "Cross-browser Testing",
        "API Testing",
        "Performance Monitoring",
        "CI/CD Integration",
        "Detailed Reporting",
      ],
      benefits: "Reduce testing time by 70% and catch bugs earlier",
      pricing: "Starting at $99/month",
      category: "Development & QA",
    },
    {
      id: 4,
      title: "ERP System",
      description: "Integrate all your business processes with our enterprise solution",
      icon: Settings,
      features: [
        "Financial Management",
        "Inventory Control",
        "Human Resources",
        "Supply Chain Management",
        "Business Intelligence",
        "Multi-location Support",
      ],
      benefits: "Improve operational efficiency by 45% and reduce costs",
      pricing: "Custom pricing available",
      category: "Enterprise Management",
    },
  ]

  return (
    <div className="min-h-screen bg-background max-w-7xl mx-auto">
      {/* Hero Section */}
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
          {"Transform Your Business with Smart Digital Solutions"
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
          Discover our comprehensive suite of digital tools designed to streamline operations, boost productivity, and drive growth for businesses of all sizes.
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
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          onClick={() => window.location.href = "#solutions"}
                >
            Explore Solutions
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
        
      </div>
    </div>

      {/* Products Grid */}
      <section className="" id="solutions">
        <div className="container px-4 md:px-6">
          

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-primary mb-1">Business Impact</p>
                      <p className="text-sm text-muted-foreground">{product.benefits}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold">{product.pricing}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm"  onClick={() => window.location.href = `/services/#scontact`}>
                          Learn More
                        </Button>
                        <Button size="sm"
                        onClick={() => window.location.href = `/services#scontact`}>
                        Get Started</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-32 bg-muted/50">
<FeatureFourImages />
      </section>

      
<section>
    <Testimonials />
</section>
<section>
    <FaqPage />
</section>
      

      {/* 
        Additional sections can be added here:
        
        - Customer Success Stories / Case Studies
        - Integration Partners
        - Security & Compliance Details
        - Pricing Comparison Table
        - Resource Center (Documentation, Tutorials)
        - Industry-Specific Solutions
        - Implementation Timeline
        - ROI Calculator
      */}
    </div>
  )
}
