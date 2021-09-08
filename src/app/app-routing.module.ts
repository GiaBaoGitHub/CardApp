import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { ChatComponent } from './show/show.component';
// import { MessagesComponent } from './messages/messages.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentDetailsComponent} from './payment-details/payment-details.component';
const routes: Routes = [
// {
//   path: 'login',
//   component: LoginComponent
// },
{
  path: 'show',
  component: ChatComponent
},
{
  path: 'resetpassword',
  component: ResetPasswordComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'payment',
  component: PaymentDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
