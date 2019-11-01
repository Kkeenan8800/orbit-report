export class Satellite {

    index: number;
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    color: string;
    rowColor: string;
   
    constructor(index: number, name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        //this.index = index;

        // if (this.index  % 2 === 1){
        //     this.rowColor = 'rgba(0, 0, 100, 0.2)' 
        // } 
        if (this.shouldShowWarning()){
            this.color = 'rgba(199, 0, 36, 0.4)'
            this.rowColor = 'rgba(199, 0, 36, 0.3)'
        }
    }
    shouldShowWarning(){
        if (this.type === 'Space Debris') { return true } 
        else { return false }
    }
}
