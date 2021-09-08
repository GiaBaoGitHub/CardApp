import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//toast
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
// import { LoginComponent } from './login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './show/show.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SignupComponent } from './signup/signup.component';
import { FirebaseService } from './services/firebase.service';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTreeModule} from '@angular/material/tree';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    ChatComponent,
    ResetPasswordComponent,
    SignupComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatInputModule,

    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFireAuthModule,

    AngularFireDatabaseModule,

    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    ScrollingModule,

    MatProgressBarModule,
    MatSnackBarModule,
    MatTreeModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
