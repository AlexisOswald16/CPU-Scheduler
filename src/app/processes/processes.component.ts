import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clearTable(table){ //clears all fields (reset on button click, essentially)
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
      table.removeChild(tableRows[x]);
    }
  }

  createTable(number){
    var table = document.getElementById('simulatorTable');
    this.clearTable(table); //clears every time choice changes
   
    switch(number){
      case "1":{
        this.createRow1(table) ; 
        break;
      }
      case "2":{
        this.createRow1(table);
        this.createRow2(table);
        break;
      }
      case "3":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        break;
      }
      case "4":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        break;
      }
      case "5":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        break;
      }
      case "6":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        this.createRow6(table);
        break;
      }
      case "7":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        this.createRow6(table);
        this.createRow7(table);
        break;
      }
      case "8":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        this.createRow6(table);
        this.createRow7(table);
        this.createRow8(table);
        break;
      }
      case "9":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        this.createRow6(table);
        this.createRow7(table);
        this.createRow8(table);
        this.createRow9(table);
        break;
      }
      case "10":{
        this.createRow1(table);
        this.createRow2(table);
        this.createRow3(table);
        this.createRow4(table);
        this.createRow5(table);
        this.createRow6(table);
        this.createRow7(table);
        this.createRow8(table);
        this.createRow9(table);
        this.createRow10(table);
        break;
      }
    }
  }

  createRow1(table){
    var newRow = document.createElement("tr");  
    var r1c1 = document.createElement('td')
    var r1c2 = document.createElement('input')
    var r1c3 = document.createElement('td')
    var r1c4 = document.createElement('td')

    r1c1.innerHTML="P1";
    r1c2.type='text'
    r1c3.innerHTML="3"
    r1c4.innerHTML="4"
    this.appendChildren(newRow, r1c1, r1c2, r1c3, r1c4);
    table.insertBefore(newRow, table.childNodes[1]);  
  }

  createRow2(table){
    var newRow = document.createElement("tr");  
    var r2c1 = document.createElement('td')
    var r2c2 = document.createElement('input')
    var r2c3 = document.createElement('td')
    var r2c4 = document.createElement('td')

    r2c1.innerHTML="P2";
    r2c2.type='text'
    r2c3.innerHTML="3"
    r2c4.innerHTML="4"
    this.appendChildren(newRow, r2c1, r2c2, r2c3, r2c4);
    table.insertBefore(newRow, table.childNodes[2]);  
  }

  createRow3(table){
    var newRow = document.createElement("tr");  
    var r3c1 = document.createElement('td')
    var r3c2 = document.createElement('input')
    var r3c3 = document.createElement('td')
    var r3c4 = document.createElement('td')

    r3c1.innerHTML="P3";
    r3c2.type='text'
    r3c3.innerHTML="3"
    r3c4.innerHTML="4"
    this.appendChildren(newRow, r3c1, r3c2, r3c3, r3c4);
    table.insertBefore(newRow, table.childNodes[3]);  
  }

  createRow4(table){
    var newRow = document.createElement("tr");  
    var r4c1 = document.createElement('td')
    var r4c2 = document.createElement('input')
    var r4c3 = document.createElement('td')
    var r4c4 = document.createElement('td')

    r4c1.innerHTML="P4";
    r4c2.type='text'
    r4c3.innerHTML="3"
    r4c4.innerHTML="4"
    this.appendChildren(newRow, r4c1, r4c2, r4c3, r4c4);
    table.insertBefore(newRow, table.childNodes[4]);  
  }

  createRow5(table){
    var newRow = document.createElement("tr");  
    var r5c1 = document.createElement('td')
    var r5c2 = document.createElement('input')
    var r5c3 = document.createElement('td')
    var r5c4 = document.createElement('td')

    r5c1.innerHTML="P5";
    r5c2.type='text'
    r5c3.innerHTML="3"
    r5c4.innerHTML="4"
    this.appendChildren(newRow, r5c1, r5c2, r5c3, r5c4);
    table.insertBefore(newRow, table.childNodes[5]);  
  }

  createRow6(table){
    var newRow = document.createElement("tr");  
    var r6c1 = document.createElement('td')
    var r6c2 = document.createElement('input')
    var r6c3 = document.createElement('td')
    var r6c4 = document.createElement('td')

    r6c1.innerHTML="P6";
    r6c2.type='text'
    r6c3.innerHTML="3"
    r6c4.innerHTML="4"
    this.appendChildren(newRow, r6c1, r6c2, r6c3, r6c4);
    table.insertBefore(newRow, table.childNodes[6]);  
  }
  createRow7(table){
    var newRow = document.createElement("tr");  
    var r7c1 = document.createElement('td')
    var r7c2 = document.createElement('input')
    var r7c3 = document.createElement('td')
    var r7c4 = document.createElement('td')

    r7c1.innerHTML="P7";
    r7c2.type='text'
    r7c3.innerHTML="3"
    r7c4.innerHTML="4"
    this.appendChildren(newRow, r7c1, r7c2, r7c3, r7c4);
    table.insertBefore(newRow, table.childNodes[7]);  
  }

  createRow8(table){
    var newRow = document.createElement("tr");  
    var r8c1 = document.createElement('td')
    var r8c2 = document.createElement('input')
    var r8c3 = document.createElement('td')
    var r8c4 = document.createElement('td')

    r8c1.innerHTML="P8";
    r8c2.type='text'
    r8c3.innerHTML="3"
    r8c4.innerHTML="4"
    this.appendChildren(newRow, r8c1, r8c2, r8c3, r8c4);
    table.insertBefore(newRow, table.childNodes[8]);  
  }

  createRow9(table){
    var newRow = document.createElement("tr");  
    var r9c1 = document.createElement('td')
    var r9c2 = document.createElement('input')
    var r9c3 = document.createElement('td')
    var r9c4 = document.createElement('td')

    r9c1.innerHTML="P9";
    r9c2.type='text'
    r9c3.innerHTML="3"
    r9c4.innerHTML="4"
    this.appendChildren(newRow, r9c1, r9c2, r9c3, r9c4);
    table.insertBefore(newRow, table.childNodes[9]);  
  }

  createRow10(table){
    var newRow = document.createElement("tr");  
    var r10c1 = document.createElement('td')
    var r10c2 = document.createElement('input')
    var r10c3 = document.createElement('td')
    var r10c4 = document.createElement('td')

    r10c1.innerHTML="P10";
    r10c2.type='text'
    r10c3.innerHTML="3"
    r10c4.innerHTML="4"
    this.appendChildren(newRow, r10c1, r10c2, r10c3, r10c4);
    table.insertBefore(newRow, table.childNodes[10]);  
  }

  appendChildren(newRow, arg1, arg2, arg3, arg4){
    newRow.appendChild(arg1);  
    newRow.appendChild(arg2);  
    newRow.appendChild(arg3);  
    newRow.appendChild(arg4); 
  }
}


