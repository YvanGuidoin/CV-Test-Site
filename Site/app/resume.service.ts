import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job, Qualification, Resume, Credentials } from './resume';

@Injectable()
export class ResumeService {
  private baseUrl = "http://localhost:8080/";

  constructor(private http: Http) {}

  getResumes(): Promise<Resume[]> {
    return this.http.get(this.baseUrl + "users")
      .toPromise()
      .then(response => response.json() as Resume[])
      .catch(this.handleError);
  }

  getResume(userid: String): Promise<Resume> {
    return this.http.get(this.baseUrl + "users/" + userid)
      .toPromise()
      .then(response => response.json() as Resume)
      .catch(this.handleError);
  }

  login(username: String, password: String) {
    return this.http.post(this.baseUrl + "login", { username, password })
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json() as Credentials;}
      )
      .catch(this.handleError);
  }

  register(credentials: Credentials) {
    return this.http.post(this.baseUrl + "users/", credentials)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  sendModif(userid: String, resume: Resume) {
    return this.http.put(this.baseUrl + "users/" + userid, resume)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
