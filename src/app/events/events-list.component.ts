import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: `./events-list.component.html`,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor( private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.events = this.route.snapshot.data['events'];
  }
}
