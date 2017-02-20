import { Component, ViewContainerRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import { DialogsService } from './dialogs.service';
import { ResumeService } from './resume.service';
import { CredentialsService } from './credentials.service';

import { Credentials } from './resume';

@Component({
  selector: 'my-app',
  templateUrl : '../templates/app.component.html',
  providers: [ CredentialsService ]
})
export class AppComponent implements OnDestroy {
  title = 'CV Site Example';
  credentials : Credentials;
  subscription: Subscription;

  constructor(
    private dialogsService: DialogsService,
    private resumeService: ResumeService,
    private credentialsService: CredentialsService,
    private router: Router,
    private viewContainerRef: ViewContainerRef
  ) {
    this.subscription = credentialsService.credentialsSource.subscribe((credentials: Credentials) => this.credentials = credentials);
  }

  openConnectDialog(): void {
    this.dialogsService
     .connect(this.viewContainerRef)
     .subscribe((data) => {
       if(data){
         this.resumeService.login(data.username, data.password)
          .then(credentials => this.credentialsService.setCredentials(credentials))
          .catch(err => this.credentialsService.setCredentials(null));
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
    this.credentialsService.setCredentials(null);
    this.router.navigate(['/resume']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
