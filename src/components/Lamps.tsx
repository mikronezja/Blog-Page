import React from "react";
import { HorizontalLamp, VerticalLampBulb } from "../Styles/LampsStyle";
import VerticalLamp from "./VerticalLamp";

const Lamps = () => {
  return (
    <div>
      <HorizontalLamp rotation="-10deg" translatex="-17vw" translatey="-14vw" />
      <HorizontalLamp rotation="8deg" translatex="67vw" translatey="-18vw" />
      <VerticalLamp />
    </div>
  );
};

export default Lamps;
