import React from "react";
import styles from "./styles.module.css"; 

const First = () => {
  return (
    <div className="w-screen h-screen bg-black grid grid-cols-4">
      <div className="col-span-2 h-5/6 bg-black z-10 flex flex-col justify-center items-center">
        <a href="#" className={styles["btn-shine"]}>
          <div className="text-6xl mb-5">WELCOME</div>
          <div className="text-6xl mb-5 ">TO</div>
          <div className="text-6xl mb-5">UNITRENDS</div>
        </a>
      </div>
    </div>
  );
};

export default First;
