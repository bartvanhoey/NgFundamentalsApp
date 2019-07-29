import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold }
    .thumbnail {min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  // getStartTimeClass() {
  // same result as method below;
  // const isEarlyStart = this.event && this.event.time === '8:00 am';
  // return {green: isEarlyStart, bold: isEarlyStart};
  // }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      {
        return { color: '#003300', 'font-weight': 'bold' };
      }
      return {};
    }
  }
}
