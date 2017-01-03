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

  getResume(userid: string): Promise<Resume> {
    return this.http.get(this.baseUrl + "users/" + userid)
      .toPromise()
      .then(response => response.json() as Resume)
      .catch(this.handleError);
  }

  login(username: string, password: string): Promise<Credentials> {
    return this.http.post(this.baseUrl + "login", { username, password })
      .toPromise()
      .then(response => response.json() as Credentials)
      .catch(this.handleError);
  }

  register(credentials: Credentials): Promise<any> {
    return this.http.post(this.baseUrl + "users/", credentials)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  sendModif(credentials: Credentials, resume: Resume): Promise<any> {
    return this.http.put(this.baseUrl + "users/" + resume.userid, Object.assign({}, credentials, resume))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
