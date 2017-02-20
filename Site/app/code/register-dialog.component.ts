import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { ResumeService } from './resume.service';

import { Credentials } from './resume';

@Component({
  selector: 'register-dialog',
  templateUrl: '../templates/register-dialog.component.html'
})
export class RegisterDialog {

  data: Credentials = new Credentials();
  passwordDouble: string = "";
  usernameTaken: boolean = false;

  constructor(
    public dialogRef: MdDialogRef<RegisterDialog>,
    private resumeService: ResumeService
   ) {}

  onSubmit() : void {
    this.resumeService.register(this.data)
      .then(data => {
        if(data.usernameTaken) this.usernameTaken = true;
        else {
          this.usernameTaken = false;
          this.dialogRef.close(this.data);
        }
      });
  }
}
