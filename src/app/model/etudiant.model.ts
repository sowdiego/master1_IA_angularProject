export class Etudiant {
    id? : number;
    matriculeEtudiant? : string;
    nomEtudiant? : string;
    prenomEtudiant? : string;
    dateNaissEtudiant? : Date ;
    addresseEtudiant? : string;
    telEtudiant? : string;
    classeId? : number
}

export class Classe {
    id? : number;
    libelle? : string;
}