import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ProcessesComponent } from './processes/processes.component';
import { FCFSComponent } from './fcfs/fcfs.component';
import { SjfComponent } from './sjf/sjf.component';


@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsComponent,
    ProcessesComponent,
    FCFSComponent,
    SjfComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
