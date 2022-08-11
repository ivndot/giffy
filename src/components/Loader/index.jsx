import React from "react";
import { Pinwheel } from "@uiball/loaders";
/**
 * TODO:
 */
function Loader({ size = 50, lineWeight = 1.5, speed = 1, color = "black" }) {
  return <Pinwheel size={size} lineWeight={lineWeight} speed={speed} color={color} />;
}

export default Loader;
