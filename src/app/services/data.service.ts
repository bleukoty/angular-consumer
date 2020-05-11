import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

enum enumTypeDocument {
  folder = 1,
  file,
  image
}

export interface IFolder {
  id: number;
  libelle: string;
  files: Array<any>;
  type: enumTypeDocument;
}

export interface IFile {
  id: number;
  libelle: string;
  content: any;
  type: enumTypeDocument;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dossier1: IFolder = {
      id: 1,
      libelle: 'dossier 1',
      type: enumTypeDocument.folder,
      files: [{
        id: 1,
        libelle: 'Carte d\'identité',
        type: enumTypeDocument.image
      },
      {
        id: 2,
        libelle: 'Fomulaire partie 1',
        type: enumTypeDocument.file
      }
    ]
  };

  dossier2: IFolder = {
    id: 1,
    libelle: 'dossier 2',
    type: enumTypeDocument.folder,
    files: [{
      id: 3,
      libelle: 'Carte d\'identité',
      type: enumTypeDocument.image
    },
    {
      id: 4,
      libelle: 'Fomulaire partie 1',
      type: enumTypeDocument.file
    }
  ]
};

  constructor() { }


  getData(): Observable<IFolder[]> {
    return of([this.dossier1, this.dossier2]);
  }
}
