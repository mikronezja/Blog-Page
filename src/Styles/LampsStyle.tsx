import styled from "styled-components";
import { lampBulbAnimation, lampLineAnimation } from "./AnimationStyles";

interface LampProps {
  translatex: string;
  translatey: string;
  rotation: string;
}

export const HorizontalLamp = styled.div<LampProps>`
  background-image: url("images/lampkipoziom.png");
  position: absolute;
  transform: ${({ translatex, translatey, rotation }) =>
    `rotate(${rotation}) translateY(${translatey}) translateX(${translatex})`};
  width: 55vw;
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: -1;
`;

interface VerticalLampProps {
  top: string;
  left: string;
  delay: string;
}

export const VerticalLampBulb = styled.div<VerticalLampProps>`
  background-image: url("images/verticallamp.png");
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  width: 10vw;
  background-size: 100% 100%;
  height: 14vh;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 3;
  transform-origin: center top;
  animation-name: ${lampBulbAnimation};
  animation-duration: 3s;
  animation-delay: ${(props) => props.delay};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export const VerticalLampLine = styled.div<VerticalLampProps>`
  background-image: url("images/ropetoverticallamp.png");
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  width: 5vw;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation-delay: ${(props) => props.delay};
  background-size: 100% 100%;
  height: 70vh;
  z-index: 2;
  transform-origin: center top;
  animation-name: ${lampLineAnimation};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export const CuteVerticalLampLine = styled.div<VerticalLampProps>`
  background-image: url("images/cutelamp.png");
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  width: 3vw;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation-delay: ${(props) => props.delay};
  background-size: 100% 100%;
  height: 30vh;
  z-index: 2;
  transform-origin: center top;
  animation-name: ${lampLineAnimation};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
