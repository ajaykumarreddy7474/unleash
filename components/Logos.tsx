import Image from "next/image";

import p1 from "../public/logo-acme.png";
import p2 from "../public/logo-apex.png";
import p3 from "../public/logo-celestial.png";
import p4 from "../public/logo-echo.png";
import p5 from "../public/logo-pulse.png";
import p6 from "../public/logo-quantum.png";

const Logos = () => {
  return (
    <div className="container my-8 mx-auto px-4">
  <h1 className="text-center my-4 text-black/70">Trusted by</h1>
  <div className="relative overflow-hidden mask-gradient">
    <div className="flex justify-center items-center space-x-12">
      <Image src={p1} alt="Acme logo" className="logo-ticker" />
      <Image src={p2} alt="Apex logo" className="logo-ticker" />
      <Image src={p3} alt="Celestial logo" className="logo-ticker" />
      <Image src={p4} alt="Echo logo" className="logo-ticker" />
      <Image src={p5} alt="Pulse logo" className="logo-ticker" />
      <Image src={p6} alt="Quantum logo" className="logo-ticker" />
    </div>
  </div>
</div>

  );
};

export default Logos;
