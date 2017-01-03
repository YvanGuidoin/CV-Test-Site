import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Resume } from './resume';
import { ResumeService } from './resume.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'resume',
  templateUrl : 'templates/resume.component.html'
})
export class ResumeComponent implements OnInit {
  resume: Resume;

  constructor(
    private resumeService: ResumeService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  calculateAge(date: Date): Number {
     let dateTemp = +new Date(date);
     let ageDif = +new Date() - dateTemp;
     let ageDate = new Date(ageDif);
     return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  printGender(gender: String): String {
    return (gender == "M") ? ", Male" : (gender == "M") ? ", Female" : "";
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.resumeService.getResume(params['userid']))
      .subscribe((resume: Resume) => this.resume = resume);
  }
}
