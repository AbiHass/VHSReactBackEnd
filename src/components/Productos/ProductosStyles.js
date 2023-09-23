import { styled } from "styled-components";


export const ProductosContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 5px;
  gap: 30px;
  text-align: center;
  flex-wrap: wrap;
  background-color: var(--orange);
  @media(max-width: 495px){
    gap: 15px;
  }
`;
export const ProductoContainerStyled = styled.div`
  background-color: #ffffffb5;
  width: 315px;
  height: 520px;
  box-shadow: 4px 5px 10px 5px #000000;
  font-family: system-ui;
  border-radius: 15px;

  @media(max-width: 1040px){
    width: 280px;
    height: 470px;
    }
  @media(max-width: 615px){
    width: 210px;
    height: 360px;
    }
  @media(max-width: 461px){
    width: 270px;
    height: 410px;
    }
  img {
  width: 250px;
  height: 375px;
  margin-top: 15px;
  border-radius: 15px;

  @media(max-width: 1040px){
    width: 230px;
    height: 350px;
    }
  @media(max-width: 615px){
    width: 160px;
    height: 230px;
    }
    @media(max-width: 461px){
    width: 200px;
    height: 290px;
    }
}
`;
export const ProductInfo = styled.div`
h2 {
  font-size: 20px;
  display: flex;
  margin-left: 21px;
  margin-bottom: 3px;
  @media(max-width: 1040px){
   font-size: 16px;
    }
    @media(max-width: 461px){
      font-size: 17px;
    }
}
h1 {
  font-size: 15px;
  display: flex;
  margin-left: 21px;
  font-weight: normal;

  @media(max-width: 1040px){
    font-size: 12px;
    }
    @media(max-width: 461px){
      font-size: 13px;
    }
}

`;
export const ProductPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 19px;
  margin-right: 15px;
  font-weight: 700;
  text-decoration: underline;
  @media(max-width: 1040px){
    font-size: 15px;
    }
    @media(max-width: 461px){
      font-size: 17px;
    }
`;
export const BtnAdd = styled.button`
   cursor: pointer;
  padding: 8px 25px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  background: var(--red);

  @media(max-width: 615px){
    font-size: 12px;
    padding: 5px 18px;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: var(--orange);
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 12px 15px;
  border-radius: 15px;
  margin: 40px 0;
  font-family: var(--font);
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--green);
  font-size: 16px;
  border: none;
  @media(max-width: 425px){
   font-size: 14px;
   padding: 10px 12px;
  }
`;