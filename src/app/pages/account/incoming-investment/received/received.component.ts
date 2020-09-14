import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";

@Component({
  selector: "app-received",
  templateUrl: "./received.component.html",
  styleUrls: ["./received.component.scss"],
})
export class ReceivedComponent implements OnInit {
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

  constructor(private router: Router, private commonService: CommonService) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
  }

  ngOnInit() {}
  onChangeState(id) {
    switch (id) {
      case 1:
        this.isOneActive = true;
        this.isSecondActive = false
        break;
      case 2:
        this.isSecondActive = true;
        this.isOneActive = false;
        this.router.navigateByUrl("/profile-incoming");
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
    this.router.navigateByUrl("/investment");
    this.commonService.changeStatus();
    this.commonService.pensionActive = true;
    localStorage.setItem("pensionActive", "1");
    // this.commonService.filter("Register click");
  }
}
