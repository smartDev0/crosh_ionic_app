import { Injectable, NgZone } from "@angular/core";
import { auth } from "firebase/app";
import { Type } from "../shared/model/type";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { resolve } from "url";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private Status = new BehaviorSubject("");
  currentStatus = this.Status.asObservable();
  public pensionActive: boolean = false;
  changeStatus() {
    this.Status.next("");
  }
  private typeCollection: AngularFirestoreCollection<Type>;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public http: HttpClient
  ) {
    this.typeCollection = afStore.collection<Type>("types");
  }
  getTypes() {
    return this.typeCollection.valueChanges();
  }
}
