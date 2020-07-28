import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private Status = new BehaviorSubject("");
  currentStatus = this.Status.asObservable();
  public pensionActive: boolean = false;
  constructor() {}
  changeStatus() {
    this.Status.next("");
    console.log("???????", this.currentStatus);
  }
}
