"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useId, useRef, useState } from "react";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className=" fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 rounded-lg object-cover object-top border border-black "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium  text-green-400 text-4xl"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 relative">
  {cards.map((card) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={card.title}
      onClick={() => setActive(card)}
      className="p-2 flex flex-col hover:bg-gradient-to-r from-blue-500 to-black rounded-xl cursor-pointer z-10"
    >
      <div className="flex gap-4 flex-col bg-black w-full border border-black rounded-lg z-20 relative">
       
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-t-lg object-cover object-top"
          />
        </motion.div>
        
        <div className=" flex justify-center items-center flex-col mb-4">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="text-2xl text-white font-bold text-center md:px-4"
          >
            {card.title}
          </motion.h3>
          <div className="text-white absolute top-2 left-0 text-7xl backdrop-blur-lg px-6 py-2 rounded-md text-center">
            <div><h1 className="font-bold text-3xl md:text-6xl">{` ${card.count}`}</h1></div>
            <div><h1 className="text-xl">{` ${card.countTitle}`}</h1></div>
            </div>
        </div>
        
      </div>
    </motion.div>
  ))}
</ul>

    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Extensive Job Listings",
    src: "/c2.jpg",
    countTitle:"Job Listings",
    count: "100K",
    content: () => (
      <p>
        Expand your professional network with our networking tools and events. Connect with industry professionals and potential employers to advance your career.
      </p>
    ),
     
  },

  {
    title: "Personalized Matches",
    src: "/c9.jpg",
    countTitle:"Match Rate",
    count: "88%",
    content: () => (
      <p>
      Explore a vast range of job opportunities from various industries. Our extensive database is updated regularly to ensure you have access to the latest job postings.
      </p>
    ),
     
  },

  {
    title: "Expert Career Advice",
    src: "/c5.jpg",
    countTitle:"Rating for Advices",
    count: "4.5",
    content: () => (
      <p>
        Our advanced algorithms provide personalized job matches based on your skills, experience, and preferences, helping you find the perfect job faster.
      </p>
    ),
     
  },

  {
    title: "Verified Employers",
    src: "/c8.jpg",
    countTitle:"Verifies",
    count: "1500+",
    content: () => (
      <p>
       Get expert career advice and tips to enhance your resume, prepare for interviews, and excel in your career. Our resources are designed to help you succeed.
      </p>
    ),
  },

  {
    title: "Network Opportunities",
    src: "/c2.jpg",
    countTitle:"Networking Events",
    count: "10/week",
    content: () => (
      <p>
        Trust that you&#39;re applying to verified and reputable employers. We carefully screen job listings to ensure you are connected with credible companies.
      </p>
    ),
     
  },
  {
    title: "Offering Counts",
    src: "/c3.jpg",
    countTitle:"Jobs",
    count: "5+",
    content: () => (
      <p>
     Expand your professional network with our networking tools and events. Connect with industry professionals and potential employers to advance your career.
      </p>
    ),
     
  },
];
