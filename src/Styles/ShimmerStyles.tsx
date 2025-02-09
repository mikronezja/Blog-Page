import styled from "styled-components";
import { shimmerAnimation } from "./AnimationStyles";

interface ShineProps {
  top: string;
  left: string;
  delay: string;
  scale: string;
}

export const ShimmerStyle = styled.div<ShineProps>`
  position: absolute;
  background-image: url("images/sparkle1.png");
  background-size: 100% 100%;
  width: ${(props) => props.scale};
  background-repeat: no-repeat;
  height: ${(props) => props.scale};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation-name: ${shimmerAnimation};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay};
`;
