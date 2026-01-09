// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  // verifie si le vehicule est un car ou un truck
  /*if (kind == "car" || kind == "truck"){
    return true;
  }
  else{
    return false;
  }*/

  return (kind == "car" || kind == "truck") ? true : false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  // verifie si option1 est avant option2 dans la table ASCII
  return (option1 < option2) 
         ? option1 + " is clearly the better choice." 
         : option2 + " is clearly the better choice."
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // verifie si l'age est plus petit que 3
  if(age < 3){
    return originalPrice * 0.8;
  }
  // verifie si l'age est plus grand que 10
  else if(age > 10){
    return originalPrice / 2;
  }
  // verifie si l'age est entre 3 et 10
  else if (age >= 3 && age <= 10){
    return originalPrice * 0.7;
  }
}
