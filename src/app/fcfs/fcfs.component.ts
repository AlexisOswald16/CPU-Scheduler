import { Component, OnInit } from '@angular/core';
import { times } from '../../environments/environment';

var burstTimes = [];
var waitTimes = [];
var turnAroundTimes = [];

export function FCFS(numberOfProcesses, burstTimeList){
  burstTimes = burstTimeList;
  calculateTimes(numberOfProcesses);
}

function calculateTimes(numberOfProcesses){
  var cumulativeWaitTimes = 0;
  waitTimes.push(cumulativeWaitTimes);
  var cumulativeTATime = 0;

  for(let i = 0; i < numberOfProcesses; i++){
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
