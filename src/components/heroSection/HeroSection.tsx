import { Button } from "../Button.tsx";
import imageUrl from "../../assets/henry.jpeg";

export const HeroSectionMobile = () => {
  return (
    <div className={`grid gap-10`}>
      <div className={`grid items-start gap-4`}>
        <h1 className={`heading-one *:block`}>
          <span>Henry</span>
          <span className={`ml-3`}>Taiwo&#169;</span>
        </h1>
        <p className={`text-paragraph-1 max-w-[300px]`}>I help growing brands and startups gain an unfair advantage
                                                        through premium, result driven websites and applications.</p>
        <Button text={`send a message`} />
      </div>
      <div className={`flex items-end justify-between`}>
        <div className={`w-[100px] h-[130px]  bg-center bg-no-repeat bg-cover relative overflow-hidden rounded-lg`}>
          <img className={`h-full w-full object-cover object-bottom`} src={imageUrl} alt={``} />
          <div className={`bg-gradient-to-b from-transparent to-black/40 absolute inset-0 z-10 size-full`}></div>
        </div>
        <div className={`text-xl font-oswald uppercase text-right text-paragraph-1 grid gap-y-1`}>
          <p className={`tracking-wider font-light`}>available for <br /> freelance work</p>
          <p className={`text-4xl font-bold text-paragraph-5`}>JAN' 25</p>
        </div>
      </div>
    </div>
  );
};

export const HeroSectionDesktop = () => {
  return (
    <>

    </>
  )
}