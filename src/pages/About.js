import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WOW from 'wowjs';
import Footer from '../Components/Footer';
import NavBar from "../Components/NavBar";

const About = () => {
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
    
    <div style={isSmallScreen ? {  overflow: 'hidden', maxWidth: '100vw' } : {}} className="relative bg-white w-full min-h-screen text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
      <NavBar />
      <img
       style={{
        width: isSmallScreen ? '100vw' : '100vw', 
        marginTop: isSmallScreen ? '-6rem' : 'auto', 
        position: 'absolute',
        zIndex: 1,
      }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/headeraboutpage.png"
      />
      <img
        style={{
          width: isSmallScreen ? '40vw' : 'auto', // decrease size if small screen
          marginTop: isSmallScreen ? '-20rem' : 'auto', // conditional margin top
          position: 'absolute',
          marginLeft: isSmallScreen ? '-10rem' : 'auto', // conditional margin top

          zIndex: 2,
        }}
        className="animate__animated animate__fadeInLeft absolute top-[30rem] left-[10rem]"
        src="/aboutimg1.png"
      />
      <img
        className="animate__animated animate__fadeInRight absolute top-[30rem] left-[45rem]"
        src="/textabout.png"
        style={{
          width: isSmallScreen ? '60vw' : 'auto', // decrease size if small screen
          marginTop: isSmallScreen ? '-20rem' : 'auto', // conditional margin top
          marginLeft: isSmallScreen ? '-37rem' : 'auto', // conditional margin top
          position: 'absolute',
          zIndex: 2,
        }}
      />
      <img
        className="animate__animated animate__fadeInUp absolute top-[30rem] left-[-35rem]"
        alt="Text"
        src="/aboutshapes1.png"
        style={{
          width: isSmallScreen ? '35rem' : 'auto',          
          marginLeft: isSmallScreen ? '28rem' : 'auto', 
          marginTop: isSmallScreen ? '-19rem' : 'auto', 
          position: 'absolute',
          zIndex: 1,
        }}
      />
      <img
        style={{
          width: isSmallScreen ? '100vw' : '100vw', 
          marginTop: isSmallScreen ? '-35rem' : 'auto',
          position: 'absolute',
          zIndex: 1,
        }}
        className="wow animate__animated animate__fadeInDown absolute top-[61rem] left-0 object-contain"
        src="/headeraboutpage2.png"
      />
      <img
        className="wow animate__animated animate__fadeInLeft absolute top-[80rem] left-[7rem]"
        src="/aboutimg2.png"
        style={{
          marginTop: isSmallScreen ? '-50rem' : 'auto',
          width: isSmallScreen ? '8rem' : 'auto', 
          marginLeft: isSmallScreen ? '-7rem' : 'auto', 
          position: 'absolute',
          zIndex: 2,
        }}
        
      />
      <img
        className="wow animate__animated animate__fadeInRight absolute top-[85rem] left-[45rem]"
        src="/textabout2.png"
        style={{
          width: isSmallScreen ? '60vw' : 'auto', 
          marginTop: isSmallScreen ? '-54rem' : 'auto', // conditional margin top
          marginLeft: isSmallScreen ? '-36.5rem' : 'auto', // conditional margin top          
          position: 'absolute',
          zIndex: 2,
        }}
      />
      <img
        className="wow animate__animated animate__fadeInUp absolute top-[70rem] left-[-20rem]"
        src="/aboutshapes2.png"
        style={{
          width: isSmallScreen ? '35rem' : 'auto', // decrease size if small screen
          position: 'absolute',
          zIndex: 1,
          marginLeft: isSmallScreen ? '15rem' : 'auto', 
          marginTop: isSmallScreen ? '-44rem' : 'auto', 
          position: 'absolute',
        }}
      />
    </div>
  );
};

export default About;
