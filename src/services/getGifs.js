import { API_URL, API_KEY } from "./config";

const LIMIT_RESULTS = 25;

/**
 * Function to search for a specific query
 * @param {string} query The query for the search
 * @param {number} page The number of the page to get
 * @returns A Promise that result in an array of gif's objects
 */
const searchGif = async (query = "random", page = 0) => {
  try {
    const response = await fetch(
      `${API_URL}/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT_RESULTS}&offset=${
        LIMIT_RESULTS * page
      }&rating=pg`
    );
    const data = await response.json();

    localStorage.setItem("lastSearch", query);

    const gifs = data.data.map(gif => {
      const { id, title } = gif;
      const { url } = gif.images.fixed_height_downsampled;

      return { id, title, url };
    });

    return gifs;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Function to get a specific gif with a given id
 * @param {string} gifID The id of the gif to fetch
 * @returns An object containing the data of the specified gif
 */
const getGifByID = async gifID => {
  try {
    const response = await fetch(`${API_URL}/gifs/${gifID}?api_key=${API_KEY}`);
    const gif = await response.json();
    if (gif.data.length === 0) return {};
    const { title, id, images } = gif.data;
    const { url } = images.downsized_medium;

    return { title, id, url };
  } catch (e) {
    console.error(e);
    return {};
  }
};

/**
 * Function to get the trending terms
 * @returns An array of string containing the trending terms
 */
const getTrendingTerms = async () => {
  try {
    const response = await fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`);
    const terms = await response.json();
    return terms.data;
  } catch (e) {
    console.error(e);
  }
};

export { searchGif, getGifByID, getTrendingTerms };
