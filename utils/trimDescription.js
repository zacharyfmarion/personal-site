/**
 * Util function to trim a string to a given length and append elipses
 */

export default (description, length) => {
  const shortened =
    description.length < length
      ? description
      : description.substring(0, length);
  return `${shortened}...`;
};
