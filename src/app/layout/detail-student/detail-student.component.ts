import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  student;
  id;
  constructor(private studentService: StudentService, private route: ActivatedRoute) {
    console.log('constructor');
   }
  ngOnInit() {
    this.student = new Student();
    this.id = +this.route.snapshot.paramMap.get('id');// nho ep kieu
    this.student = this.studentService.arrayStudent.find(x => x.id === this.id);
    console.log('this.student', this.student);
  }

}
