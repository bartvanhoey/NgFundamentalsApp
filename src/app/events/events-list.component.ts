import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute, Router} from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: `./events-list.component.html`,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
