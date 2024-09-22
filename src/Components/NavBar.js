import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTeamTextClick = useCallback(() => {
    navigate("/Team");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    navigate("/Events");
  }, []);

  const onContactTextClick = useCallback(() => {
    navigate("/Contactus");
  }, [navigate]);

  return (
    <nav style={{ zIndex: 2 }} className="font-source-sans-pro text-center text-[0.7rem] lg:text-[1.7rem] text-black absolute top-0 bg-gray w-full overflow-hidden p-2 lg:p-[2rem] flex flex-wrap justify-around items-center">
      <img
        className="w-20 h-auto lg:w-[11.69rem] lg:h-[6.75rem]"
        alt="Logo"
        src="/logo-3-1@2x.png"
      />
      <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
        <span onClick={onHomeTextClick} className="cursor-pointer">Home</span>
        <span onClick={onAboutTextClick} className="cursor-pointer">About</span>
        <span onClick={onTeamTextClick} className="cursor-pointer">Teams</span>
        <span onClick={onEventsTextClick} className="cursor-pointer">Events</span>
        <span onClick={onContactTextClick} className="cursor-pointer">Contact</span>
      </div>
      <img
        className="flex-shrink-0 w-20 h-auto lg:w-[11.75rem] lg:h-[6.31rem]"
        alt="Another Image"
        src="/image-7@2x.png"
      />
    </nav>
  );
};

export default NavBar;