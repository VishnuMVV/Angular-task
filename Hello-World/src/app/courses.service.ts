import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ICourse } from "./course";
import { Observable } from "rxjs";
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private url: string = "assets/data/courses.json";

  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    // return ["C++", "Java", "Python"];
    return this.http.get<ICourse[]>(this.url);
                //  .catch(this.errorHandler);
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error");
  // }
}
 