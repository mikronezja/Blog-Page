import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  gap: 2vh; /* Adds spacing between the items */
  width: 100%; /* Full width of the viewport */
`;

export const StyledInput = styled.input`
  position: relative;
  width: 10vw;
  height: 5vh;
  font-size: 3vh;
  font-family: "Cute big font";
  background-color: #fcf8f5;
  color: #f4879c;
  border: none;
  box-shadow: 0.1vw 0.1vw 0px #c6302c; /* Solid shadow with no blur */
  border: 2px solid #c6302c;
  border-radius: 1vh;
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  border-radius: 1vh;
  font-family: "Cute big font";
  background-color: #fcf8f5;
  border: none;
  font-size: 3vh;
  width: 30vw;
  color: #f4879c;
  height: 30vh;
  box-shadow: 0.1vw 0.1vw 0px #c6302c; /* Solid shadow with no blur */
  border: 2px solid #c6302c;
`;
export const StyledButton = styled.button`
  position: relative;
  border: none;
  font-family: "Cute big font";
  font-size: 2vw;
  padding: 0.5vw 0.5vw;
  background-color: #f4879c;
  text-shadow: 0.1vw 0.1vw 0 #f3cece;
  border-radius: 1vw;
  transition: font-size 0.3s ease, color 0.3s ease; /* Smooth hover animation */

  &:hover {
    color: #c6302c;
    font-size: 2.2vw; /* Only increases the text size */
  }
`;
