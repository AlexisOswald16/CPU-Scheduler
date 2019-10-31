import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ProcessesComponent } from './processes/processes.component';


@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsComponent,
    ProcessesComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
