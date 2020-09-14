import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-pension-type",
  templateUrl: "./pension-type.component.html",
  styleUrls: ["./pension-type.component.scss"],
})
export class PensionTypeComponent implements OnInit {
  public monthValue;
  public remainMonthValue;
  public timerValue;
  type;
  constructor(private router: Router) {}
  ionViewWillEnter() {
        this.type = "Avec";
  }

  ngOnInit() {
    this.monthValue = 1800;
    this.remainMonthValue = 45;
    this.timerValue = 5400;

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
  changeField(type) {
    console.log(type);
    if (type != "Avec") {
      this.router.navigateByUrl("/profile-incoming");
    }
  }
}
