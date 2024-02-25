//encapsulation

export class People{

    protected name: string;
    protected age: number;
    protected email: string;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public getAge(): number {
        return this.age;        
    }

    public getEmail(): string {
        return this.email;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

}

// let person = new People("cleber", 'cleber@mail.com', 12);

// person.setAge(19);
// person.setName('jorge');
// person.setEmail('jorge@mail.com');

// console.log(person);