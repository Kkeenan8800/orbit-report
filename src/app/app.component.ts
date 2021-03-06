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
        for (let i = 0; i < fSat.length; i++) {
          this.sourceList.push(
            new Satellite(
              i,
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
 
//   search(): void {
//     let matchingSatellites: Satellite[] = [];
//     let searchTerm: string;
//     searchTerm = document.getElementById('searchTerm').value.toLowerCase();
//     //console.log(searchTerm)/ 
//     //searchTerm = searchTerm.value.toLowerCase();
//     for(let i=0; i < this.sourceList.length; i++) {
//        let nameIndex = this.sourceList[i].name.toLowerCase().indexOf(searchTerm);
//        let typeIndex = this.sourceList[i].type.toLowerCase().indexOf(searchTerm);
//        let orbitTypeIndex = this.sourceList[i].orbitType.toLowerCase().indexOf(searchTerm);
       
//        if (nameIndex >= 0 || typeIndex >= 0 || orbitTypeIndex >= 0) { 
//           matchingSatellites.push(this.sourceList[i]);
//        }   
//     }

//     this.displayList = matchingSatellites;
//  }

search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {

     let nameIndex = this.sourceList[i].name.toLowerCase().indexOf(searchTerm);
     let typeIndex = this.sourceList[i].type.toLowerCase().indexOf(searchTerm);
     let orbitTypeIndex = this.sourceList[i].orbitType.toLowerCase().indexOf(searchTerm);
     if (nameIndex >= 0 || typeIndex >= 0 || orbitTypeIndex >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
}

} 

