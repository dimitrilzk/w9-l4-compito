function getApi(){
let urlApi = fetch("../json/Abbigliamento.json").then((response) => response.json());
}
class Abbigliamento {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, 
        prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number) {
        this.id=id;
        this.codprod=codprod;
        this.collezione=collezione;
        this.capo=capo;
        this.modello=modello;
        this.quantita=quantita;
        this.colore=colore;
        this.prezzoivaesclusa=prezzoivaesclusa;
        this.prezzoivainclusa=prezzoivainclusa;
        this.disponibile=disponibile;
        this.saldo=saldo;
    }
    getSaldoCapo():number {
        return this.saldo
    }
    getAcquistoCapo():number {
        return this.prezzoivainclusa
    }
}
