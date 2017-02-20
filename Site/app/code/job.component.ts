import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Job } from './resume';

@Component({
  selector: 'job',
  templateUrl : '../templates/job.component.html'
})
export class JobComponent {
  @Input() job: Job;
  @Input() removable: boolean = false;
  @Output() delete: EventEmitter<Job> = new EventEmitter<Job>();

  deleteEvent(job: Job) : void {
    this.delete.emit(job);
  }
}
