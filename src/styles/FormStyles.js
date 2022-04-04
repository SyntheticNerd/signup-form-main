import styled from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 24px;
  border-radius: 1em;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  & > p {
    text-align: center;
    color: hsl(246, 25%, 77%);
    font-size: 0.9em;
    margin-top: 0px;
    margin-bottom: 32px;
    b {
      color: hsl(0, 100%, 74%);
    }
  }
  & > div {
    & > input {
      border: 2px solid lightgrey;
      outline: none;
      padding: 3.5%;
      font-family: "Poppins";
      font-weight: 600;
      font-size: 1em;
      border-radius: 0.5em;
      width: 93%;
      &:focus {
        border: 2px solid hsl(249, 10%, 26%);
      }
      ${({ valid }) =>
        valid &&
        `
        border: 2px solid red;
      `}
    }
  }

  input[type="submit"] {
    background-color: hsl(154, 59%, 51%);
    color: white;
    font-family: "Poppins";
    font-weight: 600;
    letter-spacing: 0.15em;
    padding: 3.5%;
    border-radius: 0.5em;
    border: 2px solid hsl(154, 40%, 51%);
    box-shadow: 0px 4px 0px hsl(154, 40%, 51%);
  }
`;
