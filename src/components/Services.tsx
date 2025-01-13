import { Container } from "./Container.tsx";
import { motion as m } from "framer-motion";
import { AnimateWord } from "./AnimateText.tsx";

export const Services = () => {
  return (
    <section className={`bg-black rounded-t-2xl relative z-30 h-screen`}>
      <Container classes={'py-14'}>
        <div className={`grid gap-10`}>
          <h2 className={`text-heading-2 uppercase font-inter heading-two font-medium tracking-tighter flex flex-wrap overflow-hidden`}>
            {"how i can help you/".split("").map((l, index) => (
              (
                <m.span key={`upper-${index}`} viewport={{once: false}} initial={{y: 35, opacity: 0, scale: 0.9}} whileInView={{
                  y:0, opacity: 1, scale: 1, transition: {
                    duration: 0.2,
                    delay: index * 0.04
                  }
                }}
                >{l === " " ? '\u00A0' : l}</m.span>
              )
            ))}
          </h2>
          <div className={`text-paragraph-2 flex flex-col items-start gap-y-4`}>
            <m.p initial={{y: 10, opacity: 0}} viewport={{once: true}} whileInView={{y: 0, opacity: 1, transition: {duration: 0.2, ease: "easeInOut", delay: 0.4} }} className={`uppercase font-mono text-md tracking-wider font-medium overflow-hidden`}>(services)</m.p>
            <m.p className={`flex flex-wrap pb-10`}>
              <AnimateWord text={'Frustrated with websites/applications that don\'t reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business.'}
                duration={0.3} delay={0.03} yLevel={15} />
            </m.p>
            <div className={`bg-paragraph-2/50 h-[0.5px] w-full`}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
