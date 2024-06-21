// import Image from "next/image";
import Navbar from "./mycomp/nav";
<<<<<<< HEAD
import Section2 from "./Section2/sec2";

export default function Home() {
  return (
 <div className="text-white ">
  <Navbar/>
  {/* HII PIYUSH AND TANISH HERE : ) */}
  <Section2/>
    
  

 </div>
=======
import First from "./mycomp/first";

export default function Home() {
  return (
    <div>
      <div className="text-white ">
        <Navbar />
        {/* HII PIYUSH AND TANISH HERE : ) */}
      </div>
      <div>
        <First/>
      </div>
    </div>
>>>>>>> d3a9edba5c664b6251340611c23a9e7a712c198c
  );
}