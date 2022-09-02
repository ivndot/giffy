import { useEffect, useState, useContext } from "react";
import { getGifByID } from "../services/getGifs";
import { GifsContext } from "../context/GifsContext";

/**
 * Custom hook to get an especified gif
 * @param {string} gifID The id of the gif to get
 * @returns An object containing the `loading` and `selectedGif` states
 */
function useGif(gifID) {
  const [loading, setLoading] = useState(true);
  const [selectedGif, setSelectedGif] = useState({});
  const { gifs } = useContext(GifsContext);

  useEffect(() => {
    if (gifs.length > 0) {
      setSelectedGif(gifs.find(gif => gif.id === gifID));
      setLoading(false);
    } else if (gifs.length === 0) {
      getGifByID(gifID).then(gif => {
        setSelectedGif(gif);
        setLoading(false);
      });
    }
  }, [gifID]);

  return { loading, selectedGif };
}

export { useGif };
