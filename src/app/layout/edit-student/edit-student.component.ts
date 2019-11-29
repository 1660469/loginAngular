import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private routeOther: Router
  ) { }

  ngOnInit() {
    // this.student = new Student();
    this.id = +this.route.snapshot.paramMap.get('id'); // nho ep kieu
    this.student = {...this.studentService.arrayStudent.find(x => x.id === this.id)};
  }
  submit(event) {
    this.studentService.arrayStudent.some(x => {
      if (x.id === event.id) {
        x = event;
        return true;
      }
      return false;
    });

    console.log('this.studentService.arrayStudent', this.studentService.arrayStudent);
    return this.routeOther.navigate(['layout/liststudent']);
  }

}
