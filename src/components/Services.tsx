import {motion as m} from "framer-motion";
import {AnimateWord} from "./AnimateText.tsx";
import {ServiceTabs} from "./ServiceTabs.tsx";

type Service = {
		title: string;
    text: string;
		services: string[]
}

export const Services = () => {

  const services: Service[] = [
    {
      title: "web development",
      text: "A website developed to captivate and convert can elevate your brand to new heights. My custom-coded" +
          " sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with" +
          " a focus on animation—keeping your audience engaged and returning.",
      services: ['CMS integration', 'motion & animation', 'responsive design']
    },
    {
      title: "API development",
      text: "Streamlined API solutions drive seamless connectivity and enhanced functionality. I create robust" +
          " and secure integrations tailored to your needs, ensuring smooth data flow between platforms and" +
          " delivering scalable, future-ready systems.",
      services: ['API integration', 'Third-party integrations', 'User authentication']
    },
    {
      title: "SEO",
      text: "Effective SEO strategies ensure your brand stands out in search results. With meticulous optimization," +
          " I improve your site's visibility, driving organic traffic and delivering measurable growth for" +
          " long-term success.",
      services: ["technical seo", "on-Page optimization", "SEO audits & analysis"]
    }
  ];

		return (
        <section
            className={`bg-black rounded-t-2xl sticky z-30 top-0 py-14 max-w-[1690px] px-4 xs:px-6 sm:px-8 lg:px-10 w-full mx-auto`}>
          <div className={`grid gap-10 relative`}>
            <h2 className={`text-heading-2 uppercase font-inter heading-two font-medium tracking-tighter flex flex-wrap overflow-hidden`}>
              {"how i can help you/".split("").map((l, index) => (
                  (
                      <m.span key={`upper-${index}`} viewport={{once: true}}
                              initial={{y: 35, opacity: 0, scale: 0.9}} whileInView={{
                        y: 0, opacity: 1, scale: 1, transition: {
                          duration: 0.2,
                          delay: index * 0.04
                        }
                      }}
                      >{l === " " ? '\u00A0' : l}</m.span>
                  )
              ))}
            </h2>
            <div className={`text-paragraph-2 flex flex-col items-start gap-y-4`}>
              <m.p initial={{y: 10, opacity: 0}} viewport={{once: true}} whileInView={{
                y: 0,
                opacity: 1,
                transition: {duration: 0.2, ease: "easeInOut", delay: 0.4}
              }}
                   className={`uppercase font-mono font-quattrocento text-md tracking-wider font-medium overflow-hidden`}>(services)
              </m.p>
              <m.p className={`flex flex-wrap pb-8`}>
                <AnimateWord
                    text={'Frustrated with websites/applications that don\'t reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business.'}
                    duration={0.3} delay={0.03} yLevel={15} viewport={true}/>
              </m.p>
            </div>
          </div>
          {/* SERVICES I OFFER */}
          <div className={`flex flex-col gap-y-16 justify-between`}>
            {services.map((service, i) => (
                <ServiceTabs index={i + 1} title={service.title} services={service.services} text={service.text}/>
            ))}
          </div>
        </section>
    );
};
