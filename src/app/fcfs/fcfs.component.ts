import { Component, OnInit } from '@angular/core';
import { times } from '../../environments/environment';
import { createGanntChart }  from '../algorithms/algorithms.component';
//import { clearGanntChart }  from '../algorithms/algorithms.component';
//import { displayBottomWaitTimes }  from '../algorithms/algorithms.component';

var burstTimes = [];
var waitTimes = [];
var turnAroundTimes = [];
var processesOrder = [];

export function FCFS(burstTimeList){
  burstTimes = burstTimeList; //copies burstTimeList over to burstTimes
  clearArrays(); //clears arrays for new calculations
  calculateTimes(); //calculates the wait and turn around times
  calculateAverageTimes(); //calculates the average times for each 
  getProcessesOrder(); //gets the order of the processes for the gantt chart
  createGanntChart(burstTimes,processesOrder); //creates the actual gantt chart
  //displayBottomWaitTimes(turnAroundTimes) //displays the wait times at the bottom (TODO)
}

function clearArrays(){ //makes sure all arrays are empty before FCFS tries to run.
  times.taTimes = [];
  times.waitTimes = [];
  waitTimes = [];
  turnAroundTimes = [];
}

function calculateAverageTimes(){ //calculates avg turn around and wait times for FCFS 
 //initializing variables
  var sumWait = 0; 
  var sumTurn = 0;

  for(let i = 0; i < waitTimes.length-1;i++){ //uses waitTimes except for last element (1 too many), gets values and adds them all.
    var currentElem = parseInt(waitTimes[i]);
    sumWait += currentElem; //cumulative sum of wait times
  }

  for(let i = 0; i < turnAroundTimes.length;i++){ //uses all of turnAround Times, gets values and adds them all.
    var currentElem2 = parseInt(turnAroundTimes[i]);
    sumTurn += currentElem2; // cumulative sum of turn around times
  }

  //finds the average using values from above 
  var averageWaitTimes = sumWait/(waitTimes.length-1); 
  var averageTurnAround = sumTurn/(turnAroundTimes.length);

  //displays the averages rounded to 2 decimal places
  document.getElementById("avgWaitTimes").innerHTML = "Average Wait Times: " + averageWaitTimes.toFixed(2)+ " ms"; 
  document.getElementById("avgTurnAround").innerHTML = "Average Turn Around Times: " + averageTurnAround.toFixed(2) + " ms";
}

function getProcessesOrder(){ // the order is always the order they are created for FCFS, so just need to generate not based off of burst/wait times
  for(let i = 0; i<burstTimes.length; i++){
    var insertItem = "P" + (i+1); // dynamically inserting P1 through P(the length of burstTimes)
    processesOrder[i] = insertItem; 
  }
}

function calculateTimes(){ // calculates the wait and turn around times
  var cumulativeWaitTimes = 0; 
  waitTimes.push(cumulativeWaitTimes); // we want the first wait time to be 0
  var cumulativeTATime = 0; // each TA time is the turnarounf time + wait time, but we dont want the 

  for(let i = 0; i < burstTimes.length; i++){
    cumulativeWaitTimes = Number(cumulativeWaitTimes)+Number(burstTimes[i]); //each wait time is the burst time + wait time
    cumulativeTATime = Number(cumulativeTATime) + Number(burstTimes[i]); //each TA time is the TA time plus the burst time
    waitTimes.push(cumulativeWaitTimes); // adds the wait time to the array
    turnAroundTimes.push(cumulativeTATime); // adds the TA time to the array
  }
  //copies to global variables
  times.taTimes = turnAroundTimes; 
  times.waitTimes = waitTimes; 
}

@Component({
  selector: 'app-fcfs',
  templateUrl: './fcfs.component.html',
  styleUrls: ['./fcfs.component.css']
})
export class FCFSComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
