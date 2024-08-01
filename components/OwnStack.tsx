
import { CardStack } from "../components/ui/CardStack";
import p1 from "../public/adobe.jpg";
import p4 from "../public/air.jpg";
import p3 from "../public/g.jpg";
import p2 from "../public/pp.jpg";


const cards = [
  {
    id: 1,
    job : "Azure Data Engineer",
    designation: "Sophia Kim",
    content: "Adobe",
    viewbtn:"View",
    imageX: p1, 
  },
  {
    id: 2,
    job : "Senior UI Developer",
    designation: "Daniel Jackson",
    content: "PayPal",
    viewbtn:"View",
    imageX:  p2, 
  },
  {
    id: 3,
    job : "Senior Backend Developer",
    designation: "Emily Garica",
    content: "Google",
    viewbtn:"View",
     imageX: p3, 
  },
  {
    id: 4,
    job : "NextJS Developer",
    designation: "Emily Garica",
    content: "Airbnb",
    viewbtn:"View",
    imageX: p4, 
  },
];

export default function OwnStack() {
  return (
    <div className="p-8 text-center flex flex-col justify-center items-center gap-10 my-20">
      <h1 className="mainX text-4xl md:text-7xl uppercase">Testimonials</h1>
      <h1 className="-mt-4 mb-10 md:text-2xl lg:px-80">Review the comprehensive list of successful job candidates employed through our organization</h1>
      <CardStack items={cards} offset={15} scaleFactor={0.08} />
    </div>
  );
}
