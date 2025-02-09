import React from "react";
import {
  CuteVerticalLampLine,
  VerticalLampBulb,
  VerticalLampLine,
} from "../Styles/LampsStyle";

const VerticalLamp = () => {
  return (
    <div>
      <VerticalLampBulb top="64.5vh" left="5.4vw" delay="1s" />
      <VerticalLampLine top="-3vh" left="7vw" delay="1s" />

      <VerticalLampBulb top="64.5vh" left="84.3vw" delay="0s" />
      <VerticalLampLine top="-3vh" left="86vw" delay="0s" />

      <CuteVerticalLampLine top="-0.5vh" left="84.3vw" delay="0.5s" />
      <CuteVerticalLampLine top="-7.5vh" left="10.3vw" delay="1.2s" />
    </div>
  );
};

export default VerticalLamp;
