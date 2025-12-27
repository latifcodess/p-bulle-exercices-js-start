//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (Planet, sec) => {
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
