import { keyframes } from "styled-components";
export const slideAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translate(0rem,-2.7rem);
  }
  50%
  {
    opacity: 0.2;
  }
  
  100%{
    opacity: 1;
    transform: translate(0rem,0rem);
  }
`;

export const shineAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: translateX(var(--x-start));
  }
  60% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateX(var(--x-end));
  }
`;

export const movingFlowerAnimation = keyframes`
0%{ transform: rotate(-45deg)}
50%{transform: rotate(45deg)}
100%{transform: rotate(-45deg)}
`;

export const sparkleAnimation = keyframes`
  0%{ opacity:0; transform: scale(0)}
  30%{ opacity:1; transform: scale(1.2)}
  50% { opacity:1; transform: scale(1)}
  70%{ opacity:1; transform: scale(1.2)}
  100%{ opacity:0; transform: scale(0)}
`;

export const lampLineAnimation = keyframes`
  0%{ transform: rotate(-3deg)}
  50%{transform: rotate(3deg)}
  100%{transform: rotate(-3deg)}
`;

export const lampBulbAnimation = keyframes`
  0%{ transform: rotate(-4deg) translateX(1vw)}
  50%{transform: rotate(4deg) translateX(-2.4vw)}
  100%{transform: rotate(-4deg) translateX(1vw)}
`;

export const shimmerAnimation = keyframes`
  0%{opacity:0; transform: scale(0) rotate(45deg)}
  50%{opacity:1; transform: scale(1) rotate(0deg)}
  100%{opacity:0; transform: scale(0) rotate(45deg)}
`;

export const hoverTextBoxAnimation = keyframes`
  0%{transform: translateY(0vh)}
  50%{transform: translateY(-3vh)}
  100%{transform: translateY(0vh)}
`;

export const HomeAnimationStart = keyframes`
  0%{opacity: 0; transform: translateY(-5vh)}
  100%{opacity: 1; transform: translateY(0vh)}
`;

export const BlogEntering = keyframes`
  0%{opacity: 0; transform: translateY(-3vh)}
  100%{opacity: 1; transform: translateY(0vh)}
`;
