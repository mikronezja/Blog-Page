import { Link } from "react-router-dom";
import styled from "styled-components";
import { shineAnimation } from "./AnimationStyles";
export const Navbar = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/telko3.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 45% 100%;
  overflow: hidden; /* Ensures content stays within the rounded edges */
  gap: 2vw;
`;

export const NavbarText = styled(Link)`
  text-decoration: none;
  font-family: "Cute big font";
  color: #ed1e25;
  font-size: 1.8vw;
  display: inline-block;
  transition: transform 0.3s, color 0.3s;
  text-shadow: 0.1vw 0.1vw 0 #f4879c;
  &:hover {
    color: #c21b1b;
    text-shadow: 0.1vw 0.1vw 0 #f4879c;
    transform: scale(1.2);
  }
`;

interface ShineProps {
  height: string;
  xstart: string;
  xend: string;
  left: string;
}

export const Shine = styled.div<ShineProps>`
  opacity: 0.3;
  width: 1.5vw;
  height: ${(props) => props.height};
  background-color: #fcf8f5;
  object-fit: contain;
  left: ${(props) => props.left};
  animation-name: ${shineAnimation};
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  --x-start: ${(props) => props.xstart};
  --x-end: ${(props) => props.xend};
  position: absolute;
  z-index: 1;
`;
