import { Component} from '@angular/core';

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
}
