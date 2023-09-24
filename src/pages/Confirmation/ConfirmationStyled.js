import styled from "styled-components";

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  background: var(--orange);
  font-family: var(--font);
`;

export const TitleStyled = styled.h1`
  margin-top: 30px;
  @media (max-width: 320px) {
    margin-top: 15px;
    font-size: 25px;
  }
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  p {
    margin-bottom: 15px;
    font-size: 18px;
    @media (max-width: 320px) {
      font-size: 15px;
      margin-bottom: 1px;
    }
  }
  img {
    width: 260px;
    height: 245px;
    margin: 20px 0;
    border-radius: 10px;
    @media (max-width: 320px) {
      width: 230px;
      height: 210px;
    }
  }
`;
