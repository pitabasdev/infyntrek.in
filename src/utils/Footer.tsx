import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";
import { Toaster, toast } from "sonner";
export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-slate-900 text-white">
      <Toaster position="top-right" richColors />
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-10 mt-4">
              <img
                src="/logo_white.png"
                alt="Company Logo"
                className="w-30 h-30 rounded-full absolute"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading IT service provider delivering innovative technology
              solutions to help businesses grow and succeed in the digital age.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <p>560037,Marathahalli, Bengaluru, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <p>+91 9035911837</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-slate-300">support@waverleyit.in</p>
              </div>
            </div>
          </div>

          {/* Services Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile App Development",
                "Cloud Solutions",
                "Digital Marketing",
                "IT Consulting",
                "Cybersecurity",
                "Data Analytics",
                "DevOps Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { title: "About Us", link: "/#about" },
                { title: "Our Team", link: "/#team" },
                { title: "Products", link: "/products" },
                { title: "Services", link: "/services" },
                { title: "Careers", link: "/career" },
                // { title: "Interns", link: "/interns" },  /// Hide the inters link
                { title: "Contact Us", link: "/contact" },
                { title: "Support", link: "https://wa.link/def9br" },
              ].map((link) => (
                <li key={link.link}>
                  <Link
                    to={`${link.link}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social Media */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="mt-2 p-2 bg-slate-800 rounded text-xs">
                  <span className="text-green-400">●</span> Available for
                  emergency support 24/7
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=61577194267704",
                    label: "Facebook",
                  },
                  {
                    icon: RiTwitterXFill,
                    href: "https://x.com/waverleyit",
                    label: "Twitter",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/waverleyit-solutions",
                    label: "LinkedIn",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/waverleyitsolutions",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    to={href}
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={label}
                    target="_blank"
                  >
                    <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Certifications & Partnerships
              </h4>
              <div className="flex flex-wrap items-center gap-6">
                {/* ISO Certification */}
                <div
                  className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg"
                  onClick={() => {
                    window.open("/iso.pdf", "_blank");
                  }}
                >
                  <img
                    src="/iso.png"
                    alt="ISO Logo"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <div className="text-xs">
                    <p className="text-white font-medium">ISO 9001:2015</p>
                    <p className="text-slate-400">Quality Management</p>
                  </div>
                </div>

                {/* MSME Certification */}
                <div
                  className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg"
                  onClick={() => {
                    window.open("/msme.pdf", "_blank");
                  }}
                >
                  <img
                    src="/msme.jpg"
                    alt="MSME Logo"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <div className="text-xs">
                    <p className="text-white font-medium">MSME Registered</p>
                    <p className="text-slate-400">Govt. of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights and
              updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                onClick={() => {
                  if (!email) {
                    toast.error("Please enter a valid email address.");
                    return;
                  } else if (!/\S+@\S+\.\S+/.test(email)) {
                    toast.error("Please enter a valid email address.");
                    return;
                  }
                  toast.success("Subscribed successfully!", {
                    description: "Thank you for subscribing to our newsletter.",
                  });
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm flex items-center space-x-2 justify-center w-full">
              <p>
                &copy; {new Date().getFullYear()} WaverleyIT Solutions. All
                rights reserved.
              </p>
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
