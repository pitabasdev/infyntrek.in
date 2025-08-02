import { Marquee } from "@/components/eldoraui/marquee";

const companies = [
  {
    name: "GitHub",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg",
  },
  {
    name: "Amazon",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066178/Amazon_wckqtv.svg",
  },
    {
    name: "Cal",
    url: "/cal.png",
  },
  {
    name: "WeldxIT",
    url: "/c1.jpg",
  },
    {
    name: "Smart Agronni",
    url: "/logomark.svg",
  },
    {
    name: "Smart Agronni",
    url: "/c1.jpg",
  },
];

export function Clients() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-4 md:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <img
                key={idx}
                width={112}
                height={40}

                src={company.url}
                className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
