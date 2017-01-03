import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import { ResumeService } from './resume.service';
import { CredentialsService } from './credentials.service';

import { Resume, Job, Qualification, Credentials } from './resume';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'modify',
  templateUrl : 'templates/modify.component.html'
})
export class ModifyComponent implements OnInit, OnDestroy  {
  resume: Resume;
  genders: Object[] = [
    {value: "M", title: "Male"},
    {value: "F", title: "Female"}
  ];
  newJob: Job = new Job();
  newQualif: Qualification = new Qualification();
  credentials : Credentials;
  subscription: Subscription;

  constructor(
    private resumeService: ResumeService,
    private credentialsService: CredentialsService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.credentials = credentialsService.getLastCredentials();
    this.subscription = credentialsService.credentialsSource.subscribe((credentials: Credentials) => this.credentials = credentials);
  }

  printGender(gender: string): string {
    return (gender == "M") ? ", Male" : (gender == "M") ? ", Female" : "";
  }

  deleteJob(job: Job) : void {
    let index = this.resume.past_jobs.indexOf(job);
    if(index != -1) this.resume.past_jobs.splice(index, 1);
  }

  addNewJob () : void {
    this.resume.past_jobs.push(this.newJob);
    this.newJob = new Job();
  }

  deleteQualif(qualif: Qualification) : void {
    let index = this.resume.qualifications.indexOf(qualif);
    if(index != -1) this.resume.qualifications.splice(index, 1);
  }

  addNewQualif () : void {
    this.resume.qualifications.push(this.newQualif);
    this.newQualif = new Qualification();
  }

  ngOnInit(): void {
    if(!this.credentials) this.router.navigate(['/resume']);
    else this.route.params
      .switchMap((params: Params) => this.resumeService.getResume(params['userid']))
      .subscribe((resume: Resume) => this.resume = resume);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save() : void {
    this.resumeService.sendModif(this.credentials, this.resume)
      .then((response: any) => this.router.navigate(['/resume', this.resume.userid]))
      .catch((err: any) => {
        console.log(err);
        this.router.navigate(['/resume', this.resume.userid]);
      });
  }

  cancel() : void {
    this.router.navigate(['/resume', this.resume.userid]);
  }
}
