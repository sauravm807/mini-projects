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
    this.value = "0"
  }

  onClickshowVal() {
    if (this.operationVal) {
      if (this.operationVal.includes('+')) {
        let index = this.operationVal.indexOf('+');
        let num1 = this.operationVal.slice(0, index);
        let num2 = this.operationVal.slice(index + 1)
        console.log('num2', num2)
        console.log('num1', num1)
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
