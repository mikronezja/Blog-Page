import styled from "styled-components";
import { movingFlowerAnimation } from "./AnimationStyles";

export const FlowerStyle = styled.img`
  width: 3.5vw;
  height: 7vh;
  animation-name: ${movingFlowerAnimation};
  animation-duration: 15s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
