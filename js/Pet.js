class Pet {
    constructor(name, furColor){
       this.name = name;
       this.furColor = furColor;
       this.sound = 'Au miau';
    }

    voice(){
        return `${this.name}: ${this.sound}!`;
    }
    intro(){
        return `Hi, my name is ${this.name} and my fur color is ${this.furColor}   `
    }

}
export{ Pet }