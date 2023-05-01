import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants : Etudiant[] = [] ; 
  constructor(private etudiantService: EtudiantService ) {
   
   }
  ngOnInit(): void {
    this.etudiants = this.etudiantService.listeEtudiant();
  }

  supprimerProduit(e: Etudiant){
      console.log(e);
      let conf = confirm("Etes-vous sûr ?"); 
      if (conf)
        this.etudiantService.supprimerEtudiant(e);
      }
      

}
