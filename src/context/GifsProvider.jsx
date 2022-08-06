import { React, useState } from "react";
import { GifsContext } from "./GifsContext";

function GifsProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  return <GifsContext.Provider value={{ gifs, setGifs }}>{children}</GifsContext.Provider>;
}

export default GifsProvider;
