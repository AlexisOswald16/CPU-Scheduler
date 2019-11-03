import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { selectedAlgorithm } from '../../environments/environment';
import {FCFS} from '../fcfs/fcfs.component';
import { times } from '../../environments/environment';


var listOfFields: HTMLInputElement[] = [];
var listOfBurstTimes: String[] = [];
var listOfWaitFields: HTMLTableDataCellElement[] = [];
var listOfTAFields: HTMLTableDataCellElement[] = [];
var table = document.getElementById('simulatorTable');

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})

export class ProcessesComponent implements OnInit{
  constructor() { }

  ngOnInit() { }

  fillTimes(){
    for(let i = 0; i < listOfWaitFields.length; i++){
      listOfWaitFields[i].innerHTML = times.waitTimes[i].toString();
     }
     for(let i = 0; i < listOfTAFields.length; i++){
      listOfTAFields[i].innerHTML = times.taTimes[i].toString();
     }
  }

  getAllBurstTimes(){
    listOfBurstTimes = []; 
    for(let i = 0; i < listOfFields.length; i++){
      listOfBurstTimes.push(listOfFields[i].value);
    }
    console.log(listOfBurstTimes)
  }

  calculateStart(numberOfProcesses){
    this.getAllBurstTimes();
    var desiredAlgorithm = selectedAlgorithm.algorithmChosen;

    if(desiredAlgorithm == "First Come First Serve"){  
      FCFS(numberOfProcesses, listOfBurstTimes);
      this.fillTimes();
    }

    if(desiredAlgorithm == "Shortest Job First (SJF)"){

    }

    if(desiredAlgorithm == "Shortest Remaining Time First"){

    }

    if(desiredAlgorithm == "Round Robin"){

    }

    if(desiredAlgorithm == "Priority"){

    }
  }

  randomBurstTimes(selectedNumber){ // creates correct amount of random integers (for burst times)
    let listOfRand: number[] = [];
    var amountNeeded = selectedNumber;
    for(let i = 0; i < amountNeeded; i++){
      listOfRand.push(this.getRandomInt(10));
    }
    this.fillTextFields(listOfRand);
  }

  fillTextFields(listOfRand){ // fills random burst times on front end
    for(let i = 0; i < listOfRand.length; i++){
     listOfFields[i].defaultValue = listOfRand[i].toString();
    }
  }

  getRandomInt(max) { // creates random integers (for burst times)
    return Math.floor(Math.random() * Math.floor(max));
  }

