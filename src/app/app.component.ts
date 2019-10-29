import { Component } from '@angular/core';
import { Satellite } from './satelite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];


  constructor() {
    this.sourceList = [];
    // this.displayList = [];
    let satUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satUrl).then(function(response) {
      response.json().then(function(data) {

        let fSat = data.satellites
        for (let i = 0; i < 9; i++) {
          this.sourceList.push(
            new Satellite(
              fSat[i].name, 
              fSat[i].type, 
              fSat[i].launchDate, 
              fSat[i].orbitType, 
              fSat[i].operational
            )
          );
        }
        this.displayList = this.sourceList.slice(0)
      }.bind(this))
    }.bind(this))
  }

  search(): void {
    let matchingSatellites: Satellite[] = [];
    let searchTerm: string = ''
    searchTerm = document.getElementById('searchTerm').value.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) { 
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    this.displayList = matchingSatellites;
 }

}

