import { Observable } from 'rxjs/Rx';
import { ConnectDialog } from './connect-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

import { Credentials } from './resume';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) {}

  public connect(viewContainerRef: ViewContainerRef): Observable<Credentials> {
    let dialogRef: MdDialogRef<ConnectDialog>;
    let config= new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ConnectDialog, config);

    return dialogRef.afterClosed();
  }
}
