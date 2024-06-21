// import Image from "next/image";
import First from "./mycomp/first";
import Navbar from "./mycomp/nav";
import Section2 from "./Section2/sec2";

export default function Home() {
  return (
 <div className="text-white ">
  <Navbar/>
  {/* HII PIYUSH AND TANISH HERE : ) */}
  <div>
  <Section2/>

  </div>
  <div>
    <First/>
  </div>
    
  

 </div>
  );
}