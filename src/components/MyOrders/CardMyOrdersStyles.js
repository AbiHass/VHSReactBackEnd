import styled from "styled-components";

export const MisOrdenesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 12px;
  margin-top: 15px;
  @media (max-width: 425px){
    font-size: 10px;
  }
`;

export const PedidoContainer = styled.div`
  background-color: var(--orange);
  box-shadow: 4px 5px 10px 1px #000000;
  width: 30%;
  border-radius: 15px;
  padding: 15px;
  @media(max-width: 768px){
    width: 90%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 17px;
`;
export const CardId = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;
export const CardPrice = styled.p`
font-size: 20px;
font-weight: bold;
margin-top: 5px;
`;