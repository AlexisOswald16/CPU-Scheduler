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
