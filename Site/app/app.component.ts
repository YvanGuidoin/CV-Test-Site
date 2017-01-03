import { Component, ViewContainerRef } from '@angular/core';

import { DialogsService } from './dialogs.service';
import { ResumeService } from './resume.service';

import { Credentials } from './resume';

@Component({
  selector: 'my-app',
  templateUrl : 'templates/app.component.html'
})
export class AppComponent  {
  title = 'CV Site Example';
  credentials : Credentials;

  constructor(
    private dialogsService: DialogsService,
    private resumeService: ResumeService,
    private viewContainerRef: ViewContainerRef
  ) {}

  openConnectDialog(): void {
    this.dialogsService
     .connect(this.viewContainerRef)
     .subscribe((data) => {
       if(data){
         this.resumeService.login(data.username, data.password)
          .then(credentials => this.credentials = credentials)
          .catch(err => this.credentials = null);
       }
     });
  }

  openRegisterDialog(): void {
    this.dialogsService
     .register(this.viewContainerRef)
     .subscribe((data) => {
       if(data){
         this.openConnectDialog();
       }
     });
  }

  disconnect(): void {
    this.resumeService.logout()
     .then(credentials => this.credentials = null)
     .catch(err => this.credentials = null);
  }
}
