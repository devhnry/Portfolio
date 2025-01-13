import { Button } from "../Button.tsx";
import imageUrl from "../../assets/henry.jpeg";
import imageUrl2 from "../../assets/henry2.png";
import {motion as m } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSectionMobile = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <m.div initial={{ opacity: 1, y : 0 }}
           animate={{
             opacity: Math.max(1 - scrollY / 300, 0),
             scale: Math.max(1 - scrollY / 500, 0.92),
           }}
           transition={{
             opacity: { duration: 0.5, ease: "easeOut" },
             scale: { duration: 0.5, ease: "easeOut" },
           }}
           className={`grid gap-10 fixed left-0 right-0 px-6 sm:px-8 lg:px-10 z-10 bottom-7`}>
      <div className={`grid items-start gap-4`}>
        <h1 className={`heading-one *:block`}>
          <span>Henry</span>
          <span className={`ml-3`}>Taiwo&#169;</span>
        </h1>
        <p className={`text-paragraph-1 w-[clamp(300px,2.5vw,360px)] text-[clamp(1rem,2.5vw,1.125rem)]`}>I help growing brands and startups gain an unfair advantage through premium, result driven websites and applications.</p>
        <Button text={`send a message`} />
      </div>
      <div className={`flex items-end justify-between`}>
        <div className={`w-[100px] h-[130px] filter grayscale-[50%] hover:grayscale-0 transition-all cursor-pointer relative overflow-hidden rounded-lg`}>
          <img className={`h-full w-full object-cover object-bottom`} src={imageUrl} alt={``} />
          <div className={`bg-gradient-to-b from-transparent to-black/40 absolute inset-0 z-10 size-full`}></div>
        </div>
        <div className={`text-[1rem] leading-[1.2] font-oswald uppercase text-right text-paragraph-1 grid gap-y-1`}>
          <p className={`tracking-wider font-light`}>available for <br /> freelance work</p>
          <p className={`text-5xl xsm:text-6xl transition-all font-bold text-paragraph-5`}>JAN' 25</p>
        </div>
      </div>
    </m.div>
  );
};

export const HeroSectionDesktop = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <m.div initial={{ opacity: 1, y : 0 }}
           animate={{
             opacity: Math.max(1 - scrollY / 300, 0),
             scale: Math.max(1 - scrollY / 500, 0.92),
           }}
           transition={{
             opacity: { duration: 0.5, ease: "easeOut" },
             scale: { duration: 0.5, ease: "easeOut" },
           }} className={`grid gap-7 xl:gap-10 fixed left-0 right-0 px-6 sm:px-8 lg:px-10 z-10 bottom-7`}>
      <h1 className={`heading-one-desktop relative w-fit`}>henry taiwo<span className={`lg:hidden`}>&#169;</span>
        <img className={`absolute hidden lg:block -top-[30px] -right-[75px] size-[5rem] xl:size-[6rem] xl:-right-[90px]`} src={`./src/assets/copyright.svg`} alt={``} />
      </h1>
      <div className={`grid grid-cols-3 gap-x-6`}>
        <div className={`grid items-start h-fit gap-y-[25px] w-fit`}>
          <img className={`rotate-90 size-6 mt-6 block mb-[25px]`} src={`src/assets/arrow-up.svg`} alt={``} />
          <p className={`text-paragraph-1 w-[clamp(300px,2.5vw,340px)] text-[clamp(1rem,2.5vw,1.065rem)] lg:text-[clamp(1rem,2.5vw,1.3rem)] lg:max-w-[350px] lg:w-full`}>I help growing brands and startups gain an unfair advantage through premium, result driven websites.</p>
          <Button text={`send a message`} />
        </div>
        <div style={{backgroundImage: `url(${imageUrl2})`}} className={`h-[450px] max-w-[350px] bg-no-repeat bg-center bg-cover rounded-[18px] relative overflow-hidden ml-8 lg:ml-0 transition-all filter hover:grayscale-0 duration-200`}>
          <div className={`overlay bg-gradient-to-b from-transparent to-black/30 absolute inset-0`}></div>
        </div>
        <div className={`text-[1rem] h-fit mt-auto leading-[1.2] font-oswald uppercase text-right text-paragraph-1 grid gap-y-1`}>
          <p className={`tracking-wider font-light`}>available for <br className={`md:hidden`} /> freelance work</p>
          <p className={`text-5xl lg:text-8xl xsm:text-6xl transition-all font-bold text-paragraph-5`}>JAN' 25</p>
        </div>
      </div>
    </m.div>
  )
}