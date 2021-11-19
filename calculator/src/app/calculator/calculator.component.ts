import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value: string = '0';
  result!: number;
  operationVal: string = '0';

  onClickReset() {
    this.value = "0";
  }

  onClickNegative() {
    if (this.value[0] != '-') {
      this.value = '-' + this.value
    } else {
      this.value = this.value.substring(1);
    }
  }

  onClickPercentage() {
    let intVal = Number(this.value) / 100;
    this.value = intVal.toString();
  }

  onClickDivide() {
    this.operationVal = this.value;
    this.operationVal += '/';
  }

  onClickMultiply() {
    this.operationVal = this.value;
    this.operationVal += '*';
  }

  onClickSubtract() {
    this.operationVal = this.value;
    this.operationVal += '-';
  }

  onClickAdd() {
    this.operationVal = this.value;
    this.operationVal += '+';
  }

  onClickshowVal() {
    if (this.operationVal) {
      if (this.operationVal.includes('+')) {
        console.log(this.operationVal)
      }
    }
  }

  onClickSetVal(val: string) {
    // if(!Number(this.value)) {
    //   this.value = '';
    // }
    if (this.value == '0') {
      this.value = '';
    }
    this.value += val;
  }

}
