import { Component, OnInit } from '@angular/core';
const yardaInInch: number = 36; // 36cm
const MAX_YARDA: number = 110; // inches
@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss']
})
export class CurtainComponent implements OnInit {
  height = 0;
  large = 0;
  cantCurtain = 0;
  curtainResult = 0;
  fabricSize = 0; //
  fabricType = 0; // three for fine and two for thick
  constructor() { }

  ngOnInit(): void {
  }

  onFocusOutEvent(value): void {
    if (this.large > MAX_YARDA)
      this.large = MAX_YARDA; console.log("Largo " + this.large)

  }

  calcCurtain(valor): void {
    if (this.large > MAX_YARDA) {
      this.large = MAX_YARDA;

    }
    console.log("Alto " + this.height)
    console.log("Largo " + this.large)
    console.log("fabricSize " + this.fabricSize)
    console.log("fabricType " + this.fabricType)
    console.log(Math.ceil((this.large * this.cantCurtain) / this.fabricSize))
    if (this.fabricSize > 0) {

      this.curtainResult =
        Math.ceil(
          (this.height / yardaInInch) *
          Math.ceil(((this.large * this.fabricType) / this.fabricSize))
        );

      console.log("este es el resultado " + (this.height / yardaInInch))
    }
  }
}
