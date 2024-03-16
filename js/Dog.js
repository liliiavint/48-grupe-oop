import { Pet } from "./Pet.js"

class Dog extends Pet {
    constructor(name){
    super(name);
    this.sound = 'Au au';
    this.hasBone = false;
    this.blood = 'blue';
    this.furColor = 'red'
    }
}
export{ Dog };