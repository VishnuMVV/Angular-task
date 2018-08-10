import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  template: `<h2>Employees List</h2>
  <ul class="items">
  <li *ngFor="let list of employees">
  <span class="badge">{{list.id}}</span>{{list.name}}
  </li>
  </ul>
  `,
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees = [
    { id: 1, name: "Mukul" },
    { id: 2, name: "Shivam" },
    { id: 3, name: "Siddharth" },
    { id: 4, name: "Vishnu" },
    { id: 5, name: "" }
  ];
  constructor() {}

  ngOnInit() {}
}
