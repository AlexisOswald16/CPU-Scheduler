import { Component, OnInit } from '@angular/core';
import { Algorithm } from '../algorithms';
import { ALGORITHMS } from '../all-algorithms';
import { selectedAlgorithm } from '../../environments/environment';

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

  getSelectedAlgorithm(algorithmName){
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
function getElementByIdToDisplay(numberOfProcesses){ //Find which list should be displayed
  var toGet = numberOfProcesses + "Processes";
  document.getElementById(toGet).style.display = "table";
}

export function displayBottomWaitTimes(TATimes){
  var parentNode = document.getElementById("processList");
  var totalNumber = TATimes.length+1;
  
  var firstElem = document.createElement("li");
  firstElem.textContent= "0";
  parentNode.appendChild(firstElem);
  console.log(totalNumber)
 
  for(let i = 0; i < totalNumber-1; i++){
    var node = document.getElementById("processList");
    var elem = document.createElement("li");
    elem.style.display = "table-cell";
    elem.style.textAlign = "left";
    elem.textContent= TATimes[i].toString();
    node.appendChild(elem);
  }

}

export function createGanntChart(burstTimes,processesOrder){ 
  var numberOfProcesses = burstTimes.length;
  getElementByIdToDisplay(numberOfProcesses); //Displays correct list
  setAllDivs(numberOfProcesses,processesOrder); //Sets the text for the Gannt chart
}
