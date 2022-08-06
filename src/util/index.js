/**
 * Function to know if an object is empty
 * @param {object} object The object to evaluate
 * @returns `true` if the object is empty, `false` otherwise
 */
const isObjectEmpty = object => {
  return Object.keys(object).length === 0;
};

export { isObjectEmpty };
