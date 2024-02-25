// This is an example of polymorphism. We have 2 classes, each with a method called socialFunction.

class People{

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

    public socialFunction(): void {
        console.log('Working.');
    }

}

class Student extends People{

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

    public socialFunction(): void {
        console.log('stude and serch academic.');
    }
}


let student: Student;

student = new Student(223, 'student', 'email@email.com', 18);

console.log(student.socialFunction());


let person: People;

person = new People('work', 'email@email.com', 33);

console.log(person.socialFunction());
