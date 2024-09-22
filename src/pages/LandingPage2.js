import { useCallback } from "react";
import 'animate.css'
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
const LandingPage2 = () => {
  const navigate = useNavigate(); 
  const isSmallScreen = () => {
    return window.matchMedia("(max-width: 640px)").matches;
  };
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">
         <NavBar />

      <img
        className="animate__animated animate__fadeIn absolute top-0 left-0 w-full h-full object-cover"
        alt="LandingPage2"
        src="/LandingPage2.png"
      />
      <img
        className="animate__animated animate__fadeInLeft absolute top-[13rem] left-[15rem]"
        alt="mascot"
        src="/mascot.png"
        style={{
          width: isSmallScreen() ? '50%' : 'auto',
          left: '10%',
          transform: isSmallScreen() ? 'translateX(-50%)' : 'none',
        }}
      />
      <img
        className="animate__animated animate__fadeInRight absolute top-[15rem] left-[55rem]"
        alt="Text"
        src="/Text.png"
        style={{
          width: isSmallScreen() ? '40%' : 'auto',
          left: '60%',
          top:"40%",
          transform: isSmallScreen() ? 'translateX(-50%)' : 'none',
        }}
      />
    </div>
  );
};

export default LandingPage2;
