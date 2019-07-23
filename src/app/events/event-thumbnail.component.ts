import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: any;
}

