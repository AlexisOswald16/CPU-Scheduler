//imports allow us to use functions from other classes
import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { selectedAlgorithm } from '../../environments/environment';
import {FCFS} from '../fcfs/fcfs.component'; 
import {SJF} from '../sjf/sjf.component';
import { times } from '../../environments/environment'; // global variables are here


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

  fillTimes(){ //fills the wait times and ta times on the actual html
    for(let i = 0; i < listOfWaitFields.length; i++){
      listOfWaitFields[i].innerHTML = times.waitTimes[i].toString();
     }
     for(let i = 0; i < listOfTAFields.length; i++){
      listOfTAFields[i].innerHTML = times.taTimes[i].toString();
     }
  }

  getAllBurstTimes(){ //gets the burst times from the form and adds to array
    listOfBurstTimes = []; 
    for(let i = 0; i < listOfFields.length; i++){
      if(listOfFields[i].value == "" || listOfFields[i].value.includes("-")|| listOfFields[i].value.includes(".") || Number.isNaN(Number(listOfFields[i].value))){ //makes sure that only positive integers are being inserted
        alert("You cannot have characters, negative numbers, decimal numbers, or blank values for process burst times. Only input positive integers.\n\nPlease check your values and try again.")
        return false;
      } else { 
        listOfBurstTimes.push(listOfFields[i].value); //if the value is correct then you can add it to the listOfBurstTimes
      }
    }
    return true; //only reached if all inputted values are valid
  }

  calculateStart(){ // starts the calculations (on button click)
    if(this.getAllBurstTimes() == true){ //gets all burst times 
    var desiredAlgorithm = selectedAlgorithm.algorithmChosen; // get the chosen algorithm from the form

    if(desiredAlgorithm == "First Come First Serve"){ // starts FCFS
      FCFS(listOfBurstTimes); // all calculations occur here
      this.fillTimes(); // fills all of the elements on the screen
    }

    if(desiredAlgorithm == "Shortest Job First (SJF)"){ // starts SJF
      SJF(listOfBurstTimes); 
      this.fillTimes();
    }

    if(desiredAlgorithm == "Shortest Remaining Time First"){ // starts STRF
      alert("This has not been developed. Please choose either First Come First Serve or Shortest Job First.")
      //to be developed
    }

    if(desiredAlgorithm == "Round Robin"){ // starts RR
      alert("This has not been developed. Please choose either First Come First Serve or Shortest Job First.")
      //to be developed
    }

    if(desiredAlgorithm == "Priority"){ // starts Priority
      alert("This has not been developed. Please choose either First Come First Serve or Shortest Job First.")
      //to be developed
    }
  } else{
      return;
    }
  }

  refreshPage(){ // using as a clear button for now- ideally would not be a page refresh, and would set all to original positions.
    location.reload();
  }

  randomBurstTimes(selectedNumber){ // creates correct amount of random integers (for burst times)
    let listOfRand: number[] = [];
    for(let i = 0; i < selectedNumber; i++){
      listOfRand.push(this.getRandomInt(10)); //gets a random integer between 0 and 10.
    }
    for(let i = 0; i < listOfRand.length; i++){
      listOfFields[i].defaultValue = listOfRand[i].toString(); //sets the actual inputs to the random values
     }
  }

  getRandomInt(max) { // creates random integers (for burst times)
    return Math.floor(Math.random() * Math.floor(max));
  }

  clearTable(table){ //clears all fields (reset on button click, essentially)
    listOfFields = [];
    var tableRows = table.getElementsByTagName('tr'); 
    var rowCount = tableRows.length;
    for (var i = rowCount-1; i > 0; i--) { //gets all tablerows and removes them from the table, from last added to first added
      table.removeChild(tableRows[i]);
    }
  }

  createTable(number){
    table = document.getElementById('simulatorTable'); //gets the table
    table.style.display = "table"; //displays the teable header
    this.clearTable(table); //clears every time choice changes
    switch(number){ //need to optimize using array, but for now this is how the table is created
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


