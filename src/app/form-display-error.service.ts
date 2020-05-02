import { Injectable } from '@angular/core';

export interface ErrorMessage {
  key: string;
  message: string;
}

@Injectable()
export class FormDisplayErrorService {
  errorsList: Array<ErrorMessage>;

  constructor(errorsList: Array<ErrorMessage>) {
    this.errorsList = errorsList;
  }
  getListOfMessage(keys: Array<string>) {
    const message = [];
    let tempResult: ErrorMessage | undefined;
    keys.forEach(key => {
      tempResult = this.errorsList.find(x => x.key === key);
      if (tempResult) {
        message.push(tempResult.message);
      } else {
        console.error(`la clé "${key}" n'est pas définie dans le fichier des erreurs.`)
      }
    });
    return message;
  }
}
