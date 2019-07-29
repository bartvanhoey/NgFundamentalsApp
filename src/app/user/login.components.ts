import { Component } from '@angular/core';

@Component({
    selector: 'app-login ',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    userName: string;
    password: string;
    login(formvalues) {
        console.log({ formvalues });
    }
}
