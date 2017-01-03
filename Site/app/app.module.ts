import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about.component';
import { BaseComponent }  from './base.component';
import { ResumeComponent } from './resume.component';
import { JobComponent } from './job.component';
import { KeywordsComponent } from './keywords.component';
import { QualificationComponent } from './qualif.component';
import { DatePrettyComponent } from './datepretty.component';
import { ModifyComponent } from './modify.component';

import { ConnectDialog } from './connect-dialog.component';

import { ResumeService } from './resume.service';
import { DialogsService } from './dialogs.service';

const routes : Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: BaseComponent
  },
  {
    path: 'resume/:userid',
    component: ResumeComponent
  },
  {
    path: 'modify/:userid',
    component: ModifyComponent
  }
];

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  MaterialModule.forRoot(),
                  FlexLayoutModule.forRoot(),
                  RouterModule.forRoot(routes)
                ],
  exports:      [
                  RouterModule,
                  ConnectDialog
                ],
  declarations: [
                  AppComponent,
                  AboutComponent,
                  BaseComponent,
                  ResumeComponent,
                  JobComponent,
                  KeywordsComponent,
                  QualificationComponent,
                  DatePrettyComponent,
                  ConnectDialog,
                  ModifyComponent
                ],
  entryComponents: [
                  ConnectDialog
                ],
  providers:    [
                  ResumeService,
                  DialogsService
                ],
  bootstrap:    [
                  AppComponent
                ]
})
export class AppModule { }
