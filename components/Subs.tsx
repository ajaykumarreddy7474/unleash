import Link from "next/link";
import { MdDone } from "react-icons/md";
import cardData from '../components/jsonData/cardData.json';

const Subs = () => {

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="mainX uppercase text-center mt-4 text-3xl  md:text-6xl ">Choose Your Subscription</h1>
      <h1 className="text-center px-10 py-4">Select the subscription plan that best fits your needs .</h1>
      <div className=" flex  justify-center min-h-screen mt-4  lg:px-20 ">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
                    {cardData.map((card) => (
                        <div key={card.id} className="bg-white p-6 rounded-lg shadow-lg w-[330px] h-[480px]  border border-blue-300 relative">
                     <div className="absolute inset-0 w-[328px] h-[270px] bg-blue-100 overflow-hidden z-10 rounded-lg  hover:bg-gradient-to-t from-white to-blue-400 "></div>
                        <div className="flex justify-between items-center mb-4 ">
                        <h1 className="text-2xl font-semibold relative z-20">{card.title}</h1>
                        <h1 className="text-lg  z-20 px-4 py-1 bg-blue-300 rounded-full">{card.titleX}</h1>
                        </div>
                        <div className="flex items-center mb-4 gap-1">
                          <div className=" text-6xl font-bold z-20 ">{card.cost}</div>
                          <div className="z-20">{card.month}</div>
                        </div>

                        <p className="text-gray-700 relative z-20  ">{card.description}</p>
                      <Link href='/details'><button className=" text-xl  bg-blue-400  px-4 py-2 rounded-md relative z-20 text-center mt-8 hover:bg-green-500 hover:text-white hover:shadow-green-300 hover:shadow-2xl">{card.buttonx}</button></Link>
                        <h1 className="text-xl mt-8">{card.feature}</h1>
                        <h1 className="text-sm ">{card.ftitle}</h1>
                       <div>
                        <div className="flex items-center gap-3 ">
                           <span className="text-lg bg-green-500 p-1 inline-flex rounded-full mt-4"><MdDone/></span>
                        <h2 className="mt-3">{card.line1}</h2>
                        </div>
                        <div className="flex items-center gap-3 ">
                           <span className="text-lg bg-green-500 p-1 inline-flex rounded-full mt-4"><MdDone/></span>
                        <h2 className="mt-3">{card.line2}</h2>
                        </div>
                        <div className="flex items-center gap-3 ">
                           <span className="text-lg bg-green-500 p-1 inline-flex rounded-full mt-4"><MdDone/></span>
                        <h2 className="mt-3">{card.line3}</h2>
                        </div>
                       </div>   
                    </div>  
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subs