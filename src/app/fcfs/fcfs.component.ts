import { Component, OnInit } from '@angular/core';
import { times } from '../../environments/environment';
import { createGanntChart }  from '../algorithms/algorithms.component';
//import { clearGanntChart }  from '../algorithms/algorithms.component';
import { displayBottomWaitTimes }  from '../algorithms/algorithms.component';



var burstTimes = [];
var waitTimes = [];
var turnAroundTimes = [];
var processesOrder = [];

export function FCFS(burstTimeList){
  burstTimes = burstTimeList;
  clearArrays();
  //clearGanntChart();
  calculateTimes();
  getProcessesOrder();
  createGanntChart(burstTimes,processesOrder);
  displayBottomWaitTimes(turnAroundTimes)
  //need to make correct element appear, then create evenly spaced list of processes (using another table)
}

function clearArrays(){
  times.taTimes = [];
  times.waitTimes = [];
  waitTimes = [];
  turnAroundTimes = [];
}

function getProcessesOrder(){ // the order is always the order they are created for FCFS, so just need to generate not based off of burst/wait times
  for(let i = 0; i<burstTimes.length; i++){
    var insertItem = "P" + (i+1);
    processesOrder[i] = insertItem;
  }
}

function calculateTimes(){
  var cumulativeWaitTimes = 0;
  waitTimes.push(cumulativeWaitTimes);
  var cumulativeTATime = 0;

  for(let i = 0; i < burstTimes.length; i++){
    cumulativeWaitTimes = Number(cumulativeWaitTimes)+Number(burstTimes[i]);
    cumulativeTATime = Number(cumulativeTATime) + Number(burstTimes[i]);
    waitTimes.push(cumulativeWaitTimes);
    turnAroundTimes.push(cumulativeTATime);
  }
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
