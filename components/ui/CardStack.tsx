"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';

let interval: any;

type Card = {
  id: number;
  job:string;
  viewbtn:string;
  designation: string;
  content: React.ReactNode;
  imageX: StaticImageData;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 mb-20">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="cardStackClasses"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index, 
            }}
          >
<div className="flex  justify-between items-center p-4 z-20">
<div className="flex items-center text-black  uppercase font-bold text-md md:text-3xl">
    {card.content}
  </div>
  <div>
  <FaPlus className="text-xl md:text-3xl" />
  </div>
</div>
<div className="absolute font-bold left-1 top-1/3 pl-8 text-left text-4xl z-20 -mt-8">
  <h1 className="text-2xl md:text-4xl" >{card.job}</h1>
  <h2 className="mt-[50px] md:mt-12 w-[90px] md:w-[120px] md:px-1 text-center md:py-3 text-sm md:text-2xl rounded-full bg-black  text-white px-0 py-2 ">{card.viewbtn}</h2>
</div>

<div className="flex  gap-20 justify-around items-center mb-2">
              <div>
<Image src={card.imageX} alt='name' width={40} height={40}/>
              </div>         
            <div>
<p className="text-black text-xl md:text-3xl text-right">{card.designation}</p>
</div>             
</div>


<div className="absolute md:w-[360px] md:h-[280px] bg-black/10 z-10 rounded-t-2xl top-3 left-3 w-[215px] h-[220px]">
  {/*  */}
</div>
          </motion.div>
        );
      })}
    </div>
  );
};
