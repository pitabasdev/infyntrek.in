import { Timeline } from "@/components/ui/timeline"

export default function Services() {
  const data = [
    {
      title: "Web Development Solutions",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
            Cutting-edge web applications built with modern frameworks and technologies. From responsive websites to
            complex web platforms, we deliver scalable solutions that drive business growth.
          </p>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Frontend Development</h4>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">React, Next.js, Vue.js, TypeScript</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🔧</span>
                </div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Backend Development</h4>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">UI/UX Design</h4>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300">Figma, Adobe XD, Responsive Design</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Performance Optimization</h4>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-300">SEO, Core Web Vitals, Speed Optimization</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/w1.jpg"
              alt="Modern web application interface"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
             src="/w2.jpg"
              alt="Responsive web design showcase"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
             src="/w3.jpg"
              alt="E-commerce platform development"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/w4.jpg"
              alt="Progressive web app development"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI & Machine Learning Innovation",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
            Harness the power of artificial intelligence to transform your business operations. From predictive
            analytics to intelligent automation, we build AI solutions that deliver measurable results.
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🧠</span>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">Machine Learning Models</h4>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  Custom ML algorithms for classification, regression, and clustering
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-xl border border-violet-200 dark:border-violet-800">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">💬</span>
              </div>
              <div>
                <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-1">Natural Language Processing</h4>
                <p className="text-sm text-violet-700 dark:text-violet-300">
                  Chatbots, sentiment analysis, and text processing solutions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">👁️</span>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">Computer Vision</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                  Image recognition, object detection, and visual analytics
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/aa1.jpg"
              alt="AI dashboard and analytics"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/aa2.jpg"
              alt="Machine learning model training"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/aa3.jpg"
              alt="AI chatbot interface"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/aa4.jpg"
              alt="Computer vision application"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Digital Marketing Strategies",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
            Data-driven digital marketing campaigns that amplify your brand presence and drive conversions. From SEO to
            social media marketing, we create strategies that deliver ROI.
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/30 dark:to-rose-950/30 rounded-xl border border-pink-200 dark:border-pink-800">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">SEO & SEM</h4>
                <p className="text-sm text-pink-700 dark:text-pink-300">Search engine optimization and marketing</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Social Media</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Multi-platform social media management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📧</span>
                </div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Email Marketing</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Automated email campaigns and nurturing</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/d1.jpg"
              alt="Digital marketing analytics dashboard"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/d2.jpg"
              alt="Social media campaign management"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/d3.jpg"
              alt="SEO optimization tools"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/d4.jpg"
              alt="Email marketing automation"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
            Native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to
            Android, we build apps that engage users and drive business success.
          </p>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-950/30 dark:to-gray-950/30 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Native Development</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">iOS (Swift) & Android (Kotlin)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Cross-Platform</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">React Native & Flutter</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl border border-teal-200 dark:border-teal-800">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🔗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100">API Integration</h4>
                  <p className="text-sm text-teal-600 dark:text-teal-400">RESTful & GraphQL APIs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🛡️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100">App Security</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Encryption & Authentication</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/app1.jpg"
              alt="Mobile app user interface design"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/app2.jpg"
              alt="Cross-platform app development"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/app3.jpg"
              alt="Mobile app testing and deployment"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/app4.jpg"
              alt="App store optimization"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Cloud Solutions",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
            Scalable cloud infrastructure and services that grow with your business. From migration to optimization, we
            ensure your cloud environment is secure, efficient, and cost-effective.
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-950/30 dark:to-blue-950/30 rounded-xl border border-sky-200 dark:border-sky-800">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">☁️</span>
                </div>
                <h4 className="font-semibold text-sky-900 dark:text-sky-100 text-sm mb-1">AWS Services</h4>
                <p className="text-xs text-sky-700 dark:text-sky-300">EC2, S3, Lambda, RDS</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🔷</span>
                </div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">Azure Cloud</h4>
                <p className="text-xs text-blue-700 dark:text-blue-300">VMs, Storage, Functions</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border border-red-200 dark:border-red-800">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🔥</span>
                </div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 text-sm mb-1">Google Cloud</h4>
                <p className="text-xs text-red-700 dark:text-red-300">Compute, Storage, AI/ML</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-800">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🚀</span>
                </div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-1">DevOps</h4>
                <p className="text-xs text-green-700 dark:text-green-300">CI/CD, Docker, Kubernetes</p>
              </div>
            </div>
          </div>
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Cloud Migration & Architecture Design</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Auto-scaling & Load Balancing</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">Security & Compliance Management</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <span className="text-neutral-700 dark:text-neutral-300">24/7 Monitoring & Support</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cc1.jpg"
              alt="Cloud infrastructure dashboard"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/cc2.jpg"
              alt="DevOps pipeline visualization"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/cc3.jpg"
              alt="Cloud security monitoring"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
            <img
              src="/cc4.jpg"
              alt="Multi-cloud management platform"
              width={400}
              height={300}
              className="h-20 w-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="relative w-full overflow-clip bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Timeline data={data} />
    </div>
  )
}
