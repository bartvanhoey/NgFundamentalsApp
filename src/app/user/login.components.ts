import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login ',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    userName: string;
    password: string;
    constructor(private authService: AuthService, private router: Router) {
    }

    login(formvalues: { userName: string; password: string; }) {
        console.log({ formvalues });
        this.authService.loginUser(formvalues.userName, formvalues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
