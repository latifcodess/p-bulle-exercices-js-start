// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  // retourne un tableau avec seulement les nombres entré dans le paramètre
  return ids;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  // tableau avec les 2 premiers indexes séparé des autres pour les deplacé à la fin plus tard
  const [a, b, ...everythingElse] = ids;

  return [...everythingElse, a, b];
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  // tableau avec le premier indexe séparé des autres pour ajouté des éléments entre 2 plus tard
  const [a, ...everythingElse] = ids;
  
  return [a, ...missingWagons ,...everythingElse];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  // objet avec tout les données de infromation et additional
  const info = {...information, ...additional};

  return info;
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  // séparer timeOfArrival de toute les autres informations
  const {timeOfArrival, ...info} = information;
  
  return [timeOfArrival, info];
}
