import { Dog } from "./js/Dog.js";
import { Cat } from "./js/Cat.js";

const rexas = new Dog( '(1)Rexas', '(2)black');
const brisius = new Dog('Brisius', 'white');


console.log(rexas.intro())
console.log(brisius.intro())
// intro(){
//     return `Hi, my name is (1)  ${this.name} 
//     and my fur color is (2) ${this.class}
// }
console.log(rexas.voice())
console.log(brisius.voice())
console.log(rexas)
console.log(brisius)

const garfildas = new Cat ('Garfildas', 'orange')
console.log(garfildas.intro())
console.log(garfildas.voice())
 