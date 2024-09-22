import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Persona from "../Components/Persona";
import teamData from "./Team.json"; // Importing the team data
import Footer from "../Components/Footer";
const Team = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const teams = {
    "Faculty": teamData.Faculties,
    "Core": teamData.Core,
    "Content": teamData.Content,
    "Design": teamData.Design,
    "Marketing": teamData.Marketing,
    "SocialMedia": teamData["Social Media"],
    "Management": teamData.Management,
    "Technical": teamData.Technical,
    "Spokesperson": teamData.Spokesperson,
    "Ambassadors": teamData.Ambassadors
  };

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
    <div style={isSmallScreen ? { overflow: 'hidden' } : {}} >
      <NavBar />
      <img
        style={{
          width: '100vw',  //full screen
          zIndex: 1,  
          marginTop: isSmallScreen ? '-7rem' : 'auto', 
        }}
        className="animate__animated animate__fadeInDown absolute top-[11rem] left-0 object-contain"
        src="/team_banner.png"
      />
      {Object.entries(teams).map(([teamName, teamMembers], index) => (
        <div key={teamName} style={{ marginTop: isSmallScreen ? index === 0 ? "10rem" : "3rem" :  index === 0 ? "30rem" : "8rem", textAlign: "center" }}>
          <img src={`/${teamName}.png`} alt={teamName} style={{ width: isSmallScreen ? '100%' : 'auto',  marginTop: isSmallScreen ? '-90rem' : 'auto' 
          }} />
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginLeft: isSmallScreen ? '1rem' : '10rem', 
          }}>
            {teamMembers.members.map((member, index) => (
              <div key={index} style={{ width: isSmallScreen ? '35%' : '20%', padding: "1.5rem" }}>
                <Persona name={member.name} pos={member.position} imgUrl={member.link} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <section style={{fontSize: isSmallScreen ? '3rem' : '15rem'}} className="font-goblin text-yellow-200 text-[15rem] uppercase text-center">
        Inspire
      </section>
      <Footer />

    </div>
  );
};

export default Team;
