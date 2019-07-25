import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})
export class UserModule { }

