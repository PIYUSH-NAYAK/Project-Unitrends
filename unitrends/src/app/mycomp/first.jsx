import React from "react";
import styles from "./styles.module.css"; 

const First = () => {
  return (
    <div className="w-screen h-screen bg-black grid grid-cols-5">
      <div className="col-span-3 h-5/6 bg-black z-10 flex flex-col justify-center items-center">
        <a href="#" className={styles["btn-shine"]}>
          <div className="text-6xl mb-5 font-serif">WELCOME</div>
          <div className="text-6xl mb-5 font-serif ">TO</div>
          <div className="text-6xl mb-5 font-serif tracking-widest">UNITRENDS</div>
          <div>
            
          </div>
        </a>
      </div>

    </div>
  );
};

export default First;
