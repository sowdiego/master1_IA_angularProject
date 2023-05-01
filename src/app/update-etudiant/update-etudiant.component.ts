import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
   currentEtudiant = new Etudiant();

  constructor(private activatedRoute: ActivatedRoute, private etudiantService: EtudiantService, private router :Router,) { }
  
  ngOnInit() {
  console.log(this.activatedRoute.snapshot. params['matriculeEtudiant']);
  
  this.currentEtudiant = this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot. params['matriculeEtudiant']); 
  console.log(this.currentEtudiant);
  }

  updateEtudiant(){
     //console.log(this.currentProduit); 
     this.etudiantService.updateEtudiant(this.currentEtudiant);
     this.router.navigate(['etudiants']);
    }

}
