import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-formstudent',
  templateUrl: './formstudent.component.html',
  styleUrls: ['./formstudent.component.css']
})
export class FormstudentComponent implements OnInit {
  id;
  @Input() student: Student;
  @Output() submitStudent = new EventEmitter<Student>();
  constructor(private studentService: StudentService, private routeOther: Router) { }

  ngOnInit() {
    console.log('this.student', this.student);
    
  }
  submit(){
    this.submitStudent.emit(this.student);
  }
}
