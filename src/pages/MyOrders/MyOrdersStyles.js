import styled from "styled-components";

export const MisOrdenesContainer = styled.div`
  background-color: var(--orange);
  font-family: var(--font);
  height: 388px;
`;

export const MisOrdenesTitle = styled.h2`
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
`;

export const MisOrdenesBtnContainer = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MisOrdenesBtn = styled.button`
  padding: 15px 25px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--red);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;
