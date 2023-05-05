import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {path: "etudiants", component : EtudiantsComponent},
  {path: "classes", component : ClassesComponent},
  {path: "add-etudiant", component : AddEtudiantComponent},
  { path: "", redirectTo: "etudiants", pathMatch: "full" },
  {path: "update-etudiant/:id", component: UpdateEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
