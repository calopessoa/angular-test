import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  hidden: boolean = true;
  name: string = 'Carlos Augusto';
  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  authenticateMock(): void {
    this.hidden = !this.hidden;
  }

  onChangeNumber() {
    this.myNumber = Math.floor((Math.random() * 10) + 1);
  }

}
