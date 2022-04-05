import styled from "styled-components";

export const ContentWrapper = styled.div`
  font-family: "Poppins";
  color: white;
  display: flex;
  height: 100vh;
  max-height: 1080px;
  max-width: 1440px;
  padding: 0% 10%;
  gap: 64px;
  text-align: left;
  align-items: center;
  margin: auto;
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-intro-desktop.png"});
  background-color: hsl(0, 100%, 74%);
  background-size: 100%;
  background-position: top;
  & > section {
    width: 50%;
    & > h1 {
        margin: 5% 0;
    }
    & > p {
      font-weight: 500;
      font-size: 1.2em;
      margin: 0;
    }
  }
  h1 {
    font-size: 4em;
  }
`;

export const PromoBtn = styled.button`
  width: 100%;
  font-size: 1.2em;
  font-weight: 400;
  padding: 4%;
  margin-bottom: 32px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0.5em;
  background-color: hsl(248, 32%, 49%);
  color: white;
  transition: transform 0.3s;
  &:hover{
      transform: scale(1.1);
  }
`;
