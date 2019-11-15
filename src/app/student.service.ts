import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  arrayStudent = [
    {
      id: 1,
      name: 'Quang',
      password: '123456',
    },
    {
      id: 2,
      name: 'Dat',
      password: '123',
    },
    {
      id: 3,
      name: 'Tam',
      password: '123',
    },
  ];
}
