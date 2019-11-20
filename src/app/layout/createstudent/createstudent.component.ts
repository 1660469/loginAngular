import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {
  student: Student;
  id;
  constructor(private studentService: StudentService, private routeOther: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.student = new Student();

  }
  submit(event: Student) {
    console.log(event);
    event.id = Math.max(...this.studentService.arrayStudent.map(i => i.id)) + 1;
    this.studentService.arrayStudent.push(event);

    return this.routeOther.navigate(['layout/liststudent']);
  }
}
