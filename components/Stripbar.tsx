"use client"
import gsap from 'gsap';
import { useEffect } from 'react';

const Stripbar = () => {
  useEffect(() => {
    gsap.to('.box', { y: 130, duration: 1,delay:1 });
  }, []);

  return <div className="box text-center text-md  flex justify-center items-center md:text-2xl uppercase font-bold  mt-[70px] md:mt-[-145px] lg:mt-[-140px] lg:tracking-[7px]">most searched platform for JOBs and carrer </div>;
};

export default Stripbar;
