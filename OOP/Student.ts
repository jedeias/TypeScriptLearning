//this is a inheritance of classe people.

import {People} from './People';

export class Student extends People{

    private Ra: number;

    constructor(Ra: number, name: string, email: string, age: number){
        super(name, email, age);
        this.Ra = Ra;
    }

    public getRa(): number {
        return this.Ra;
    }
    
    public setRa(value: number): void {
        this.Ra = value;
    }
}