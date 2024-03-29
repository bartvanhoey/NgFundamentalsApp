import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { $ } from 'protractor';

@Component({
    selector: 'app-nav-bar',
    templateUrl: `./nav-bar.component.html`,
    styles: [`
        .nav.navbar-nav {font-size:15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display: none}}
        li > a.router-link-active { color: #f97924; }
    `]
})
export class NavBarComponent {
    searchTerm = '';
    foundSessions: ISession[];
    constructor(public authService: AuthService, private eventService: EventService) {
    }

    searchSessions(searchTerm: string): any {
        this.eventService.searchSessions(searchTerm)
            .subscribe(sessions => {
                this.foundSessions = sessions ;
            });
    }
}
