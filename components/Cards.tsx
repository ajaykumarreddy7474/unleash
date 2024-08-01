import Image from "next/image"
import p2 from "../public/t1.jpg"
import p1 from "../public/t3.jpg"
import p3 from "../public/t5.jpg"
import p5 from "../public/t8.jpg"
// import p4 from "../public/t9.jpg"
const Cards = () => {
  return (
    <div className="px-4 pb-10">      <h2 className="mainX text-center text-4xl md:text-7xl my-2 uppercase">Explore <br/> Strategies</h2>
      <h1 className="text-center px-10 md:text-2xl">Proven strategies to withstand the competition and gain  exceptional Real world skills</h1>
    <div className="min-h-screen flex flex-row items-center justify-center -mt-12 md:-mt-1 ">
      
    <div className="box-grid mt-14">
          <div className="box-sizes ">
            <h2 className="h2-box">pratical thinking</h2>
            <div className=" buttonMain ">
              <h1 className="buttonS">Problem Solving</h1>
              <h1 className="buttonS">Logical Approach</h1>
            </div>
            <Image src={p1} alt='p1' className="imagexl"/>
            <h2 className="stripsl">ONE</h2>
          </div>
          <div className="box-sizes">
            <h2 className="h2-box">skill enhancement</h2>
            <div className=" buttonMain ">
              <h1 className="buttonS">Deep Learning</h1>
              <h1 className="buttonS">Growth Mindset</h1>
            </div>
            <Image src={p2} alt='p1' className="imagexr"/>
      <h2 className="stripsr">TWO</h2>
          </div>
          <div className="box-sizes">
            <h2 className="h2-box">power networking</h2>
            <div className=" buttonMain ">
              <h1 className="buttonS">Expand Reach</h1>
              <h1 className="buttonS">Build Connections</h1>
            </div>
            <Image src={p3} alt='p1' className="imagexl"/>
            <h2 className="stripsl">THREE</h2>
          </div>
          <div className="box-sizes">
            <h2 className="h2-box">resume building</h2>
            <div className=" buttonMain ">
              <h1 className="buttonS">Stand Out</h1>
              <h1 className="buttonS">Resume Tips</h1>
            </div>
            <Image src={p5} alt='p1' className="imagexr"/>
            <h2 className="stripsr">FOUR</h2>
          </div>
    </div>
  </div>
  </div>

   
  )
}

export default Cards