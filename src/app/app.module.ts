import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolver,
  EventRouterActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollapsibleWellComponent, TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from './common/index';

// tslint:disable-next-line:no-string-literal
const toastr: Toastr = window['toastr'];
// tslint:disable-next-line:no-string-literal
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ], declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvoteComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventRouterActivator,
    // tslint:disable-next-line: object-literal-key-quotes
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
