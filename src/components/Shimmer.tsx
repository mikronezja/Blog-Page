import React from "react";
import { ShimmerStyle } from "../Styles/ShimmerStyles";

const Shimmer = () => {
  return (
    <div>
      <ShimmerStyle top="20vh" left="30vw" delay="0s" scale="5vw" />
      <ShimmerStyle top="25vh" left="27vw" delay="0.5s" scale="3vw" />

      <ShimmerStyle top="45vh" left="67vw" delay="0s" scale="5vw" />
      <ShimmerStyle top="50vh" left="70vw" delay="1.5s" scale="3vw" />
    </div>
  );
};

export default Shimmer;
