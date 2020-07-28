import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pension-supplyment",
  templateUrl: "./pension-supplyment.component.html",
  styleUrls: ["./pension-supplyment.component.scss"],
})
export class PensionSupplymentComponent implements OnInit {
  public isOneActive: boolean = false;
  public isSecondActive: boolean = false;
  public isThreeActive: boolean = false;
  public isFourActive: boolean = false;
  public isFiveActive: boolean = false;
  public isSixActive: boolean = false;
  public isSevenActive: boolean = false;
  public isEightActive: boolean = false;
  public isNineActive: boolean = false;
  public monthValue;
  public remainMonthValue;
  public timerValue;
  constructor(private router: Router) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
  }

  ngOnInit() {}
  onChangeState(id) {
    switch (id) {
      case 1:
        this.isOneActive = !this.isOneActive;
        break;
      case 2:
        this.isSecondActive = !this.isSecondActive;
        break;
      case 3:
        this.isThreeActive = !this.isThreeActive;
        break;
      case 4:
        this.isFourActive = !this.isFourActive;
        break;
      case 5:
        this.isFiveActive = !this.isFiveActive;
        break;
      case 6:
        this.isSixActive = !this.isSixActive;
        break;
      case 7:
        this.isSevenActive = !this.isSevenActive;
        break;
      case 8:
        this.isEightActive = !this.isEightActive;
        break;
      case 9:
        this.isNineActive = !this.isNineActive;
        break;
    }
  }
  onChangeGetMonthValue(event) {
    this.monthValue = event.target.value;
  }
  onChangeGetRemainValue(event) {
    this.remainMonthValue = event.target.value;
  }
  onChangeGetTimerValue(event) {
    this.timerValue = event.target.value;
  }
  goIncomingPage() {
    this.router.navigate(["/profile-incoming"]);
  }
}
