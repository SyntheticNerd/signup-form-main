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
  input[type="submit"] {
    background-color: hsl(154, 59%, 51%);
    color: white;
    font-family: "Poppins";
    font-weight: 600;
    letter-spacing: 0.15em;
    padding: 3.5%;
    border-radius: 0.5em;
    border: none;
    box-shadow: 0px 4px 0px hsl(154, 50%, 40%);
    cursor: pointer;
    &:hover{
        background-color: hsl(154, 70%, 60%);
    }
  }
`;
export const InputWrap = styled.div`
  border: 2px solid ${({ valid }) => (valid === "true" ? `lightgrey` : `red`)};
  border-radius: 0.5em;
  position: relative;
  &:focus-within {
    border: 2px solid
      ${(props) => (props.valid === "true" ? `hsl(249, 10%, 26%)` : `red`)};
  }
  & > input {
    border: none;
    outline: none;
    padding: 3.5%;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1em;
    border-radius: 0.5em;
    width: 93%;
  }

  &::before {
    ${({ valid }) => valid === "true" && `display: none`}
    content: "${({ errormsg }) => errormsg}";
    font-style: italic;
    font-size: 0.8em;
    position: absolute;
    bottom: -40%;
    right: 0%;
    color: hsl(0, 100%, 74%);
  }

  &::after {
    ${({ valid }) => valid === "true" && `display: none`}
    content: "";
    background-image: url(${process.env.PUBLIC_URL + "/images/icon-error.svg"});
    padding: 12px;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
