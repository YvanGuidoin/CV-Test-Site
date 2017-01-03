import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { ResumeService } from './resume.service';

import { Credentials } from './resume';

@Component({
  selector: 'register-dialog',
  templateUrl: 'templates/register-dialog.component.html'
})
export class RegisterDialog {

  data: Credentials = new Credentials();
  passwordDouble: String = "";
  usernameTaken: Boolean = false;

  constructor(
    public dialogRef: MdDialogRef<RegisterDialog>,
    private resumeService: ResumeService
   ) {}

  onSubmit() : void {
    this.resumeService.register(this.data)
      .then(a => console.log(a));
    // this.dialogRef.close(this.data);
  }
}
