"use client"

import * as React from "react"
import { Menu,Laptop, Cloud, Shield } from "lucide-react"
import { Link } from "react-router"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-white open-sans-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-24 w-auto" src="/logo.png" alt="Logo" />
            </Link>
            <div className="hidden md:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                
                  <NavigationMenuItem>
                    <Link to="/courses">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Courses</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger >Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mt-4 text-lg font-medium text-white">Our Services</div>
                              <p className="text-sm leading-tight text-white/90">
                                Explore our range of software solutions designed to empower your business.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem
                          href="/services"
                          title="Web Development"
                          icon={<Laptop className="w-4 h-4" />}
                        >
                          Custom web applications tailored to your needs.
                        </ListItem>
                        <ListItem
                          href="/services"
                          title="Cloud Solutions"
                          icon={<Cloud className="w-4 h-4" />}
                        >
                          Scalable and secure cloud infrastructure.
                        </ListItem>
                        <ListItem
                          href="/services"
                          title="Cybersecurity"
                          icon={<Shield className="w-4 h-4" />}
                        >
                          Protect your digital assets with our security solutions.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                 
                  <NavigationMenuItem>
                    <Link to="/products" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Products</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/events">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Events</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                   <NavigationMenuItem>
                    <Link to="/career" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Careers</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                    <NavigationMenuItem>
                    <Link to="/#about" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                <Link to="/contact" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>
            <Link to="/get-a-quote" >
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">Get Started</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent side="right" className="z-50 bg-white w-[300px] sm:w-[400px]  p-6">
                <nav className="flex flex-col space-y-4 open-sans-semibold ">
                  <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link to="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                  <Link to="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Products
                  </Link>
                  <Link to="/events" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Events
                  </Link>
                  <Link to="/career" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Careers
                  </Link>
                  <Link to="/#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                   <Link to="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  <Link to="/get-a-quote" onClick={() => setIsOpen(false)}>
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-800">Get Started</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className,
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar
