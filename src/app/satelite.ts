export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    color: string;
    rowColor: string;
   
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        
        if (this.shouldShowWarning()){
            this.color = 'rgba(199, 0, 36, 0.5)'
            this.rowColor = 'rgba(199, 0, 36, 0.3)'
        }
    }

    shouldShowWarning(){
        if (this.type === 'Space Debris') { return true } 
        else { return false }
    }
}