  clearTable(table){ //clears all fields (reset on button click, essentially)
    listOfFields = [];
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
      table.removeChild(tableRows[x]);
    }
  }
  // TODO: Clear all when clear button is clicked
  // clearAllElements(){
  //   this.clearTable(table);
  //   var processOptions = document.getElementById("processesOptions");
  // }

  createTable(number){
    table = document.getElementById('simulatorTable');
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
    this.appendChildren(newRow, r1c1, r1c2, r1c3, r1c4);
    table.insertBefore(newRow, table.childNodes[1]); 
    listOfFields.push(r1c2);
    listOfWaitFields.push(r1c3);
    listOfTAFields.push(r1c4);
  }

  createRow2(table){
    var newRow = document.createElement("tr");  
    var r2c1 = document.createElement('td')
    var r2c2 = document.createElement('input')
    var r2c3 = document.createElement('td')
    var r2c4 = document.createElement('td')

    r2c1.innerHTML="P2";
    r2c2.type='text'
    this.appendChildren(newRow, r2c1, r2c2, r2c3, r2c4);
    table.insertBefore(newRow, table.childNodes[2]); 
    listOfFields.push(r2c2);
    listOfWaitFields.push(r2c3);
    listOfTAFields.push(r2c4);
 
  }

  createRow3(table){
    var newRow = document.createElement("tr");  
    var r3c1 = document.createElement('td')
    var r3c2 = document.createElement('input')
    var r3c3 = document.createElement('td')
    var r3c4 = document.createElement('td')

    r3c1.innerHTML="P3";
    r3c2.type='text'
    this.appendChildren(newRow, r3c1, r3c2, r3c3, r3c4);
    table.insertBefore(newRow, table.childNodes[3]);  
    listOfFields.push(r3c2);
    listOfWaitFields.push(r3c3);
    listOfTAFields.push(r3c4);

  }

  createRow4(table){
    var newRow = document.createElement("tr");  
    var r4c1 = document.createElement('td')
    var r4c2 = document.createElement('input')
    var r4c3 = document.createElement('td')
    var r4c4 = document.createElement('td')

    r4c1.innerHTML="P4";
    r4c2.type='text'
    this.appendChildren(newRow, r4c1, r4c2, r4c3, r4c4);
    table.insertBefore(newRow, table.childNodes[4]);  
    listOfFields.push(r4c2);
    listOfWaitFields.push(r4c3);
    listOfTAFields.push(r4c4);

  }

  createRow5(table){
    var newRow = document.createElement("tr");  
    var r5c1 = document.createElement('td')
    var r5c2 = document.createElement('input')
    var r5c3 = document.createElement('td')
    var r5c4 = document.createElement('td')

    r5c1.innerHTML="P5";
    r5c2.type='text'
    this.appendChildren(newRow, r5c1, r5c2, r5c3, r5c4);
    table.insertBefore(newRow, table.childNodes[5]);  
    listOfFields.push(r5c2);
    listOfWaitFields.push(r5c3);
    listOfTAFields.push(r5c4);

  }

  createRow6(table){
    var newRow = document.createElement("tr");  
    var r6c1 = document.createElement('td')
    var r6c2 = document.createElement('input')
    var r6c3 = document.createElement('td')
    var r6c4 = document.createElement('td')

    r6c1.innerHTML="P6";
    r6c2.type='text'
    this.appendChildren(newRow, r6c1, r6c2, r6c3, r6c4);
    table.insertBefore(newRow, table.childNodes[6]); 
    listOfFields.push(r6c2);
    listOfWaitFields.push(r6c3);
    listOfTAFields.push(r6c4);
 
  }
  createRow7(table){
    var newRow = document.createElement("tr");  
    var r7c1 = document.createElement('td')
    var r7c2 = document.createElement('input')
    var r7c3 = document.createElement('td')
    var r7c4 = document.createElement('td')

    r7c1.innerHTML="P7";
    r7c2.type='text'
    this.appendChildren(newRow, r7c1, r7c2, r7c3, r7c4);
    table.insertBefore(newRow, table.childNodes[7]);  
    listOfFields.push(r7c2);
    listOfWaitFields.push(r7c3);
    listOfTAFields.push(r7c4);

  }

  createRow8(table){
    var newRow = document.createElement("tr");  
    var r8c1 = document.createElement('td')
    var r8c2 = document.createElement('input')
    var r8c3 = document.createElement('td')
    var r8c4 = document.createElement('td')

    r8c1.innerHTML="P8";
    r8c2.type='text'
    this.appendChildren(newRow, r8c1, r8c2, r8c3, r8c4);
    table.insertBefore(newRow, table.childNodes[8]);  
    listOfFields.push(r8c2);
    listOfWaitFields.push(r8c3);
    listOfTAFields.push(r8c4);

  }

  createRow9(table){
    var newRow = document.createElement("tr");  
    var r9c1 = document.createElement('td')
    var r9c2 = document.createElement('input')
    var r9c3 = document.createElement('td')
    var r9c4 = document.createElement('td')

    r9c1.innerHTML="P9";
    r9c2.type='text'
    this.appendChildren(newRow, r9c1, r9c2, r9c3, r9c4);
    table.insertBefore(newRow, table.childNodes[9]);  
    listOfFields.push(r9c2);
    listOfWaitFields.push(r9c3);
    listOfTAFields.push(r9c4);

  }

  createRow10(table){
    var newRow = document.createElement("tr");  
    var r10c1 = document.createElement('td')
    var r10c2 = document.createElement('input')
    var r10c3 = document.createElement('td')
    var r10c4 = document.createElement('td')

    r10c1.innerHTML="P10";
    r10c2.type='text'
    this.appendChildren(newRow, r10c1, r10c2, r10c3, r10c4);
    table.insertBefore(newRow, table.childNodes[10]);  
    listOfFields.push(r10c2);
    listOfWaitFields.push(r10c3);
    listOfTAFields.push(r10c4);

  }

  appendChildren(newRow, arg1, arg2, arg3, arg4){
    newRow.appendChild(arg1);  
    newRow.appendChild(arg2);  
    newRow.appendChild(arg3);  
    newRow.appendChild(arg4); 
  }
}


