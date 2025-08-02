"use client";

import { useEffect, useState } from "react";
import { TextComponent } from "@/components/eldoraui/featurefour";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Enterprise-Grade Security",
    content:
      "Bank-level encryption and compliance with industry standards to keep your data safe.",
    srcImage:
      "/s1.jpg",
  },
  {
    title: "Lightning Fast Performance",
    content:
      "Optimized for speed with 99.9% uptime guarantee and global CDN support.",
    srcImage:
      "/s2.jpg",
  },
  {
    title: "24/7 Expert Support",
    content:
      "Dedicated support team available around the clock to help you succeed.",
    srcImage:
      "/s3.jpg",
  },
  {
    title: "Scalable & Future-Ready Architecture",
    content:
      "Designed to grow with your business—effortlessly handle increased traffic, users, and data with our modular, cloud-native infrastructure.",
    srcImage:
      "/cc4.jpg",
  },
];

export function FeatureFourImages() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container">
      <div className="mb-20 text-center">
        <p className=" mb-2 text-sm font-medium uppercase text-neutral-500">
          How does it work ?
        </p>

        <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-neutral-800 dark:text-neutral-300">
        Why Choose Our Digital Solutions?
Enterprise-Grade Security
        </h2>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]",
            )}
          >
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : "",
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
