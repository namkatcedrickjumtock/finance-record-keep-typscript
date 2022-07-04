//  this classes does 3 things
// 1-  Register s  a list container (ul) in the constructor
// 2- create a render methos to render a new li in the ul container
// -  accepts args invoice or payments: heading, position
// - create an html template li h4 p
//  add the li in the start or end of the list
export class ListTemplate {
    constructor(continer) {
        this.continer = continer;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4Tag = document.createElement('h4');
        const p = document.createElement('p');
        h4Tag.innerText = heading;
        li.append(h4Tag);
        p.innerText = item.format();
        li.append(p);
        if (pos === "start") {
            this.continer.prepend(li);
        }
        else {
            this.continer.append(li);
        }
    }
}
