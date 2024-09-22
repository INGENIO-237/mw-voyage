"use client";

import Image from "next/image";
import IntroImage from "@/public/images/intro.png";
import Stars from "@/public/images/stars.png";
import Decors from "@/public/images/decors.png";
import Plane from "@/public/images/plane.png";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Heading from "@/components/ui/Heading";
import { getKey } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Home() {
  // const images =

  useEffect(() => {
    document.documentElement.classList.remove(".dark");
    document.documentElement.classList.add(".light");
  }, []);

  const services = [
    {
      title: "Study abroad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
      image: Plane,
    },
    {
      title: "Find a job abroad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
      image: Plane,
    },
    {
      title: "Tourism",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
      image: Plane,
    },
  ];

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });

  return (
    <div className="relative">
      {/* Decors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        className="absolute top-0 right-0 z-1 pointer-events-none"
      >
        <Image src={Decors} alt="decors" width={400} height={400} />
      </motion.div>

      {/* Intro */}
      <div className="flex flex-1 flex-col-reverse md:flex-row md:justify-between mb-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="max-w-[500px] space-y-3 flex flex-col justify-center
        "
        >
          <h1 className="text-secondary text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
            Best Destinations around the world
          </h1>
          <Heading className="text-center md:text-left">
            Travel, enjoy and live a new and full life
          </Heading>
          <p className="text-center md:text-left font-medium">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="text-white">Contact us</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <Image
            src={IntroImage}
            width={450}
            height={450}
            alt="intro"
            className="mb-10 md:mb-0 pointer-events-none z-20"
            priority
          />
        </motion.div>
      </div>

      {/* Services */}
      <div id="services" className="relative my-5">
        <Image
          src={Stars}
          alt="stars"
          className="absolute top-0 right-0 z-1 pointer-events-none"
        />

        <div className="flex flex-col items-center justify-center md:items-start space-y-3">
          <h1 className="text-primary text-lg font-semibold z-20">SERVICES</h1>
          <Heading className="z-20">We Offer Best Services</Heading>
          <p className="text-center font-medium z-20">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row justify-around gap-5 mt-10"
          ref={servicesRef}
        >
          {services.map(
            (service) =>
              servicesInView && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                  key={getKey()}
                  className="p-2"
                >
                  <div className="">
                    <h1 className="text-xl font-semibold">{service.title}</h1>
                    <p className="text-lg text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
