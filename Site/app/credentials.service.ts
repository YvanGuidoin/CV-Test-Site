import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

import { Credentials } from './resume';

@Injectable()
export class CredentialsService {
  private lastCredentials: Credentials;
  credentialsSource: Subject<Credentials> = new Subject<Credentials>();

  setCredentials(cred: Credentials): void {
    this.lastCredentials = cred;
    this.credentialsSource.next(cred);
    // console.log("lastCredentials: " + JSON.stringify(this.lastCredentials));
  }

  getLastCredentials(): Credentials {
    // console.log("getLastCredentials appele pour: " + JSON.stringify(this.lastCredentials));
    return this.lastCredentials;
  }
}
