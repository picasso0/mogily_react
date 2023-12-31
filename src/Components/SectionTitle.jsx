/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle,persian_title,persian_subtitle } = props;

  return (
    <div className="section-title">
    <LazyMotion  features={domAnimation} strict> 
      <m.div
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-600 p-6 noselect "
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-3xl sm:text-5xl md:text-7xl"
          style={{ fontFamily: "Morganite Black"}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
       
      </m.div>
      
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-600 p-6 noselect text-right"
      >
        <span
          className="opacity-50 text-1xl sm:text-1xl md:text-3xl"
          style={{
            textTransform: "uppercase",
            fontFamily: "aseman",
            fontWeight: "400",
            
          }}
        >
          {persian_subtitle}
        </span>
      <h2 className="tracking-wider text-3xl sm:text-5xl md:text-7xl" style={{marginTop:"-10px",textAlign:"right",fontFamily:"aseman"}} >{persian_title}</h2>
      </m.div>
    </LazyMotion>
    </div>
  );
};

export default SectionTitle;
