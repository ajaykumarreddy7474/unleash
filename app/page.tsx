
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Mail from "@/components/Mail";
import OwnStack from "@/components/OwnStack";
import Subs from "@/components/Subs";
import Whycards from "@/components/Whycards";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Mail/>
      <Logos/>
      <Cards/>
      <OwnStack/>
      <Whycards/>
      <Subs/>
      <Footer/>
    
    </>
  );
}
