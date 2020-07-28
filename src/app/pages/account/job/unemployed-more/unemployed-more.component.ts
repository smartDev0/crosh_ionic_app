import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";

@Component({
  selector: "app-unemployed-more",
  templateUrl: "./unemployed-more.component.html",
  styleUrls: ["./unemployed-more.component.scss"],
})
export class UnemployedMoreComponent implements OnInit {
  public monthValue;
  public remainMonthValue;
  public timerValue;

  constructor(private router: Router, private commonService: CommonService) {
    this.monthValue = 1800;
    this.remainMonthValue = 3;
    this.timerValue = 6600;
  }

  ngOnInit() {}
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
