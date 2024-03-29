import { Injectable, NgZone } from "@angular/core";
import { auth } from "firebase/app";
import { User } from "../model/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  userData: any;
  credential: any;
  private userCollection: AngularFirestoreCollection<User>;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public http: HttpClient
  ) {
    this.userCollection = afStore.collection<User>("users");
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.ngFireAuth.updateCurrentUser(user).then(() => {
          this.userData = user;
          localStorage.setItem("user", JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem("user"));
        });
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  // Login in with email/password
  SignIn(email, password) {
    this.ngFireAuth.setPersistence("local");
    var a = this.ngFireAuth.signInWithEmailAndPassword(email, password);
    console.log(a);
    return a;
  }

  // Register user with email/password
  RegisterUser(value) {
    // return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    return new Promise<any>((resolve, reject) => {
      this.ngFireAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            let user = {
              email: value.email,
              id: res.user.uid,
              firstName: value.firstName,
              lastName: value.lastName,
            };
            this.userCollection.doc(res.user.uid).set(user);
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser
      .then((u) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(["verify-email"]);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          "Password reset email has been sent, please check your inbox."
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.emailVerified !== false ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["welcome"]);
    });
  }
}
