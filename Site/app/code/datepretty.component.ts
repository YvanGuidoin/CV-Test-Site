import { Component, Input } from '@angular/core';

@Component({
  selector: 'datepretty',
  templateUrl : '../templates/datepretty.component.html'
})
export class DatePrettyComponent {
  @Input()
  date: Date;
}
