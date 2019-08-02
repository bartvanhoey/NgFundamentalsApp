import { Routes} from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolver,
    EventRouterActivator,
    CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => UserModule }
];
