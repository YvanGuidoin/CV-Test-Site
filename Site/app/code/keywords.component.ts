import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'keywords',
  templateUrl : '../templates/keywords.component.html'
})
export class KeywordsComponent{
  @Input() keywords: string[];
  @Input() editable: boolean = false;
  @Output() modify: EventEmitter<string[]> = new EventEmitter<string[]>();
  newKeyword: string = "";

  deleteKeywork(keyword: string) : void {
    let index = this.keywords.indexOf(keyword);
    if(index != -1) this.keywords.splice(index, 1);
    this.modify.emit(this.keywords);
  }

  addKeyword() : void {
    if(this.newKeyword.length > 0) {
      this.keywords.push(this.newKeyword);
      this.newKeyword = "";
      this.modify.emit(this.keywords);
    }
  }
}
