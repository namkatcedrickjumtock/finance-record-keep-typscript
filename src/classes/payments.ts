import { HasFormetter } from "../interfaces/HasFormatter";


export class payments implements HasFormetter {
  constructor(
    readonly recipient: string,
    public details: string,
    public amount: number
  ) { }

  format = () => {
    return `${this.recipient} is owed $${this.amount} for ${this.details} `
  }

}