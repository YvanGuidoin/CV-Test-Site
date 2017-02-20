import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { Credentials } from './resume';

@Component({
  selector: 'connect-dialog',
  templateUrl: '../templates/connect-dialog.component.html'
})
export class ConnectDialog {

  data: Credentials = new Credentials();

  constructor(public dialogRef: MdDialogRef<ConnectDialog>) {}
}
