import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  hidden: boolean = true;
  name: string = 'Carlos Augusto';
  constructor() { }

  ngOnInit(): void {
  }

  authenticateMock(): void {
    this.hidden = !this.hidden;
  }

}
