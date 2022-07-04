
export class Invoice {

    // access modifyers that we have is
    // -> readOnly: which means you can read an atrribute or method both within and out of the 
    // class but an't modify it
    // -> public attributes and methods can be access within and outside of the class
    // -> meaning attributes can't be accessed outiside the function.
    // client: string
    // details: string
    // amount: number
  
    // constructor(c: string, d: string, amunt: number) {
    //   this.client = c
    //   this.details = d
    //   this.amount = amunt
    // }
  
  
    // -> nother way to do this only when access modifyers are being used 
    constructor(
      readonly client: string,
      public details: string,
      public amount: number
    ) { }
  
    format = () => {
      return `${this.client} owes $${this.amount} for ${this.details} `
    }
  
  }