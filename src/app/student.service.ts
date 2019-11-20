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
      address: '215 Phan Đăng Lưu',
      phonenumber: '0929172678',
      sex: 'Nam',
      dob: '27/10/2019',
      score: 0.2,
      faculty: 'Toán',
      mainfaculty: 'Toán - 1',
    },
    {
      id: 2,
      name: 'Dat',
      password: '123',
      address: '215 Phan Đăng Lưu',
      phonenumber:  '0929172678',
      sex: 'Nam',
      dob: '27/10/2019',
      score: 8.2,
      faculty: 'Toán',
      mainfaculty: 'Toán - 1',
    },
    {
      id: 3,
      name: 'Tam',
      password: '123',
      address: '215 Phan Đăng Lưu',
      phonenumber: '0929172678',
      sex: 'Nam',
      dob: '27/10/2019',
      score: 8.2,
      faculty: 'Toán',
      mainfaculty: 'Toán - 1',
    },
  ];
}
