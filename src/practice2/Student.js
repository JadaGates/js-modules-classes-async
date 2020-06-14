import {Person} from "./Person";

export class Student extends Person{
    constructor(name, className) {
        super(name)
        this.name = name;
        this.study = this.study.bind(this)
        this.className = className;
    }

    study(){
        this.move()
        console.log(`${this.name} is studying in ${this.className}`);
    }
}
