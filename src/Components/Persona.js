import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const PersonaWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: ${({ isSmallScreen }) => isSmallScreen ? '125.4px' : '250.8px'};
    height: ${({ isSmallScreen }) => isSmallScreen ? '125.4px' : '250.8px'};
    background: #FFFFFF;
    border: 2px solid #808080;
    border-radius: 9.6px;
`;

const Rectangle = styled.div`
    position: absolute;
    width: 100%;
    height: ${({ isSmallScreen }) => isSmallScreen ? '8.4px' : '16.8px'};
    left: 0px;
    top: 0px;
    border-radius: ${({ isSmallScreen }) => isSmallScreen ? '4.8px 4.8px 0 0' : '9.6px 9.6px 0 0'};
    background: ${() => {
        const colors = ['#FF5733', '#6C5CE7', '#5EFB6E', '#FFD700', '#FF1493', '#6495ED']; // List of more unique colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }};
`;

const Ellipse = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: ${({ isSmallScreen }) => isSmallScreen ? '68.7px' : '137.4px'};
    height: ${({ isSmallScreen }) => isSmallScreen ? '68.7px' : '137.4px'};
    left: ${({ isSmallScreen }) => isSmallScreen ? '28.5px' : '57px'};
    top: ${({ isSmallScreen }) => isSmallScreen ? '15.9px' : '31.8px'};
    border: ${({ isSmallScreen }) => isSmallScreen ? '1.2px' : '2.4px'} solid #000000;
    border-radius: 50%;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
`;

const Text = styled.div`
    position: absolute;
    width: ${({ isSmallScreen }) => isSmallScreen ? '100px' : '200px'};
    height: ${({ isSmallScreen }) => isSmallScreen ? '18.5px' : '37px'};
    left: ${({ isSmallScreen }) => isSmallScreen ? '12.5px' : '25px'};
    top: ${({ isSmallScreen }) => isSmallScreen ? '95.1px' : '190.2px'};
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ isSmallScreen }) => isSmallScreen ? '8px' : '14px'};
    line-height: 150%;
    text-align: center;
    color: #000000;
`;

const Text2 = styled.div`
    position: absolute;
    width: ${({ isSmallScreen }) => isSmallScreen ? '100px' : '200px'};
    height: ${({ isSmallScreen }) => isSmallScreen ? '18.5px' : '37px'};
    left: ${({ isSmallScreen }) => isSmallScreen ? '12.5px' : '25px'};
    top: ${({ isSmallScreen }) => isSmallScreen ? '107.6px' : '215.2px'};
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ isSmallScreen }) => isSmallScreen ? '8px' : '14px'};
    line-height: 150%;
    text-align: center;
    color: #808080;
`;

const Persona = ({ name, pos, imgUrl }) => {
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
        <PersonaWrapper isSmallScreen={isSmallScreen}>
            <Rectangle isSmallScreen={isSmallScreen} />
            <Ellipse imgUrl={process.env.PUBLIC_URL + imgUrl} isSmallScreen={isSmallScreen} />
            <Text isSmallScreen={isSmallScreen}>{name}</Text>
            <Text2 isSmallScreen={isSmallScreen}>{pos}</Text2>
        </PersonaWrapper>
    );
};

export default Persona;
