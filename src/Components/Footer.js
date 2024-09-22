import { useCallback, useEffect, useState } from "react";

const Footer = () => {
    const onMenuContainerClick = useCallback(() => {
        // Please sync "Homepage" to the project
    }, []);

    const onAboutUsText2Click = useCallback(() => {
        // Please sync "About" to the project
    }, []);

    const onEventsTextClick = useCallback(() => {
        // Please sync "Events" to the project
    }, []);

    const onContactUsTextClick = useCallback(() => {
        // Please sync "Contact Us" to the project
    }, []);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
      };
      
  
      // Initial check
      checkScreenSize();
  
      // Add event listener for screen size changes
      window.addEventListener("resize", checkScreenSize);
  
      // Remove event listener on component unmount
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []); 
    return (
        <footer className="font-sen w-[120rem]  bg-black flex flex-col items-start justify-start pt-[8.181rem] pb-[9.381rem] pr-[11.625rem] pl-[20.062rem] box-border gap-[1.5rem] text-center text-sm md:text-lg lg:text-xl text-white font-sen mq450:pl-[1.25rem] mq450:pr-[1.25rem] ">
            <div className="h-[42.881rem] relative bg-gray hidden max-w-full" />
            <div className="flex flex-row items-start justify-center max-w-full">
                <h1       style={{
          marginTop: isSmallScreen ? '-6rem' : 'auto', // conditional margin top
          fontSize: isSmallScreen ? '0.8rem' : '2rem',          
          marginLeft: isSmallScreen ? '-15rem' : '20rem', // conditional margin top
          zIndex: 2,
        }} className="relative tracking-[0.02em] leading-[5.938rem] lg:ml-96  font-sen inline-block shrink-0z-[1]">
                    INSTITUTION’S INNOVATION COUNCIL
                </h1>
            </div>
            <div  style={{
          marginTop: isSmallScreen ? '-1rem' : 'auto', // conditional margin top
          fontSize: isSmallScreen ? '0.8rem' : '1.1rem',          
          marginLeft: isSmallScreen ? '-19rem' : '-10rem', // conditional margin top
          zIndex: 2,
        }} className="ml-[-10rem] self-stretch flex flex-row items-start justify-between gap-[1rem] text-left lg:text-[1rem] text-white font-semi-bold-16">
                <div className="flex flex-col items-start justify-start gap-[1.75rem]">
                    <div className="w-[8.375rem] relative leading-[1.5rem] font-black flex items-center z-[1]">
                        Quick Links
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.687rem]">

                        </div>
                        <div className="w-[8.375rem] flex flex-col items-start justify-start">
                            <div
                                className="self-stretch flex flex-row items-start justify-start cursor-pointer z-[1]"
                                onClick={onMenuContainerClick}
                            >
                                <div className="h-[2.25rem] flex-1 relative leading-[1.5rem] font-medium flex items-center">
                                    Home
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start">
                                <div className="h-[2.25rem] flex-1 relative leading-[1.5rem] font-medium flex items-center z-[1]">
                                    About Us
                                </div>
                            </div>
                        </div>
                        <div className="w-[6.25rem] h-[2rem] relative leading-[1.5rem] font-medium flex items-center shrink-0 z-[1]">
                            Teams
                        </div>
                        <div
                            className="w-[6.25rem] h-[2.125rem] relative leading-[1.5rem] font-medium flex items-center shrink-0 cursor-pointer z-[1]"
                            onClick={onEventsTextClick}
                        >
                            Events
                        </div>
                        <div
                            className="w-[6.25rem] h-[2.125rem] relative leading-[1.5rem] font-medium flex items-center shrink-0 cursor-pointer z-[1]"
                            onClick={onContactUsTextClick}
                        >
                            Contact Us
                        </div>
                    </div>
                </div>
                <div style={{
          marginTop: isSmallScreen ? '-0.3rem' : 'auto', // conditional margin top
          fontSize: isSmallScreen ? '0.8rem' : '1.1rem',          
          marginLeft: isSmallScreen ? '-75rem' : '15rem', // conditional margin top
          zIndex: 2, }} className="w-[8.375rem] flex flex-col items-start justify-start gap-[1.187rem]">
                    <div  className="self-stretch h-[2.125rem] relative leading-[1.5rem] font-black flex items-center shrink-0 z-[1]">
                        Connect
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.781rem]">
                       
                        <a href="https://example.com/facebook" target="_blank">
                            <img
                                className="w-[2.356rem] h-[2.356rem] relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/facebook@2x.png"
                            />
                        </a>

                        <a href="https://example.com/instagram" target="_blank">
                            <img
                                className="w-[2.356rem] h-[2.356rem] relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/instagram@2x.png"
                            />
                        </a>

                        <a href="https://example.com/linkedin" target="_blank">
                            <img
                                className="w-[2.356rem] h-[2.356rem] relative object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/linkedin@2x.png"
                            />
                        </a>

                        <a href="https://example.com/vector" target="_blank">
                            <img
                                className="w-[2.25rem] h-[1.8rem] relative z-[1]"
                                loading="lazy"
                                alt=""
                                src="/vector.svg"
                            />
                        </a>

                    </div>
                </div>
                <div className="w-[17.813rem] flex flex-col items-start justify-start gap-[1.375rem]">
                    <div  style={{
          marginTop: isSmallScreen ? '-0.3rem' : 'auto', // conditional margin top
          fontSize: isSmallScreen ? '0.8rem' : '1rem',          
          marginLeft: isSmallScreen ? '-74rem' : '-0rem', // conditional margin top
          zIndex: 2,}} className="self-stretch flex flex-col items-start justify-start gap-[0.937rem]">
                        <div className="self-stretch h-[2.125rem] relative leading-[1.5rem] font-black flex items-center shrink-0 z-[1]">
                            Contact
                        </div>
     
                    </div>
                    <div className="w-[16.5rem] relative leading-[1.5rem] flex items-center max-h-[12.125rem] [word-break:break-word] z-[1]">
                        <span className="w-full">
                            <p style={{
          marginTop: isSmallScreen ? '-0.3rem' : 'auto', // conditional margin top
          fontSize: isSmallScreen ? '0.8rem' : '1rem',          
          marginLeft: isSmallScreen ? '-77.5rem' : '0rem',
          width: isSmallScreen ? '10rem' : 'auto', // conditional margin top
          zIndex: 2,}} className="m-0">
                                <b className="font-semi-bold-16">Address :</b>
                                <span >
                                    {" "}
                                    New IT Building, N-602, MIT ADT University, Rajbaugh, Solapur -
                                    Pune Hwy, near Bharat Petrol Pump, Loni Kalbhor, Maharashtra
                                    412201
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media only screen and (max-width: 768px) {
                    .font-sen,
                    .text-inherit,
                    .leading-[5.938rem],
                    .h-[0.313rem],
                    .w-[10.75rem],
                    .h-[2.25rem],
                    .h-[2rem],
                    .h-[2.125rem],
                    .h-[1.8rem],
                    .text-[1rem],
                    .text-[2rem],
                    .text-white,
                    .font-semi-bold-16 {
                        font-size: 50%;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
