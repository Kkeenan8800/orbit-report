export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
   

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;

        // this.sourceList = [
        //     new Satelite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
        //     new Satelite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
        //     new Satelite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
        //     new Satelite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
        //     new Satelite("ISS", "Space Station", "1998-11-20", "LOW", true),
        //   ]

    }
}
