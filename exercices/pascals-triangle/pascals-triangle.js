//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n <= 0) return [];

  // tableau vide qui plus tard va contenir tout le triangle
  let a = [];

  // tableau utilisé pour les additions
  let b = [1];

  // ajout du premier 1 tout en haut du triangle
  a.push([...b]);

  for(let i = 1; i < n; i++){
    // ajout d'un nouveau tableau pour chaque etage du triangle
    let c = new Array(b.length + 1);

    // premier 1 de la ligne du triangle
    c[0] = 1;

    for(let j = 0; j < b.length - 1; j++){
      // b est égal aux anciennes valeurs de c (exemple : [1, 1])
      // donc l'index apres le premier 1 de c sera égal a 1 + 1 (2).
      c[j + 1] = b[j] + b[j + 1];
    }

    // dernier 1 de la ligne du triangle
    c[c.length - 1] = 1;

    // ajout de la ligne dans le triangle
    a.push([...c]);

    // b = c pour pouvoir faire les additions du dessus
    b = c;
  }

  return a;
};
