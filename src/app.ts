import { Invoice } from "./classes/invoces.js";
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form?.children);

const anchor = document.querySelector('a')!

// console.log(anchor.href);

// type casting adding an aliass as
const type = document.querySelector("#type") as HTMLSelectElement
const toForm = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(
    type.value,
    toForm.value,
    details.value,
    amount.value
  );
})


const invoiceOne = new Invoice("cedrick", "bought courses", 4000)
const invoiceTwo = new Invoice("prince", "work done on some chairs", 3000)


// only object created with the Invoice class would be included into the array
let includedOnlyInvoicesObject: Invoice[] = []

includedOnlyInvoicesObject.push(invoiceOne)
includedOnlyInvoicesObject.push(invoiceTwo)

includedOnlyInvoicesObject.forEach(inv => {
  console.log(inv.format());

});


