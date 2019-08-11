import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login ',
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px;}
        `]
})

export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin: boolean;
    constructor(private authService: AuthService, private router: Router) {
    }

    login(formvalues: { userName: string; password: string; }) {
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
