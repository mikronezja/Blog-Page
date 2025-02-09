import styled from "styled-components";
import { HomeAnimationStart } from "./AnimationStyles";

interface BlogInfoProps {
  left: string;
}

export const BlogInfo = styled.div<BlogInfoProps>`
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
  width: 20vw;
  box-shadow: 10px 10px 0px #c6302c; /* Solid shadow with no blur */
  border: 2px solid #c6302c;
  position: absolute;
  top: 60vh;
  left: ${(props) => props.left}; /*30vw*/
  height: 20vh;
  z-index: -1;
  animation-name: ${HomeAnimationStart};
  animation-duration: 0.5s;
`;
