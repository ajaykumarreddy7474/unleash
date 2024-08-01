import Image from "next/image"
import main1 from "../public/heropic.jpg"
const Hero = () => {
  return (
    <section className="py-4 px-7 md:px-16 lg:px-40">
  <div className="container mx-auto"> {/* Center the container */}
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl lg:text-6xl">
          Unleash <span className="mainX">Effortless</span> Tech Success and <span className="mainX">Conquer</span> your Dreams
        </h1>
        <h2 className="text-xl tracking-tight mt-6 md:text-[17px] md:mt-4 lg:pr-32 lg:text-2xl">
          Discover a streamlined, stress-free approach to landing your dream tech job. Conquering with best skills with you.
        </h2>
      </div>
      <div className="relative mt-8 md:mt-0"> {/* Added margin top for better spacing */}
        <Image src={main1} alt="mainx" className="relative z-20 lg:w-[830px] lg:h-120" />
        <div className="w-44 h-72 bg-blue-500/70 rounded-full shadow-lg shadow-blue-500/50 filter blur-[80px] absolute bottom-20 left-16 z-10">
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero