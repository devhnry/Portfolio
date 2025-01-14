import {motion as m} from "framer-motion";
import React from "react";

interface AnimateTextProps {
  text: string;
  duration?: number;
  delay?: number;
  yLevel?: number;
  viewport?: boolean;
}

export const AnimateLetters: React.FC<AnimateTextProps> = ({text, duration = 0.2, delay = 0.04, yLevel = 30, viewport = true }) => {
  return (
   <>
     {text.split("").map((l: string, index: number) => (
       (
         <m.span key={`upper-${index}`} viewport={{once: viewport}}
                 initial={{y: yLevel , opacity: 0, scale: 0.9}}
                 whileInView={{
                   y:0, opacity: 1, scale: 1,
                   transition: {
                     duration: duration,
                     delay: index * delay
                   } }}>
           {l === " " ? '\u00A0' : l}
         </m.span>
       )
     ))}
   </>
  );
};

export const AnimateWord: React.FC<AnimateTextProps> = ({ text, duration = 0.2, delay = 0.04, yLevel = 30, viewport = true }) => {
  return (
    <>
      {text?.split(" ").map((word, index) => (
        <m.span
          initial={{ y: yLevel, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{once : viewport}}
          transition={{
            duration,
            delay: delay * (index),
          }}
          key={`word-${index}`} style={{ display: "inline-block" }}>
          {word}
          {index < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </m.span>
      ))}
    </>
  );
};
