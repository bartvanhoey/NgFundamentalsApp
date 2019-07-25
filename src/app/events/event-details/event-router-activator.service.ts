import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouterActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        // tslint:disable-next-line:no-string-literal
        const eventExists =  !!this.eventService.getEvent(+route.params['id']);

        // tslint:disable-next-line:curly
        if (!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    }
}
