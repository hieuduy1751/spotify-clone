import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';


@NgModule({
  declarations: [
    AuthorizationComponent,
    AuthCallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
