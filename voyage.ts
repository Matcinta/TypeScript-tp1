
class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }

    toString() {
        return `Destination: ${this.nom}, Tarif: ${this._prix}`;
    }
}

class SejourService {
    private _sejours: Sejour[];
    constructor() {
        this._sejours = new Array<Sejour>();
        this._sejours.push(new Sejour('Bali', 1240));
        this._sejours.push(new Sejour('Palawan', 1645));
    }

    findTripByName(nom: string) {
        let j = 'Ce séjour n\'existe pas';
        for (const trip of this._sejours) {//(let i:number =0; i<this._sejours.length; i++){
            if (trip.nom === nom) {
                j = trip.toString();
            }
        }
        return j;
    }
}



let sejour1 = new SejourService();
console.log(sejour1.findTripByName('Toronto'));



