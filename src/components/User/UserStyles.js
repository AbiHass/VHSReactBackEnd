import styled from "styled-components";

export const UserStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  background-color: var(--orange);
  padding: 20px;
  font-family: var(--font);
  font-weight: bold;
  font-size: 20px;
  text-transform:capitalize;
  
`;
export const ButtonUserStyles = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #8e8989;
  margin-left: 13px;
  text-transform: uppercase;
  @media(max-width: 425px){
    padding: 7px 10px;
  }
`;
