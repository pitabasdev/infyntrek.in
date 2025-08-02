"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Star,
  Video,
  Coffee,
  Presentation,
  CheckCircle,
  Award,
} from "lucide-react"
import { toast } from "sonner"

export default function EventsPage() {
  // Featured single event
  const featuredEvent = {
    id: 1,
    title: "Cloud Migration Strategies for Enterprise",
    image: "/cc4.jpg",
    date: "March 25, 2024",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hours",
    location: "Virtual Event",
    category: "Cloud Computing",
    description:
      "Join us for an intensive workshop on enterprise cloud migration strategies. Learn the best practices for migrating enterprise applications to the cloud with minimal downtime and maximum efficiency. This comprehensive session will cover assessment methodologies, migration patterns, cost optimization, and risk mitigation strategies.",
    fullDescription: [
      "Comprehensive assessment of your current infrastructure and applications",
      "Step-by-step migration planning and execution strategies",
      "Cost optimization techniques for cloud resources",
      "Security considerations and compliance requirements",
      "Real-world case studies and lessons learned",
      "Q&A session with industry experts",
    ],
    speaker: {
      name: "Dr. Sarah Chen",
      designation: "Cloud Solutions Architect",
      company: "TechCorp Solutions",
      avatar: "/a1.jpg",
      rating: 4.9,
      experience: "15+ years",
      bio: "Dr. Sarah Chen is a renowned cloud solutions architect with over 15 years of experience in enterprise cloud transformations. She has led migration projects for Fortune 500 companies and is a frequent speaker at technology conferences worldwide.",
    },
    attendees: 245,
    maxAttendees: 500,
    price: "Free",
    originalPrice: "$299",
    features: [
      "Live interactive workshop",
      "Downloadable resources and templates",
      "Certificate of completion",
      "30-day access to recorded session",
      "Direct access to speaker for Q&A",
    ],
    agenda: [
      { time: "10:00 AM", topic: "Welcome & Introduction", duration: "15 min" },
      { time: "10:15 AM", topic: "Cloud Migration Assessment", duration: "30 min" },
      { time: "10:45 AM", topic: "Migration Strategies & Patterns", duration: "45 min" },
      { time: "11:30 AM", topic: "Cost Optimization Techniques", duration: "20 min" },
      { time: "11:50 AM", topic: "Q&A Session", duration: "10 min" },
    ],
    tags: ["Cloud Computing", "Enterprise", "Migration", "AWS", "Azure", "Best Practices"],
  }

  // Meeting calendar data (unchanged)
  const calendarEvents = [
    {
      id: 1,
      title: "Cloud Migration Workshop",
      time: "10:00 AM",
      duration: "2h",
      type: "workshop",
      attendees: 245,
      location: "Virtual",
      day: "Monday",
      date: "25",
    },
    {
      id: 2,
      title: "Team Standup",
      time: "11:30 AM",
      duration: "30m",
      type: "meeting",
      attendees: 12,
      location: "Conference Room A",
      day: "Monday",
      date: "25",
    },
    {
      id: 3,
      title: "AI Business Operations",
      time: "2:00 PM",
      duration: "2.5h",
      type: "seminar",
      attendees: 180,
      location: "Tech Hub",
      day: "Thursday",
      date: "28",
    },
    {
      id: 4,
      title: "Coffee Break & Networking",
      time: "3:30 PM",
      duration: "30m",
      type: "break",
      attendees: 50,
      location: "Lobby",
      day: "Thursday",
      date: "28",
    },
    {
      id: 5,
      title: "Cybersecurity Masterclass",
      time: "9:00 AM",
      duration: "8h",
      type: "workshop",
      attendees: 120,
      location: "Security Center",
      day: "Tuesday",
      date: "2",
    },
    {
      id: 6,
      title: "Lunch & Learn Session",
      time: "12:00 PM",
      duration: "1h",
      type: "presentation",
      attendees: 85,
      location: "Main Hall",
      day: "Tuesday",
      date: "2",
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const weekDays = [
    { name: "Monday", date: "25", events: calendarEvents.filter((e) => e.day === "Monday") },
    { name: "Tuesday", date: "2", events: calendarEvents.filter((e) => e.day === "Tuesday") },
    { name: "Wednesday", date: "3", events: [] },
    { name: "Thursday", date: "28", events: calendarEvents.filter((e) => e.day === "Thursday") },
    { name: "Friday", date: "5", events: [] },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "workshop":
        return <Presentation className="h-4 w-4" />
      case "meeting":
        return <Users className="h-4 w-4" />
      case "seminar":
        return <Video className="h-4 w-4" />
      case "break":
        return <Coffee className="h-4 w-4" />
      case "presentation":
        return <Star className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "meeting":
        return "bg-green-100 border-green-300 text-green-800"
      case "seminar":
        return "bg-purple-100 border-purple-300 text-purple-800"
      case "break":
        return "bg-orange-100 border-orange-300 text-orange-800"
      case "presentation":
        return "bg-pink-100 border-pink-300 text-pink-800"
      default:
        return "bg-gray-100 border-gray-300 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              IT Solutions Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join industry experts and thought leaders in cutting-edge technology discussions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>1000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Expert Speakers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm mb-4">
              Featured Event
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't Miss This Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our most popular event and learn from industry-leading experts
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              {/* Event Image */}
              <div className="relative ">
                <img
                  src={featuredEvent.image || "/placeholder.svg"}
                  alt={featuredEvent.title}
                  className="object-cover h-86 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-white/90 text-gray-800 mb-3">{featuredEvent.category}</Badge>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{featuredEvent.title}</h1>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 p-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Event Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>
                        {featuredEvent.attendees}/{featuredEvent.maxAttendees}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Event</h3>
                    <p className="text-gray-600 mb-4">{featuredEvent.description}</p>
                    <ul className="space-y-2">
                      {featuredEvent.fullDescription.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Agenda */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Agenda</h3>
                    <div className="space-y-3">
                      {featuredEvent.agenda.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm font-medium text-blue-600 min-w-[80px]">{item.time}</div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{item.topic}</div>
                          </div>
                          <div className="text-sm text-gray-500">{item.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredEvent.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{featuredEvent.price}</div>
                      {featuredEvent.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{featuredEvent.originalPrice}</div>
                      )}
                      <div className="text-sm text-green-600 font-medium">Limited Time Offer</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-3 mb-4">
                      Register Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <div className="text-xs text-center text-gray-500">
                      {featuredEvent.maxAttendees - featuredEvent.attendees} spots remaining
                    </div>
                  </Card>

                  {/* Speaker Info */}
                  <Card className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Featured Speaker</h3>
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={featuredEvent.speaker.avatar || "/placeholder.svg"}
                          alt={featuredEvent.speaker.name}
                        />
                        <AvatarFallback>
                          {featuredEvent.speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{featuredEvent.speaker.name}</h4>
                        <p className="text-sm text-gray-600">{featuredEvent.speaker.designation}</p>
                        <p className="text-xs text-blue-600">{featuredEvent.speaker.company}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{featuredEvent.speaker.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-3 w-3 text-blue-500" />
                            <span className="text-xs text-gray-600">{featuredEvent.speaker.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{featuredEvent.speaker.bio}</p>
                  </Card>

                  {/* What's Included */}
                  <Card className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {featuredEvent.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Calendar Section (unchanged) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Weekly overview of all scheduled events, workshops, and meetings
            </p>
          </div>

          {/* Calendar Header */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">March 2024</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Workshops</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Meetings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Seminars</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-semibold text-gray-700 border-r border-gray-200">Time</div>
              {weekDays.map((day) => (
                <div key={day.name} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                  <div className="font-semibold text-gray-900">{day.name}</div>
                  <div className="text-2xl font-bold text-blue-600 mt-1">{day.date}</div>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-6 border-b border-gray-100 last:border-b-0 min-h-[80px]">
                <div className="p-4 bg-gray-50 border-r border-gray-200 flex items-center">
                  <span className="text-sm font-medium text-gray-600">{time}</span>
                </div>
                {weekDays.map((day) => {
                  const dayEvents = day.events.filter((event) => {
                    const eventHour = Number.parseInt(event.time.split(":")[0])
                    const timeHour = Number.parseInt(time.split(":"

                        
                    )[0])
                    const isPM = event.time.includes("PM")
                    const isTimePM = time.includes("PM")

                    let adjustedEventHour = eventHour
                    let adjustedTimeHour = timeHour

                    if (isPM && eventHour !== 12) adjustedEventHour += 12
                    if (isTimePM && timeHour !== 12) adjustedTimeHour += 12
                    if (eventHour === 12 && !isPM) adjustedEventHour = 0
                    if (timeHour === 12 && !isTimePM) adjustedTimeHour = 0

                    return adjustedEventHour === adjustedTimeHour
                  })

                  return (
                    <div key={`${day.name}-${time}`} className="p-2 border-r border-gray-200 last:border-r-0">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`p-2 rounded-lg border-l-4 mb-2 last:mb-0 ${getEventColor(event.type)}`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {getEventIcon(event.type)}
                            <span className="text-xs font-semibold truncate">{event.title}</span>
                          </div>
                          <div className="text-xs opacity-75 mb-1">{event.duration}</div>
                          <div className="flex items-center gap-1 text-xs opacity-75">
                            <Users className="h-3 w-3" />
                            <span>{event.attendees}</span>
                          </div>
                          <div className="text-xs opacity-75 truncate">{event.location}</div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Calendar Legend */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Event Types</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <Presentation className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Workshop</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-sm">Meeting</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-purple-600" />
                <span className="text-sm">Seminar</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-orange-600" />
                <span className="text-sm">Break</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-pink-600" />
                <span className="text-sm">Presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out on Future Events</h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter and be the first to know about upcoming IT solution events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white border-2 border-white"
            />
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
            onClick={()=>{
                toast.success("Subscribed successfully!")
            }}
            >Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
