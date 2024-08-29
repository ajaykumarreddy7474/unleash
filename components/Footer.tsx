import Image from 'next/image';
import { FaGoogle, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Logo from "../public/unleash.png";
const Footer = () => {
  return (
<div className="h-[120px] w-full bg-black mt-1 ">
  <div className="flex flex-col md:flex-row text-center gap-2 pb-4 md:pb-0 md:gap-10 md:justify-between items-center md:px-10 pt-4">


<div className="flex justify-center items-center text-white pt-4 gap-2">
<h1>Follow</h1><FaInstagram/><FaPinterest/><FaYoutube/><FaGoogle/>
</div>

<div className="text-white flex justify-center items-center gap-4">
  <Image src={Logo} alt='logo' width={20} height={20}/>
  <h2>Unleasher</h2>
</div>

</div>


<div className="text-white flex flex-col md:flex-row gap-4  text-center  bg-black justify-center md:mt-4">
  <h1 className="mt-4 md:mt-0">© 2015 - 2024 Unleasher® Global Inc.</h1>
  <h1>Terms of Service</h1>
  <h1>Privacy Policy</h1>
  <h1>CA collection</h1>

</div>

    </div>
    

  )
}

export default Footer