import { Component, OnInit } from '@angular/core';
import { Algorithm } from '../algorithms';
import { ALGORITHMS } from '../all-algorithms';
import { selectedAlgorithm } from '../../environments/environment';

var tagToUse;
var ganntChartDisplayed;

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})



export class AlgorithmsComponent implements OnInit {
  algorithms = ALGORITHMS;

  constructor() {
   }
  ngOnInit() {
  }

  getSelectedAlgorithm(algorithmName){ //gets the selected algorithm
    selectedAlgorithm.algorithmChosen = algorithmName.toString();
  }
}

function setAllDivs(numberOfProcesses,processesOrder){ //Gets the items in order to actually set the text
  for(let i = 0; i < numberOfProcesses; i++){
    var className = "b"+(i+1);
    var divs = document.getElementsByClassName(className);
    setAllElements(divs, processesOrder, i);       
  }
}

export function clearGanntChart(){ // clears the chart (typo in gantt)
  for(let i = 0; i < 10;i++){
    var elementID = (i+1)+"Processes";
    document.getElementById(elementID).style.display = "none";
  }
}

function setAllElements(divs, processesOrder, value){ //sets the text inside the Gantt Chart
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = processesOrder[value];
  }
}

function getElementByIdToDisplay(numberOfProcesses){ //Find which process list should be displayed
  var toGet = numberOfProcesses + "Processes"; //creating the id that is to be searched for 
  tagToUse = document.getElementById("processList"); //all possible options
  tagToUse.id = toGet; //sets the id for the table
  ganntChartDisplayed = tagToUse; //sets the gantt chart that is being displayed to the current id created
  document.getElementById(toGet).style.display = "table"; //displays the chart (no longer display: none)
}
/* Styling issue- TODO for a later date- add numbers to the bottom of the gantt chart
export function displayBottomWaitTimes(TATimes){
  var parentNode = tagToUse;
  var totalNumber = TATimes.length+1;
  
  var firstElem = document.createElement("li");
  firstElem.textContent= "0";
  firstElem.style.width = "auto";
  firstElem.style.display = "table-cell";
  firstElem.style.textAlign = "left";
  parentNode.appendChild(firstElem);
 
  for(let i = 0; i < totalNumber-1; i++){
    var node = tagToUse;
    var elem = document.createElement("li");
    elem.style.display = "table-cell";
    elem.style.textAlign = "left";
    var widthToSet = ganntChartDisplayed.style.width.toString();
    elem.style.width = widthToSet;
    elem.textContent= TATimes[i].toString();
    node.appendChild(elem);
  }
}*/

export function createGanntChart(burstTimes,processesOrder){ 
  var numberOfProcesses = burstTimes.length; //the number of processess = the number of numbers in burst times (each process has 1 burst time)
  document.getElementById("ganttChartTitle").style.display = "table"; // display the title for the gantt chart
  getElementByIdToDisplay(numberOfProcesses); //Displays correct list
  setAllDivs(numberOfProcesses,processesOrder); //Sets the text for the Gannt chart
}
