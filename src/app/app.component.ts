import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from './user.model';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import {MatSnackBar} from '@angular/material/snack-bar';
import 'firebase/firestore';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'firebase-angular-auth';
  
  isSignedIn = false
  isSignedUp = false
  error=""
  error2=""
  
  show=true
  durationInSeconds=4
  currentUsers={displayName:'',photoURL:''}
  user$!: Observable<User>
  
  constructor(private _snackBar: MatSnackBar,public afs : AngularFirestore,public firebaseService : FirebaseService, public router: Router,private firebaseAuth: AngularFireAuth){}
  ngOnInit(){
    
    
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= false
    else
    this.isSignedIn = false
  }
  
  async onSignin(email:string,password:string){
      await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
        res => {
          console.log(res);
                this.isSignedIn = true
                this.show=false
                this.error2 =''
                localStorage.setItem('user',JSON.stringify(res.user))
                this.router.navigate(['payment']);
                var currentUser = JSON.parse(localStorage.getItem('user')!);
              console.log(currentUser.displayName)
              if (currentUser.displayName == null){
                var arr = currentUser.email.split("@")
                currentUser.displayName = arr[0]
              }
              this.currentUsers = currentUser
              return this.updateUserData(currentUser);
        },
        err => {
          this.error2 = err.message || 'Unknown error'
        }
        )
  }

  async onSignup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(
        res => {
          console.log(res);
                this.isSignedIn = false
                this.isSignedUp = false
                this.error2 =''
                localStorage.setItem('user',JSON.stringify(res.user))
              
                  // this._snackBar.open('message','action')
                  this._snackBar.openFromComponent(notificationComponent, {
                    duration: this.durationInSeconds * 1000,
                  });
                this.router.navigate(['/']);
               
               
        },
        err => {
          this.error = err.message || 'Unknown error'
        }
        )

  }
  updateUserData({ uid,email,displayName,photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = { 
      uid, 
      email, 
      displayName, 
      photoURL
    } 

    return userRef.set(data, { merge: true })

  }
  handleLogin(){
    this.isSignedIn = false
    this.isSignedUp = false
    this.show =true
    this.router.navigate(['/']);
  }
  handleLogout(){
    this.firebaseService.logout()
    this.show = true
    this.isSignedIn = false
    this.currentUsers={ displayName:'',photoURL:''}
    this.router.navigate(['/'])
  }
  handleSignup(){
    this.isSignedIn = true
    this.isSignedUp = true
    // this.router.navigate(['signup'])
  }
  ResetPassword(){
    this.router.navigate(['reset-password'])
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class notificationComponent {}
