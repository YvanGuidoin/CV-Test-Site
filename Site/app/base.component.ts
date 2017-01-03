import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Resume } from './resume';
import { ResumeService } from './resume.service';

@Component({
  selector: 'base',
  templateUrl : 'templates/base.component.html'
})
export class BaseComponent implements OnInit {
  resumes: Resume[];

  constructor(
    private resumeService: ResumeService,
    private router: Router
  ){}

  getResumes(): void {
    this.resumeService.getResumes()
      .then(resumes => this.resumes = resumes);
  }

  onSelect(resume: Resume):void {
    this.router.navigate(['/resume', resume.userid]);
  }

  ngOnInit(): void {
    this.getResumes();
  }
}
