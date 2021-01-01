import { Component, OnInit } from '@angular/core';

interface Fabric_Measure {
  value: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  measures: Fabric_Measure[] = [
    { value: '110' },
    { value: '60' },
    { value: '50' }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
