// import Image from "next/image";
import Navbar from "./mycomp/nav";
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
  );
}
