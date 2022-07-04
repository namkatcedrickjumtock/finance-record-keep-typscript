import { Invoice } from "./classes/invoces.js";
const form = document.querySelector('.new-item-form');
// console.log(form?.children);
const anchor = document.querySelector('a');
// console.log(anchor.href);
// type casting adding an aliass as
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.value);
});
const invoiceOne = new Invoice("cedrick", "bought courses", 4000);
const invoiceTwo = new Invoice("prince", "work done on some chairs", 3000);
// only object created with the Invoice object would be included into the array
let includedOnlyInvoicesObject = [];
includedOnlyInvoicesObject.push(invoiceOne);
includedOnlyInvoicesObject.push(invoiceTwo);
includedOnlyInvoicesObject.forEach(inv => {
    console.log(inv.format());
});
