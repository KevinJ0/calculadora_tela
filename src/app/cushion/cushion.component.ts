import { Component, OnInit } from '@angular/core';
const yardaInInch: number = 36; // 36cm
const MAX_YARDA: number = 110; // inches
@Component({
  selector: 'app-cushion',
  templateUrl: './cushion.component.html',
  styleUrls: ['./cushion.component.scss']
})
export class CushionComponent implements OnInit {
  height = 0;
  large = 0;
  cantCushion = 0;
  cushionResult = 0;
  fabricSize = 0; //
  constructor() { }

  ngOnInit(): void {
  }
  onFocusOutEvent(value): void {
    if (this.large > MAX_YARDA)
      this.large = MAX_YARDA;    console.log("Largo " + this.large)

  }

  calcCushion(valor): void {
    if (this.large > MAX_YARDA) {
      this.large = MAX_YARDA;
       
    }
    console.log("Alto " + this.height)
    console.log("Largo " + this.large)
    console.log("fabricSize " + this.fabricSize)
    console.log(Math.ceil((this.large * this.cantCushion) / this.fabricSize))
    if (this.fabricSize > 0) {

      this.cushionResult = Math.ceil(((Math.ceil((this.large * this.cantCushion) / this.fabricSize))) * (this.height / yardaInInch));
      console.log("este es el resultado " + (this.height / yardaInInch))
    }
  }
}
