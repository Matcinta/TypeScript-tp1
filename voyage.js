"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    Sejour.prototype.toString = function () {
        return "Destination: " + this.nom + ", Tarif: " + this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = new Array();
        this._sejours.push(new Sejour('Bali', 1240));
        this._sejours.push(new Sejour('Palawan', 1645));
    }
    SejourService.prototype.findTripByName = function (nom) {
        var j = 'Ce séjour n\'existe pas';
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) { //(let i:number =0; i<this._sejours.length; i++){
            var trip = _a[_i];
            if (trip.nom === nom) {
                j = trip.toString();
            }
        }
        return j;
    };
    return SejourService;
}());
var sejour1 = new SejourService();
console.log(sejour1.findTripByName('Toronto'));
