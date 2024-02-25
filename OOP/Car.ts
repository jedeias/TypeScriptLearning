// interface implementation

import {Iveicle} from './Iveicle';

export class Car implements Iveicle {

    protected mark: string;
    protected price: number;
    protected maxSpeed: number;

    constructor(mark: string, price: number, maxSpeed: number) {
        this.mark = mark;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    getMark(): string {
        return this.mark;
    }
    
    getPrice(): number {
        return this.price;
    }
    
    getMaxSpeed(): number {
        return this.maxSpeed;
    }

    setMark(mark: string): void {
        this.mark = mark.toLowerCase();
    }
    
    setPrice(price: number): void {
        this.price = price;   
    }
    
    setMaxSpeed(speed: number): void {
        this.maxSpeed = speed;
    }

}


