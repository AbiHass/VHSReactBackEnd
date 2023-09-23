import { styled } from "styled-components";

export const AboutContainerStyled = styled.div`
  background-image: url(https://res.cloudinary.com/dsaiboxvk/image/upload/v1692313569/VHS/exorcista_rk3e25.jpg) ;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 230px 20px 200px 20px;

  @media(max-width: 673px){
    height: 350px;
  } 
`;
export const AboutContainerText = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media(max-width: 874px){
    gap:20px;
    }
    @media(max-width: 673px){
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    color: white;
    font-size: 40px;
    font-family: system-ui;
    text-transform: uppercase;

    @media(max-width: 1040px){
    font-size: 30px;
    }
    @media(max-width: 425px){
    font-size: 28px;
    }
    
  }
  span {
    color: var(--orange);
    font-size: 40px;
    font-family: system-ui;
    text-transform: uppercase;
    font-weight: bold;

    @media(max-width: 1040px){
    font-size: 30px;
    }
    @media(max-width: 425px){
    font-size: 28px;
    }
  }
  p {
    color: white;
    font-family: system-ui;
    font-size: 23px;
    margin-top: 8px;

    @media(max-width: 1040px){
    font-size: 18px;
    }
    @media(max-width: 425px){
    font-size: 16px;
    }
  }
`;

