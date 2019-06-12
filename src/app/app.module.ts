import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

// Service
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';


export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDnqthFY2RmtGOKHRFFyVYeiXoWk8VhJ3c",
    authDomain: "first-time-a5076.firebaseapp.com",
    databaseURL: "https://first-time-a5076.firebaseio.com",
    projectId: "first-time-a5076",
    storageBucket: "first-time-a5076.appspot.com",
    messagingSenderId: "1080682671918",
    appId: "1:1080682671918:web:7cdf3fcb6946f5e1"
 };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
 FormsModule,
 ReactiveFormsModule,
 RouterModule.forRoot(router),
 AngularFireAuthModule,
 AngularFireModule.initializeApp(firebaseConfig),
 AngularFirestoreModule
  ],
  providers: [AuthService, AngularFireDatabase, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
