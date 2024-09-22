import React from 'react';
import NavBar from '../Components/NavBar';
import Card1 from '../Components/Card';
import MainContainer from "../Components/Events/MainContainer";
import EventsContainer from "../Components/Events/EventsContainer";
import FrameComponent1 from "../Components/Events/FrameComponent1";
import FrameComponent from "../Components/Events/FrameComponent";
import Footer from '../Components/Footer';
import { useState, useEffect } from "react";

const Events = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
        const isSmall = window.matchMedia("(max-width: 640px)").matches;
        console.log("Is small screen:", isSmall);
        setIsSmallScreen(isSmall);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
}, []);

  return (
    <div>
    <NavBar />
    <img style={{
        width: '100vw',
        position: 'absolute',
        zIndex: 2,
        width: isSmallScreen ? '100vw' : '100vw',
        marginTop: isSmallScreen ? '-6rem' : 'auto', 
        position: 'absolute',
        zIndex: 1,
      }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/eventsbanner.png"
      />
    <div className="w-full mt-40 relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[5.188rem] leading-[normal] tracking-[normal] mq750:gap-[2.563rem] mq450:gap-[1.313rem]">
      <div className="self-stretch h-[64rem] relative bg-white hidden z-[0]" />
      <div className="self-stretch h-[64rem] relative bg-white hidden z-[1]" />
      <div className="self-stretch h-[64rem] relative bg-white hidden z-[2]" />
      <div className="self-stretch h-[64rem] relative bg-white hidden z-[3]" />
      <section className="w-[90.625rem] !m-[0] absolute bottom-[26.688rem] left-[calc(50%_-_725px)] flex flex-row items-start justify-start p-[0.625rem] box-border gap-[0.625rem] z-[2]">
        <div className="h-[91.688rem] flex-1 relative max-w-full">
          <img
            className="absolute top-[0rem] left-[0rem] w-full h-full object-contain"
            alt=""
            src="/ellipse-7.svg"
          />
        </div>
        <div className="h-[0.313rem] w-[24.063rem] absolute !m-[0] bottom-[4.819rem] left-[-1rem] box-border z-[4] border-t-[5px] border-solid border-white" />
        <img
          className="h-[24.5rem] w-[36.125rem] absolute !m-[0] top-[55rem] right-[-19rem] z-[5]"
          loading="lazy"
          alt=""
          src="/ellipse-9.svg"
        />
      </section>
      <img
        className="w-[22.25rem] h-[41.831rem] absolute !m-[0] bottom-[10rem] left-[-12rem] z-[3]"
        alt=""
        src="/polygon-3.svg"
      />
  <section className="font-goblin w-[132rem] absolute !m-[0] bottom-[1rem] left-[-6rem] text-[15rem] tracking-[0.02em] leading-[6.094rem] uppercase text-center inline-block whitespace-nowrap z-[4] mq450:text-[3.75rem] mq450:leading-[2.375rem] mq1050:text-[6rem] mq1050:leading-[3.563rem] text-yellow-200">
        Impart
      </section>
      <MainContainer />
      <div className="self-stretch h-[64rem] relative hidden z-[8]" />
      <section className="w-full h-[137.688rem] absolute !m-[0] top-[12.813rem] right-[0rem] left-[0rem]">
        <img
          className="absolute top-[25.25rem] left-[-3rem] w-[89.375rem] h-[91.688rem] object-contain z-[1]"
          alt=""
          src="/ellipse-6.svg"
        />
        <img
          className="absolute top-[-7rem] left-[40rem] w-[41.063rem] h-[19.438rem] z-[0]"
          alt=""
          src="/ellipse-9-1.svg"
        />
        <img
          className="absolute top-[55rem] left-[103rem] w-[32.125rem] h-[32.125rem] z-[2]"
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <img
          className="absolute top-[80rem] left-[-13.437rem] w-[33.938rem] h-[33rem] z-[5]"
          alt=""
          src="/polygon-1.svg"
        />
        <div className="absolute top-[48.563rem] left-[-25.875rem] bg-goldenrod w-[34.375rem] h-[23.688rem] z-[2]" />
        <img
          className="absolute top-[0.725rem] left-[110rem] w-[32.25rem] h-[41.206rem] z-[2]"
          loading="lazy"
          alt=""
          src="/polygon-2.svg"
        />
          <img
          className="absolute top-[15rem] right-[105rem] w-[32.25rem] h-[41.206rem] z-[2]"
          loading="lazy"
          alt=""
          src="/Rectangle 63.png"
        />
      </section>
      <img
        className="w-full h-[8.375rem] absolute !m-[0] top-[7.619rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 z-[4]"
        alt=""
        src="/group-5754.svg"
      />
      <EventsContainer />
      <FrameComponent1 />

    </div>
    <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Events;

