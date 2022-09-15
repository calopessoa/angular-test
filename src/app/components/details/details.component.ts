import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  skills: Skill[] = [
    { skill: 'front-end', type: 'hard-skills', experience: 1 },
    { skill: 'back-end', type: 'hard-skills', experience: 1},
    { skill: 'good communication', type: 'soft-skills', experience: 9 },
    { skill: 'self-management', type: 'soft-skills', experience: 2 },
  ]

  date: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
