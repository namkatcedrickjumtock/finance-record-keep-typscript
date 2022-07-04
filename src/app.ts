import { payments } from "./classes/payments.js";
import { HasFormetter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classes/invoces.js";
import { ListTemplate } from "./classes/ListTemplate.js";


// getting form elements
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form?.children);

const anchor = document.querySelector('a')!

// console.log(anchor.href);
// formatter interface
let hasFormmeterObjects: HasFormetter


// ul instance
const ul = document.querySelector('ul')!


const list = new ListTemplate(ul)
// type casting adding an aliass as
const type = document.querySelector("#type") as HTMLSelectElement
const toForm = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (type.value === 'invoice') {
    hasFormmeterObjects = new Invoice(toForm.value, details.value, +amount.value);
  } else {
    hasFormmeterObjects = new payments(toForm.value, details.value, +amount.value)
  }

  // call templateList class
  list.render(hasFormmeterObjects,type.value, "end")
})


// const invoiceOne = new Invoice("cedrick", "bought courses", 4000)
// const invoiceTwo = new Invoice("prince", "work done on some chairs", 3000)


// // only object created with the Invoice class would be included into the array
// let includedOnlyInvoicesObject: Invoice[] = []

// includedOnlyInvoicesObject.push(invoiceOne)
// includedOnlyInvoicesObject.push(invoiceTwo)

// includedOnlyInvoicesObject.forEach(inv => {
//   console.log(inv.format());

// });


