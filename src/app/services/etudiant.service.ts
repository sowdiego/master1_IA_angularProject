import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiants: Etudiant[];
  etudiant!: Etudiant;
  constructor() {
    this.etudiants = [
      {id: 1, matriculeEtudiant: "Et1-01052023123600-@", nomEtudiant: "Aw", prenomEtudiant: "Mamadou", dateNaissEtudiant: new Date("01/14/1999"), addresseEtudiant: "gueultapée", telEtudiant: "777838633" },
      {id: 2, matriculeEtudiant: "Et2-01052023123600-@", nomEtudiant: "Ndiaye", prenomEtudiant: "Mamadou", dateNaissEtudiant: new Date("01/14/1999"), addresseEtudiant: "gueultapée", telEtudiant: "777838633" },
      {id: 3, matriculeEtudiant: "Et3-01052023123600-@", nomEtudiant: "Ka", prenomEtudiant: "Mamadou", dateNaissEtudiant: new Date("01/14/1999"), addresseEtudiant: "gueultapée", telEtudiant: "777838633" },
      {id: 4, matriculeEtudiant: "Et4-01052023123600-@", nomEtudiant: "SOW", prenomEtudiant: "Mamadou", dateNaissEtudiant: new Date("01/14/1999"), addresseEtudiant: "gueultapée", telEtudiant: "777838633" },
    ];
  }
  listeEtudiant(): Etudiant[] {
    return this.trierEtudiants();
  }

  ajouterEtudiant(etu: Etudiant) {
    this.etudiants.push(etu);
  }

  consulterEtudiant(matricule: string): Etudiant {
    this.etudiant = this.etudiants.find(e => e.matriculeEtudiant == matricule)!;
    return this.etudiant;
  }

  supprimerEtudiant(etu: Etudiant) {

    const index = this.etudiants.indexOf(etu, 0);
    if (index > -1) {
      this.etudiants.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) { this.produits.splice(index, 1);
    } }); */
  }

  compare(a : Etudiant, b: Etudiant){
      
  }

  trierEtudiants(): Etudiant[] {
    //this.etudiants.sort((a, b) => a!.nomEtudiant - b.last_nom);

    this.etudiants = this.etudiants.sort((a, b) => {
      if (a.nomEtudiant && b.nomEtudiant) {
        if (a.nomEtudiant < b.nomEtudiant) {
          return -1;
        }
        if (a.nomEtudiant > b.nomEtudiant) {
          return 1;
        }
      }
      return 0;
    });
    return this.etudiants 

   

    // this.etudiants = this.etudiants.sort((n1,n2) => {
    // if (n1.nomEtudiant > n2.nomEtudiant) { return 1;
    // }
    // if (n1.nomEtudiant < n2.nomEtudiant) {
    // return -1; }
    // return 0; });
  }


  updateEtudiant(e: Etudiant) {
    this.supprimerEtudiant(e);
    this.ajouterEtudiant(e);
  }
}

