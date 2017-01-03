import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Qualification } from './resume';

@Component({
  selector: 'qualif',
  templateUrl : 'templates/qualif.component.html'
})
export class QualificationComponent {
  @Input() qualif: Qualification;
  @Input() removable: boolean = false;
  @Output() delete: EventEmitter<Qualification> = new EventEmitter<Qualification>();

  deleteEvent(qualif: Qualification) : void {
    this.delete.emit(qualif);
  }
}
