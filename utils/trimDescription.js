/**
 * Util function to trim a string to a given length and append elipses
 */

export default (description, length) => {
  return description.length > length
    ? `${description.substring(0, length)}...`
    : description;
};
