import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  skills = [
    { skill: 'front-end', type: 'hard-skills'},
    { skill: 'back-end', type: 'hard-skills'},
    { skill: 'good communication', type: 'soft-skills'},
    { skill: 'self-management', type: 'soft-skills'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
