import { Component } from '@angular/core';
import { Satelite } from './satelite'

export class sateliteArr{
  sourceList: Satelite[];

  constructor() {
    this.sourceList = [
      new Satelite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
      new Satelite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
      new Satelite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
      new Satelite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
      new Satelite("ISS", "Space Station", "1998-11-20", "LOW", true),
    ]
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'orbit-report';
}
