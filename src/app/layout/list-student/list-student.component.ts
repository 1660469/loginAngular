import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  removeAccount;
  constructor(private studentService: StudentService, private route: Router) { }
  ngOnInit() {
  }
  deleteLocalstorage(){
    console.log(JSON.parse(localStorage.getItem('this.result')));
    this.route.navigate(['']);
    //this.removeAccount = JSON.parse(localStorage.getItem('this.result'));
    localStorage.removeItem('this.result');
    
  }

}
