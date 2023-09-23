import React from "react";
import { AboutContainerStyled, AboutContainerText } from "./AboutStyles";
import { FaHeart, FaTruck } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainerStyled>
      <AboutContainerText>
        <div>
          <h1>
            El mejor cine para 
            </h1>
            <span>Coleccionistas.</span>
          
          <p>Clásicos del cine en VHS en su empaque original.</p>
        </div>
        <div>
          <div>
              <p> <FaTruck/> Envíos Internacionales</p>
          </div>
          <div>
            <p> <FaHeart/> Free Shipping +USD 50 </p>
          </div>
        </div>
      </AboutContainerText>
    </AboutContainerStyled>
  );
};

export default About;
