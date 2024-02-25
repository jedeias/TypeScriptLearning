// interfaces 
// interface is a type of Abstraction

export interface Iveicle{
    
    getMark() : string;
    getPrice() : number;
    getMaxSpeed() : number;
    
    setMark(mark: string) : void;
    setPrice(price: number) : void;
    setMaxSpeed(speed: number) : void;

}