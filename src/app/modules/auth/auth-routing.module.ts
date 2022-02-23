import { AuthorizationComponent } from './components/authorization/authorization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
  },
  {
    path: 'callback',
    component: AuthCallbackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
