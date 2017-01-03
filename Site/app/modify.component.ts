import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Resume, Job, Qualification } from './resume';
import { ResumeService } from './resume.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'modify',
  templateUrl : 'templates/modify.component.html'
})
export class ModifyComponent implements OnInit {
  resume: Resume;
  genders: Object[] = [
    {value: "M", title: "Male"},
    {value: "F", title: "Female"}
  ];
  newJob: Job = new Job();
  newQualif: Qualification = new Qualification();

  constructor(
    private resumeService: ResumeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

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
    this.route.params
      .switchMap((params: Params) => this.resumeService.getResume(params['userid']))
      .subscribe((resume: Resume) => this.resume = resume);
  }

  save() : void {
    this.resumeService.sendModif(this.resume.userid, this.resume)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/resume', this.resume.userid]);
      }).catch(err => {
        console.log(err);
        this.router.navigate(['/resume', this.resume.userid]);
      });
  }

  cancel() : void {
    this.router.navigate(['/resume', this.resume.userid]);
  }
}
