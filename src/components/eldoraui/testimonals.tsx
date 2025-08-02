"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/eldoraui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-blue-200 text-black",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        " border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Alex Rivera",
    role: "UI/UX Lead at InnovateTech",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        Working with WaverleyIT Solutions has streamlined our entire design pipeline.
        <Highlight>
          Their frontend solutions are reusable, responsive, and built with performance in mind.
        </Highlight>{" "}
        They’ve become a valuable extension of our internal team.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Frontend Engineer at NextGen Solutions",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        WaverleyIT’s engineering support helped us rebuild our dashboard from the ground up.
        <Highlight>
          Their developers cut our delivery time in half and improved code quality drastically.
        </Highlight>{" "}
        It’s been a game-changer.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        As a startup, we needed speed and flexibility. WaverleyIT delivered both.
        <Highlight>From backend APIs to deployment pipelines, everything just works.</Highlight>
        They’re now our go-to technology partner.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Designer at Global Systems",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        WaverleyIT’s prebuilt solutions made our product rollout incredibly smooth.
        <Highlight>
          Their design and dev teams understand compliance, user behavior, and accessibility.
        </Highlight>{" "}
        That’s rare to find.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Creative Director at FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        WaverleyIT transformed our fintech platform’s frontend with modern design practices.
        <Highlight>
          Their animations and attention to detail elevated our entire user experience.
        </Highlight>{" "}
        Client satisfaction has noticeably improved.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Web Developer at LogiChain Solutions",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        Our logistics dashboard was clunky until WaverleyIT stepped in.
        <Highlight>
          Their modular components and clear documentation made development seamless.
        </Highlight>{" "}
        We now ship features faster than ever.
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Digital Marketing Specialist at EcoTech",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        WaverleyIT helped us build fast, SEO-optimized landing pages for our campaigns.
        <Highlight>
          Their responsive layouts and smooth integrations boosted our conversion rates.
        </Highlight>{" "}
        Highly recommended.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Product Manager at FashionForward",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        WaverleyIT’s custom ecommerce components made our storefront fast and beautiful.
        <Highlight>
          They optimized every interaction, improving customer satisfaction metrics.
        </Highlight>{" "}
        A reliable team for any growing brand.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App Designer at HealthTech Solutions",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        We partnered with WaverleyIT to improve our healthcare app UX.
        <Highlight>
          Their focus on accessibility and usability helped us exceed compliance standards.
        </Highlight>{" "}
        Great experience overall.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "EdTech Founder at EduSafe Innovations",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        WaverleyIT’s IT solutions helped us scale our EdTech platform seamlessly.
        <Highlight>
          Their education-specific templates improved usability across student and teacher flows.
        </Highlight>{" "}
        Couldn’t have grown this fast without them.
      </p>
    ),
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-10">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don&apos;t just take our word for it. Here&apos;s what{" "}
        <span className="bg-gradient bg-clip-text text-transparent">
          real people
        </span>{" "}
        are saying about{" "}
        <span className="from-fg-onAccent text-blue-800">Waverley</span>
      </h3>
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </section>
  );
}
