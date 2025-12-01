//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* 
  const Planets = new Map([
  ["earth", 1.0],
  ["mercury", 0.2408467],
  ["venus", 0.6151926],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132]
]); 
*/

export const age = (Planet, sec) => {
/*   
  // verifie si la planète existe
  if(!Planets.get(Planet)){
    throw new Error("not a planet"); 
  }

  // calcule le nombre de jour dans une année de la planète
  const yearPlanet = 365.25 * Planets.get(Planet);
  
  // calcule le nombre de seconde dans une année de la planète
  const yearSec = (((yearPlanet * 24) * 60) * 60);

  // calcule l'age d'une personne sur la planète
  return Math.round(sec / yearSec * 100) / 100; 
  */

  let yearPlanet = 0;

  switch(Planet){
    case "earth":
      yearPlanet = 365.25 * 1.0;
      break;

    case "mercury":
      yearPlanet = 365.25 * 0.2408467;
      break;

    case "venus":
      yearPlanet = 365.25 * 0.6151926;
      break;

    case "mars":
      yearPlanet = 365.25 * 1.8808158;
      break;

    case "jupiter":
      yearPlanet = 365.25 * 11.862615;
      break;

    case "saturn":
      yearPlanet = 365.25 * 29.447498;
      break;

    case "uranus":
      yearPlanet = 365.25 * 84.016846;
      break;

    case "neptune":
      yearPlanet = 365.25 * 164.79132;
      break;

    default:
      throw new Error("not a planet");
  }

  const yearSec = (((yearPlanet * 24) * 60) * 60);

  return Math.round(sec / yearSec * 100) / 100; 
};
