import React from "react";
import { Pinwheel } from "@uiball/loaders";

function Loader({ size = 50, lineWeight = 1.5, speed = 1, color = "black" }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Pinwheel size={size} lineWeight={lineWeight} speed={speed} color={color} />
    </div>
  );
}

export default Loader;
