import styled from "styled-components";
import { BlogEntering } from "./AnimationStyles";

export const BlogTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Cute big font";
  font-size: 3vw;
  padding: 1vh 1vh;
  position: relative;
  color: #f893b8;
  text-shadow: 0.2vw 0.2vw 0 #bb465d;
  transition: transform 0.3s, color 0.3s;
  &:hover {
    color: #f3bc46;
    transform: scale(1.2);
  }
`;

interface BlogEnteringAnimProps {
  delay: string;
}

export const BlogEnteringAnim = styled.div<BlogEnteringAnimProps>`
  animation-name: ${BlogEntering};
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: both;
`;
