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

  class1: string = "screen";
  class2: string = "";
  value: string = '0';
  result!: number;
  operationVal: string = '0';


  onClickReset() {
    this.value = "0";
    this.operationVal = "0";
    this.removeClass();
  }

  addClass() {
    this.class2 = "smallScreen";
  }

  removeClass() {
    this.class2 = "";
  }

  onClickNegative() {
    if (this.value[0] != '-') {
      this.value = '-' + this.value
    } else {
      this.value = this.value.substring(1);
    }

    if (this.value.length > 7) {
      this.addClass();
    }
  }

  onClickPercentage() {
    let intVal = Number(this.value) / 100;
    this.value = intVal.toString();
    if (this.value.length > 7) {
      this.addClass();
    }
  }

  onClickDivide() {
    this.operationVal = this.value;
    this.operationVal += '/';
    this.value = "0";
    this.removeClass();
  }

  onClickMultiply() {
    this.operationVal = this.value;
    this.operationVal += '*';
    this.value = "0";
    this.removeClass();
  }

  onClickSubtract() {
    this.operationVal = this.value;
    this.operationVal += '-';
    this.value = "0";
    this.removeClass();
  }

  onClickAdd() {
    this.operationVal = this.value;
    this.operationVal += '+';
    this.value = "0";
    this.removeClass();
  }

  doOperation(operator: string, num1: string, num2: string) {
    if (operator == '+') {
      return (Number(num1) + Number(num2)).toString();
    } else if (operator == '-') {
      return (Number(num1) - Number(num2)).toString();
    } else if (operator == '*') {
      return (Number(num1) * Number(num2)).toString();
    } else {
      return ((Number(num1) / Number(num2))).toString();
    }
  }

  findNum1Num2(operation: string) {
    let num1: string, num2: string;
    let index = operation.indexOf('-');
    let operator = "";

    if (index === 0) {
      operation = operation.slice(1);
      if (operation.includes('+')) {
        index = operation.indexOf('+');
        operator = "+";
      }

      if (operation.includes('-')) {
        index = operation.indexOf('-');
        operator = "-";
      }

      if (operation.includes('*')) {
        index = operation.indexOf('*');
        operator = "*";
      }

      if (operation.includes('/')) {
        index = operation.indexOf('/');
        operator = "/";
      }

      num1 = '-' + operation.slice(0, index);
      num2 = operation.slice(index + 1);
    } else {
      if (operation.includes('+')) {
        index = operation.indexOf('+');
        operator = "+";
      }

      if (operation.includes('-')) {
        index = operation.indexOf('-');
        operator = "-";
      }

      if (operation.includes('*')) {
        index = operation.indexOf('*');
        operator = "*";
      }

      if (operation.includes('/')) {
        index = operation.indexOf('/');
        operator = "/";
      }

      num1 = operation.slice(0, index);
      num2 = operation.slice(index + 1);
    }
    return { num1, num2, operator };
  }

  onClickshowVal() {
    if (this.operationVal) {
      this.operationVal += this.value;
      const { num1, num2, operator } = this.findNum1Num2(this.operationVal);

      if (operator == "+") {
        this.value = this.doOperation('+', num1, num2);
        this.operationVal = "0";
      }

      if (operator == "-") {
        this.value = this.doOperation('-', num1, num2);
        this.operationVal = "0";
      }

      if (operator == "*") {
        this.value = this.doOperation('*', num1, num2);
        this.operationVal = "0";
      }

      if (operator == "/") {
        this.value = this.doOperation('/', num1, num2);
        this.operationVal = "0";
      }
    }

    if (this.value.indexOf('.') > -1) {
      this.value = (Number(this.value).toFixed(2)).toString();
    }

    if (this.value.length > 7) {
      this.addClass();
    }
  }

  onClickSetVal(val: string) {
    if (this.value == '0') {
      this.value = '';
    }
    this.value += val;
    if (this.value.length > 7) {
      this.addClass();
    }
  }
}
