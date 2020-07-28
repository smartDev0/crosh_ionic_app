import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
@Component({
  selector: "app-investment-more",
  templateUrl: "./investment-more.component.html",
  styleUrls: ["./investment-more.component.scss"],
})
export class InvestmentMoreComponent implements OnInit {
  public monthValue;
  public remainMonthValue;
  public timerValue;

  constructor(private router: Router, private commonService: CommonService) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
  }
  ngOnInit(): void {}
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
    this.router.navigateByUrl("/profile-incoming");
    this.commonService.changeStatus();
    this.commonService.pensionActive = true;
    localStorage.setItem("pensionActive", "1");
    // this.commonService.filter("Register click");
  }
}
