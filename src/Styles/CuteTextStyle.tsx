import styled from "styled-components";
import { slideAnimation, hoverTextBoxAnimation } from "./AnimationStyles";

interface CuteTextProps {
  textshadow: boolean;
  fontfamily: string;
  textcolor: string;
  fontsize: string;
}
export const CuteText = styled.div<CuteTextProps>`
  z-index: 1;
  display: flex;
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  position: relative;
  color: ${(props) => props.textcolor};
  text-shadow: ${(props) =>
    props.textshadow ? "0.2vw 0.2vw 0 #c6302c" : "none"};
  transition: transform 0.3s, color 0.3s;
`;

interface timeDelayProp {
  timedelay: string;
}

export const TextContainer = styled.div<timeDelayProp>`
  width: 100vw; /* Width relative to the viewport width */
  height: 8vh;
  display: flex;
  justify-content: center;
  object-fit: contain;
  animation-name: ${slideAnimation};
  animation-fill-mode: both;
  animation-duration: 0.3s;
  animation-delay: ${(props) => props.timedelay};
  animation-timing-function: ease-in;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
  justify-content: center;
  text-align: center;
  /* background-image: url("images/backgroundwel3.png"); */
  background-color: #fbb6d3;
  background-size: 200% 100%;
  background-position: center;
  border-radius: 2vw;
  width: 30vw;
  box-shadow: 10px 10px 0px #c6302c; /* Solid shadow with no blur */
  border: 2px solid #c6302c;
  position: absolute;
  top: 25vh;
  height: 30vh;

  &:hover {
    animation-name: ${hoverTextBoxAnimation};
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }
`;
