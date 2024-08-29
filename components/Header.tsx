
import Image from 'next/image';
import Menu from "../public/menu.svg";
import Logo from "../public/unleash.png";



const Header: React.FC = () => {
  return (
  <header className="sticky top-0 z-30 backdrop-blur-lg px-5 md:px-30 lg:px-20">
<div className="py-5 px-7">
<div className="container">
  <div className="flex justify-between items-center ">
<div className="flex flex-row md:flex-col lg:flex-row items-center gap-2 font-semibold lg:text-2xl"><Image src={Logo} alt='logo' width={50} height={50}/> <h1>UNLEASHER</h1></div>
<Menu className="h-5 w-5 md:hidden"/>
<nav className="hidden md:flex gap-6 text-black/60 items-center md:text-xl">
  <a href="#">Freelancers</a>
  <a href="#">Products</a>
  <a href="#">Blogs</a>
  <a href="#">Contact us</a>
  
</nav>
<button className="text-white py-2 px-4 hidden rounded-md  md:block bg-gradient-to-t from-black to-blue-400 ">Register</button>
</div>
</div>
</div>
  </header>
  );
};

export { Header };
