import express, { Request, Response } from 'express';
import {People} from './OOP/People';
import { Student } from './OOP/Student';
import {Car} from './OOP/Car';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  
  let person: People;
  
  person = new People("person name", "email@email.com", 36);
  
  let student: Student;

  student = new Student(123, 'andre', 'andre123@gmail.com', 16);

  let car: Car;

  car = new Car('fiat', 23252, 183);

  res.send(car);

});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});