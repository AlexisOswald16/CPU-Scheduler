import { Component, OnInit } from '@angular/core';
import { Algorithm } from '../algorithms';
import { ALGORITHMS } from '../all-algorithms';
import { selectedAlgorithm } from '../../environments/environment';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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

export function clearGanntChart(){ //Clears the chart
  for(let i = 0; i < 10;i++){
    var elementID = (i+1)+"Processes";
    document.getElementById(elementID).style.display = "none";
  }
}

function setAllElements(divs,processesOrder,value){ //sets the text inside the Gannt Chart
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = processesOrder[value];
  }
}

function getElementByIdToDisplay(numberOfProcesses){ //Find which process list should be displayed
  var toGet = numberOfProcesses + "Processes";
  tagToUse = document.getElementById("processList"); 
  tagToUse.id = toGet;
  ganntChartDisplayed = tagToUse;
  document.getElementById(toGet).style.display = "table";
}
/* Styling issue- TODO for a later date 
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
  var numberOfProcesses = burstTimes.length;
  document.getElementById("ganttChartTitle").style.display = "table";
  getElementByIdToDisplay(numberOfProcesses); //Displays correct list
  setAllDivs(numberOfProcesses,processesOrder); //Sets the text for the Gannt chart
}
