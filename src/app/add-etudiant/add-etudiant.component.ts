import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit{
  ngOnInit(): void {
  }
  newEtudiant = new Etudiant();

  constructor(private etudiantService: EtudiantService,  private router :Router) { }
  addEtudiant(){
    console.log(this.newEtudiant);
    this.etudiantService.ajouterEtudiant(this.newEtudiant);
    this.router.navigate(['etudiants']);
   }

}
