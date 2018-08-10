import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
  selector: "courses",
  template: `<h2>{{ getTitle() }}</h2>
  <h3>{{ errorMsg }}</h3>
<ul>
<li *ngFor="let course of courseList">{{ course.name }}</li>
</ul>`
})
export class CoursesComponent {
  title = "List of Courses";
  courseList = [];
  public errorMsg;

  constructor(private courseService: CoursesService) {
    courseService.getCourses()
        .subscribe(data => this.courseList = data,
                    error => this.errorMsg = error);
  }

  getTitle() {
    return this.title;
  }
}
