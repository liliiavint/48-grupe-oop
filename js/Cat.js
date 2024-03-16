import { Pet } from "./Pet.js"

class Cat extends Pet {
    constructor(name, furColor){
        super(name, furColor)
    }
    voice(){
        return `${this.name}: Miau miau!`;
    }
}
export{ Cat };