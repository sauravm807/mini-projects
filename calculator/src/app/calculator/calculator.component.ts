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
    this.operationVal = "0";
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
    this.value = "0";
  }

  onClickMultiply() {
    this.operationVal = this.value;
    this.operationVal += '*';
    this.value = "0";
  }

  onClickSubtract() {
    this.operationVal = this.value;
    this.operationVal += '-';
    this.value = "0";
  }

  onClickAdd() {
    this.operationVal = this.value;
    this.operationVal += '+';
    this.value = "0";
  }

  doOperation(operator: string, num1: string, num2: string) {
    // this.operationVal += this.value;
    // let index = this.operationVal.indexOf(operator);
    // console.log(this.operationVal)
    // if (index === 0) {
    //   this.operationVal = this.operationVal.slice(1);
    //   index = this.operationVal.indexOf(operator);
    //   // console.log(index)
    //   num1 = "-" + this.operationVal.slice(0, index);
    //   num2 = this.operationVal.slice(index + 1);
    // } else {
    //   num1 = this.operationVal.slice(0, index);
    //   num2 = this.operationVal.slice(index + 1);
    // }

    // console.log('num1', num1)
    // console.log('num2', num2)
    if (operator == '+') {
      return (Number(num1) + Number(num2)).toString();
    } else if (operator == '-') {
      return (Number(num1) - Number(num2)).toString();
    } else if (operator == '*') {
      return (Number(num1) * Number(num2)).toString();
    } else {
      return (Number(num1) / Number(num2)).toString();
    }
  }

  onClickshowVal() {
    if (this.operationVal) {
      this.operationVal += this.value;
      let index = this.operationVal.indexOf('-');
      let num1: string = "", num2: string = "";
      if (index === 0) {
        this.operationVal = this.operationVal.slice(1);
        console.log("gchvjv",this.operationVal)
        if (this.operationVal.includes('+')) {
          index = this.operationVal.indexOf('+');
        }

        if (this.operationVal.includes('-')) {
          index = this.operationVal.indexOf('+');
        }

        if (this.operationVal.includes('*')) {
          index = this.operationVal.indexOf('+');
        }

        if (this.operationVal.includes('/')) {
          index = this.operationVal.indexOf('+');
        }
        num1 = "-" + this.operationVal.slice(0, index);
        num2 = this.operationVal.slice(index + 1);
      } else {
        console.log(this.operationVal)
        num1 = this.operationVal.slice(0, index);
        num2 = this.operationVal.slice(index + 1);
      }
      // console.log('num1', num1)
      // console.log('num2', num2)

      if (this.operationVal.includes('+')) {
        console.log('Inside +')
        this.value = this.doOperation('+', num1, num2);
        this.operationVal = "0";
      }

      if (this.operationVal.includes('-')) {
        console.log('Inside -')
        this.value = this.doOperation('-', num1, num2);
        this.operationVal = "0";
      }

      if (this.operationVal.includes('*')) {
        console.log('Inside *')
        this.value = this.doOperation('*', num1, num2);
        this.operationVal = "0";
      }

      if (this.operationVal.includes('/')) {
        console.log('Inside /')
        this.value = this.doOperation('/', num1, num2);
        this.operationVal = "0";
      }
    }
  }

  onClickSetVal(val: string) {
    if (this.value == '0') {
      this.value = '';
    }
    this.value += val;
  }

}
