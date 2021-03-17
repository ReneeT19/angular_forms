import { Emp } from './../emp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  skills = ['Java', 'Python', 'SQL', 'C++'];

  model = new Emp(101, 'Renee', 'Project Manager', this.skills[0]);

  submitted = false;

  onSubmt() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
