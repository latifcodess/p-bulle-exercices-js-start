//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (msg) => {
  // verifie que le msg sans espaces finit par '?'
  if (msg.trim().endsWith('?')) {
    // verifie que le msg n'a pas de lettre minuscule et
    //  qu'il y a que des lettre majuscules
    if (!/[a-z]/.test(msg) && /[A-Z]/.test(msg)) {
      return "Calm down, I know what I'm doing!";
    }
    return "Sure.";
  }

  // verifie si le msg contient au moins un caractère
  if (/[a-zA-Z\d]/.test(msg)) {
    // verifie que le msg n'a pas de lettre minuscule et
    //  qu'il y a que des lettre majuscules
    if (!/[a-z]/.test(msg) && /[A-Z]/.test(msg)) {
      return "Whoa, chill out!";
    } 
    else{
      return "Whatever.";
    }
  }
  // retourne ceci si aucune de toute les conditions n'a été validée
  return "Fine. Be that way!";
};
