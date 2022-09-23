/**
 * Function to know if an object is empty
 * @param {object} object The object to evaluate
 * @returns `true` if the object is empty, `false` otherwise
 */
const isObjectEmpty = object => {
  return Object.keys(object).length === 0;
};

const getCustomGifName = gifName => {
  if (!/gif/gi.test(gifName)) return gifName;
  const customName = gifName.split(/gif/gi)[0].split(/\s+/g, 3).join(" ");
  return customName;
};
/*
const pascalCasing = text => {
  const words = text.split(/\s+/g);
  let pascalText = "";
  words.forEach((word, idx) => {
    pascalText += word[0].toUpperCase() + word.substring(1) + (idx === words.length - 1 ? "" : " ");
  });
  return pascalText;
};
*/
export { isObjectEmpty, getCustomGifName };
