//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  // Attributs
  Balance;
  isClosed;

  constructor() {
    this.Balance = 0;
    this.isClosed = true;
  }

  open() {
    // si le compte est deja ouvert : erreur
    if(!this.isClosed){
      throw new ValueError();
    }
    // sinon le compte s'ouvre et la Balance se met à 0
    else{
      this.isClosed = false;
      this.Balance = 0;
    }
    
  }

  close() {
    // si le compte est deja fermé : erreur
    if(this.isClosed){
      throw new ValueError();
    }
    // sinon on ferme le compte
    else{
      this.isClosed = true;
    }
  }

  deposit(depos) {
    // si le compte est fermé : erreur
    if(this.isClosed){
      throw new ValueError();
    }
    else{
      // si le depos est négative : erreur
      if(depos < 0){
        throw new ValueError();
      }
      // sinon on ajoute le depos à la Balance
      else{
        this.Balance += depos;
      }      
    }
  }

  withdraw(wdraw) {
    // si le compte est fermé : erreur
    if(this.isClosed){
      throw new ValueError();
    }
    else {
      // si wdraw est négatif ou qu'il est superieur à Balance : erreur
      if (wdraw < 0 || wdraw > this.Balance){
        throw new ValueError();
      }
      // sinon on enleve wdraw de Balance
      else{
        this.Balance -= wdraw;
      }
    }
  }

  get balance() {
    // si le compte est fermé : erreur
    if(this.isClosed){
      throw new ValueError();
    }
    // sinon on retourne Balance
    else{
      return this.Balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}