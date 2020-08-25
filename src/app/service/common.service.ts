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
  private jobCollection: AngularFirestoreCollection<Type>;
  private revenusUserCollection: AngularFirestoreCollection<Type>;
  private socialTypeCollection: AngularFirestoreCollection<Type>;
  private revenusSocialCollection: AngularFirestoreCollection<Type>;
  private revenusFiscalCollection: AngularFirestoreCollection<Type>;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public http: HttpClient
  ) {
    this.typeCollection = afStore.collection<Type>("types");
    this.jobCollection = afStore.collection<Type>("jobs");
    this.socialTypeCollection = afStore.collection<Type>(
      "revenus_social_types"
    );
    this.revenusUserCollection = afStore.collection<Type>("revenus_users");
    this.revenusSocialCollection = afStore.collection<Type>("revenus_social");
    this.revenusFiscalCollection = afStore.collection<Type>("revenus_fiscal");
  }
  getTypeCategoires() {
    return this.typeCollection.snapshotChanges();
  }

  getJobCategories() {
    return this.jobCollection.snapshotChanges();
  }

  addRevenusUser(form) {
    return this.revenusUserCollection.add(form);
  }

  getTypeSocial() {
    return this.socialTypeCollection.snapshotChanges();
  }

  addRevenusSocial(form) {
    return this.revenusSocialCollection.add(form);
  }

  addRevenusFiscal(form) {
    return this.revenusFiscalCollection.add(form);
  }
}
