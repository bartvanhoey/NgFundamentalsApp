import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
      .thumbnail {min-height: 210px;}
      .pad-left { margin-left: 10px;}
      .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
}

