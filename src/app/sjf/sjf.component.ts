import { Component, OnInit } from '@angular/core';
import { times } from '../../environments/environment';
import { createGanntChart }  from '../algorithms/algorithms.component';

var burstTimes = [];
var waitTimes = [];
var turnAroundTimes = [];
var processesOrder = [];

var mainArray = [];

export function SJF(listOfBurstTimes){
  burstTimes = listOfBurstTimes;
  clearArrays(); 
  calculateTimes();
  calculateAverageTimes();
  createGanntChart(burstTimes,getProcessesOrder()); //creates the actual gantt chart
}

function getProcessesOrder(){ //gets the order of processes for gantt chart 
  for(let i = 0; i < mainArray.length; i++){
    processesOrder[i] = "P" + mainArray[i][0]; //(adds P in front for formatting)
  }
  return processesOrder;
}

function calculateTimes(){
  create2dArray();
  mainArray.sort(sortSecondColumn); // sorts by lowest burst time first
  getWaitTimes(); 
  getTurnAroundTimes();
  reorderTimes();
  
}

function reorderTimes(){
  var reorderedTA = [];
  var reorderedWait = [];

  for(let i = 0; i < turnAroundTimes.length;i++){
    reorderedTA[mainArray[i][0]] = turnAroundTimes[i];
  }
 
  for(let i = 0; i < waitTimes.length-1;i++){
    reorderedWait[mainArray[i][0]] = waitTimes[i];
  }

//sets global variable arrays
  times.taTimes = reorderedTA; 
  times.waitTimes = reorderedWait;
}

function create2dArray(){ //creates 2d array to keep track of process and corresponding burst time
  for(let i = 0; i < burstTimes.length; i++){
    mainArray[i] = [(i+1),burstTimes[i]]; //element0 = process, element1 = burst time
  }
}

function getWaitTimes(){ //wait times = wait time + burst time (first wait time is 0)
  waitTimes[0] = 0;
  for(let i = 1; i < mainArray.length+1; i++){
    waitTimes[i] = Number(waitTimes[i-1])+Number(mainArray[i-1][1]);     
  }
}

function getTurnAroundTimes(){ //gets the turnaround times, 
  for(let i = 1; i < burstTimes.length+1; i++){
    turnAroundTimes[i-1] = waitTimes[i];
  }
}

function sortSecondColumn(a, b) { //sorts the second column of 2d array from least to greatest
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

function clearArrays(){ //makes sure all arrays are empty before SJF tries to run.
  times.taTimes = [];
  times.waitTimes = [];
  waitTimes = [];
  turnAroundTimes = [];
  mainArray = [];
}

function calculateAverageTimes(){ //calculates avg turn around and wait times for SJF 
  var sumWait = 0; //initializing variables
  var sumTurn = 0;
  times.taTimes.shift(); // gets rid of first empty value
  times.waitTimes.shift();
  console.log(times.waitTimes.length);
  console.log(times.waitTimes)
  for(let i = 0; i < times.waitTimes.length; i++){ //uses waitTimes except for the first(empty)
    //gets values and adds them all.
    var currentElem = parseInt(times.waitTimes[i]);
    sumWait += currentElem;
  }
  for(let i = 0; i < times.taTimes.length;i++){ //uses all of turnAround Times except first (empty), gets values and adds them all.
    var currentElem2 = parseInt(times.taTimes[i]);
    sumTurn += currentElem2;
  }
  var averageWaitTimes = sumWait/(times.waitTimes.length); //finds the average using values from above 
  var averageTurnAround = sumTurn/(times.taTimes.length); //length-1 because we ignore first (empty) value

  //displays the averages rounded to 2 decimal places
  document.getElementById("avgWaitTimes").innerHTML = "Average Wait Times: " + averageWaitTimes.toFixed(2); 
  document.getElementById("avgTurnAround").innerHTML = "Average Turn Around Times: " + averageTurnAround.toFixed(2);
}

@Component({
  selector: 'app-sjf',
  templateUrl: './sjf.component.html',
  styleUrls: ['./sjf.component.css']
})

export class SjfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
