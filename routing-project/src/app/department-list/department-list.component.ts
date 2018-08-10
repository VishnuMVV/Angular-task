import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-department-list",
  template: `<h2>Department List</h2>
  <ul class="items">
  <li (click)="onSelect(list)"[class.selected]='isSelected(list)' *ngFor="let list of departments">
<span class="badge">{{list.id}}</span>{{list.name}}
  </li>
  </ul>
  `,
  styleUrls: ["./department-list.component.css"]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Java" },
    { id: 5, name: "" }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.selectedId = id;
    });
  }
  onSelect(list) {
    this.router.navigate(["/departments", list.id]);
  }
  isSelected(list) {
    return list.id === this.selectedId;
  }
}
