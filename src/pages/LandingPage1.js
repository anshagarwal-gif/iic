import { useCallback, useState } from "react";
import styles from './LandingPage1.module.css'
import {useNavigate} from "react-router-dom";
import ReactDOM from 'react-dom'; 
import Footer from '../Components/Footer';

const LandingPage1 = () => {
  const navigate = useNavigate();
  const isSmallScreen = () => {
    return window.matchMedia("(max-width: 640px)").matches;
  };
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
  
  const [showIntro, setShowIntro] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [showRocket, setShowRocket] = useState(false);
  const [showText, setShowText] = useState(false);

  const onLetsStartTextClick = useCallback(() => {
    console.log("Let's start button clicked!")
    setShowIntro(false);  // hide the INNOVATE text and button
    // show the rocket and asteroids after INNOVATE disappears
    setTimeout(() => {
      setShowRocket(true);
    }, 300);  

    setTimeout(() => {
      setShowText(true);
    }, 2300); // 300ms for INNOVATE + 2 seconds for rocket

    setTimeout(() => {
      navigate("/LandingPage2");    }, 5800); // 2300ms for above + 2 seconds for text
  }, [navigate]);

  // return (
  //   <div className="relative bg-white w-full min-h-screen overflow-hidden text-center text-[0.7rem] lg:text-[1.7rem] text-black font-source-sans-pro">

  //     <img
  //       className="absolute top-0 left-0 w-full h-full object-cover"
  //       alt="Rocket In Space"
  //       src="/Rocket In Space.png"
  //     />
  //     {showNav && (
  //       <>
  //         <nav style={{
  //           zIndex: 2,
  //         }} className="absolute top-0 bg-gray w-full overflow-hidden p-2 lg:p-[2rem] flex flex-wrap justify-around items-center">
  //           <img
  //             className="w-20 h-auto lg:w-[11.69rem] lg:h-[6.75rem]"
  //             alt="Logo"
  //             src="/logo-3-1@2x.png"
  //           />
  //           <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
  //             <span onClick={onHomeTextClick} className="cursor-pointer">Home</span>
  //             <span onClick={onAboutTextClick} className="cursor-pointer">About</span>
  //             <span onClick={onTeamTextClick} className="cursor-pointer">Teams</span>
  //             <span onClick={onEventsTextClick} className="cursor-pointer">Events</span>
  //             <span onClick={onContactTextClick} className="cursor-pointer">Contact</span>
  //           </div>
  //           <img
  //             className="flex-shrink-0 w-20 h-auto lg:w-[11.75rem] lg:h-[6.31rem]"
  //             alt="Another Image"
  //             src="/image-7@2x.png"
  //           />
  //         </nav>
  //       </>)}
  //     {showIntro && (<>
  //       <div className="absolute top-[20rem] left-[4rem] lg:left-[18.94rem] sm:text-center lg:text-left text-[1rem] lg:text-[3rem] xl:left-[33rem] xl:top-[25rem] font-inter">
  //         <div className="mb-8 lg:mb-4  text-[3rem] md:text-6x1 lg:text-[10.5rem] text-white font-whyte-inktrap">
  //           INNOVATE
  //         </div>

  //         <div className="absolute sm:top-[15rem] lg:top-[15rem] left-[5rem] lg:left-[20.94rem] text-left text-[1rem] lg:text-[3rem] font-inter">

  //           <div
  //             style={{ filter: 'drop-shadow(0 0 20px white)' }}
  //             className="rounded-full lg:text-[2rem] w-auto h-auto bg-white p-2 lg:p-[2rem] cursor-pointer"
  //             onClick={onLetsStartTextClick}
  //           >

  //             <b className="tracking-wider lg:tracking-[0.04em]">Let’s start</b>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //     )}
  //     {showRocket && (
  //       <>
  //         <img
  //           style={{
  //             width: isSmallScreen() ? '200vw' : '100vw', // 50% less width if screen is small
  //             height: isSmallScreen() ? '120vh' : '120vh', // 50% less height if screen is small
  //             position: 'absolute',
  //             zIndex: 1,
  //           }}
  //           className={`absolute ${showRocket ? styles.asteroidAnimation : ''}`}
  //           alt="Rocket And Asteroids"
  //           src="/asteroids.png"

  //         />

  //         <img
  //           className={`absolute ${showRocket ? styles.rocketAnimation : ''}`}
  //           alt="Rocket And Asteroids"
  //           src="/Rocket.png"
  //           style={{
  //             width: isSmallScreen() ? '70%' : 'auto',
  //             height: 'auto',
  //             marginTop: isSmallScreen() ? '12rem' : '0', // Add margin top 4rem if screen is small
  //           }}
  //         />
  //       </>
  //     )}/

  //     {showText && (
  //       <div className={`absolute ${showText ? styles.textAnimation : ''}`} style={{ fontSize: isSmallScreen() ? '2rem' : '3rem' }}>
  //       <span>Innovation</span><br />
  //         <span>Inspiration</span><br />
  //         <span>Ideation</span><br />
  //         <span>    </span>
  //       </div>
  //     )}

  //   </div>
  
  // );
  return (
    <div className="min-h-screen bg-white text-center font-source-sans-pro">
      
      {/* Header Section */}
      <header className="flex justify-between items-center p-5">
        <img src="/logo-3-1@2x.png" alt="IIC Logo" className="h-12" />
        <div className="flex-shrink-0 space-x-[0.3rem] lg:space-x-[1.5rem]">
              <span onClick={onHomeTextClick} className="cursor-pointer">Home</span>
               <span onClick={onAboutTextClick} className="cursor-pointer">About</span>
               <span onClick={onTeamTextClick} className="cursor-pointer">Teams</span>
             <span onClick={onEventsTextClick} className="cursor-pointer">Events</span>
               <span onClick={onContactTextClick} className="cursor-pointer">Contact</span>
             </div>
        <img src="/image-7@2x.png" alt="MIT ADT Logo" className="h-12" />
      </header>
  
      {/* Main Section */}
      <section className="my-20">
      <h1 className="text-6xl font-bold">  
  <span className="text-black" style={{  
   background: 'linear-gradient(to right, #C7B8EA, #87CEEB)',  
   WebkitBackgroundClip: 'text',  
   WebkitTextFillColor: 'transparent',  
   textShadow: '6px 1px 0px rgba(0, 0, 0, 0.5)',  
   fontSize: '64px',  
   fontWeight: 'bold',  
   fontFamily: 'Barlow Semi Condensed'  
  }}> BHARAT 2.0</span>
        </h1>
        <h2 className="text-2xl my-4">  
  <span className="text-blue-500" style={{  
   fontSize: '24px',  
   fontWeight: 'bold',  
   fontFamily: 'Barlow Semi Condensed',  
   textShadow: '0 0 10px rgba(0, 0, 0, 0.2)'  
  }}>  
   <span style={{ color: '#C7B8EA', fontSize:'35px' }}>B</span>  
   <span style={{ color: '#000' }}>usiness</span>  
   
   &nbsp; 
   <span style={{ color: '#87CEEB', fontSize:'35px' }}>H</span>  
   <span style={{ color: '#000' }}>eroes</span>  
   &nbsp; 
   <span style={{ color: '#C7B8EA' ,fontSize:'35px' }}>A</span>  
   <span style={{ color: '#000' }}>spiring</span>  
   &nbsp; 
   <span style={{ color: '#000' }}>to</span>  
   &nbsp;
   <span style={{ color: '#87CEEB', fontSize:'35px' }}>R</span>  
   <span style={{ color: '#000' }}>ise</span>  
   &nbsp; 
   <span style={{ color: '#000' }}>&</span>  
   &nbsp;
   &nbsp;
   <span style={{ color: '#C7B8EA', fontSize:'35px' }}>A</span>  
   <span style={{ color: '#000' }}>chieve</span>  
   &nbsp; 
   <span style={{ color: '#87CEEB', fontSize:'35px' }}>T</span>  
   <span style={{ color: '#000' }}>ogether</span>  
  </span>  
</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          This is a fantastic opportunity for young innovators to showcase their ideas and take the first steps towards building successful ventures. Are you planning to participate or know someone who is?
        </p>
  
        <div className="mt-10">
          <a href="/bharat" className="bg-blue-800 text-white px-8 py-4 text-2xl font-bold rounded-full inline-block transition-transform transform hover:scale-105">
          <span style={{fontFamily:'Sen'}}> Register Here</span>
          </a>
          {/* Cursor Image */}
        {/* <img
          src="/Frame 5759.png" // path to your cursor image
          alt="Cursor" 
          className="fixed"
          style={{
            
            top: "46vh",  // Adjust according to where you want the cursor image
            left: "58wh",  // Adjust according to where you want the cursor image
            transform: "translate(-140%, -50%)", // Center the image
            width: "59px",  // Adjust the size of the cursor image
            height: "40px",
            zIndex: 1000  // Ensure it's above other elements
          }}
        /> */}
        </div>
      </section>


      {/* Stats Section */}
    <section className="flex justify-center space-x-8 my-16">
      <div className="text-center border-20 border-purple-300 p-4 rounded-lg">
        <h3 className="text-4xl  font-bold">45+</h3>
        <p className="text-lg">Startups Participated</p>
      </div>
      <div className="text-center border-2 border-gray-300 p-4 rounded-lg">
        <h3 className="text-4xl font-bold">1K</h3>
        <p className="text-lg">Participants</p>
      </div>
      <div className="text-center border-2 border-gray-300 p-4 rounded-lg">
        <h3 className="text-4xl font-bold">1 Lac</h3>
        <p className="text-lg">Prize Pool</p>
      </div>
      <div className="text-center border-2 border-gray-300 p-4 rounded-lg">
        <h3 className="text-4xl font-bold">10+</h3>
        <p className="text-lg">Startups Received Investment</p>
      </div>
    </section>


    <section className="py-20 bg-purple">
  <h3 className="text-70xl  font-bold mb-10">Why BHARAT?</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
      <img
        src="/rocket.png" // Replace with the actual image path
        alt="Purpose Image"
        className="h-40 w-50 object-cover rounded-t-lg"
      />
      <h4 className="text-2xl text-white font-bold mt-4">Purpose</h4>
      <p className="mt-2 text-white">Platform for students to pitch ideas & get funded.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="/opportunities-image.jpg" // Replace with the actual image path
        alt="Opportunities Image"
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <h4 className="text-2xl font-bold mt-4">Opportunities</h4>
      <p className="mt-2">Networking, mentorship, exposure, funding.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="/funding-image.jpg" // Replace with the actual image path
        alt="Funding Image"
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <h4 className="text-2xl font-bold mt-4">Funding</h4>
      <p className="mt-2">Selected ideas can receive funding to bring them closer to reality.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="/participants-image.jpg" // Replace with the actual image path
        alt="Participants Image"
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <h4 className="text-2xl font-bold mt-4">Participants</h4>
      <p className="mt-2">Students, startups, industry leaders.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="/growth-image.jpg" // Replace with the actual image path
        alt="Growth Image"
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <h4 className="text-2xl font-bold mt-4">Growth</h4>
      <p className="mt-2">Helps startups connect with investors and resources.</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="/visibility-image.jpg" // Replace with the actual image path
        alt="Visibility Image"
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <h4 className="text-2xl font-bold mt-4 ">Visibility</h4>
      <p className="mt-2">High-market exposure for ideas.</p>
    </div>
  </div>
</section>
  
      {/* Glimpses Section */}
   <div>
    {/* <img src="rocket.svg" ></img>    */}
      <section className="relative py-12">
        {/* Background strip */}
       
  <div className="absolute inset-0 top-30 flex items-center justify-center">
    {/* Left half of the strip */}
    <div className="h-9 bg-blue-800 w-1/2"></div>

    {/* Gap for the title */}
    <div className="text-center">
      {/* Empty space for the title */}
      {/* Glimpses Title at the center */}
  <div className="relative z-10 flex justify-center">
    <h3 className="text-3xl font-bold text-blue-800  bg-transparent px-4 z-10"style={{fontSize: '24px',  
   fontWeight: 'bold',  
   fontFamily: 'Sen', }}>
      Glimpses of BHARAT 1.0
    </h3>
  </div>
    </div>

    {/* Right half of the strip */}
    <div className="h-9 bg-blue-800 w-1/2"></div>
  </div>
  

  {/* Rocket Icon on the left of the strip */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
    <img src="/rocket.png" alt="Rocket Icon" className="h-12 w-12" />
  </div>
  

  
{/*         
        <h3 className="text-3xl font-bold my-8 text-purple-500" style={{  
   fontSize: '24px',  
   fontWeight: 'bold',  
   fontFamily: 'Sen',  
   textShadow: '0 0 10px rgba(0, 0, 0, 0.2)',  
   color:"purple",
  }}> Glimpses of BHARAT 1.0</h3> */}
  </section>
<section>
        <div className="flex justify-center space-x-4 px-4">
          <img src="/glimpse1.jpg" alt="Glimpse 1" className="h-64 object-cover rounded-lg shadow-md" />
          <img src="/glimpse2.jpg" alt="Glimpse 2" className="h-64 object-cover rounded-lg shadow-md" />
          <img src="/glimpse3.jpg" alt="Glimpse 3" className="h-64 object-cover rounded-lg shadow-md" />
          <img src="/glimpse4.jpg" alt="Glimpse 3" className="h-64 object-cover rounded-lg shadow-md" />
        </div>
      </section>
      &nbsp;
      </div>
      <div className="container">
      <Footer/>
      </div>
    </div>
  
  );
};

export default LandingPage1;
