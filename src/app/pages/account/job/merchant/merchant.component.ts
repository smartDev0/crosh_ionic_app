import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
import { LoadingController, NavController } from "@ionic/angular";

@Component({
  selector: "app-merchant",
  templateUrl: "./merchant.component.html",
  styleUrls: ["./merchant.component.scss"],
})
export class MerchantComponent implements OnInit {
  public monthValue;
  public remainMonthValue;
  public timerValue;
  public jobId;
  public typeId;
  public user;

  constructor(
    private router: Router,
    private commonService: CommonService, private navCtrl: NavController,
    public loadingController: LoadingController
  ) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
    this.jobId = localStorage.getItem("jobId");
    this.typeId = localStorage.getItem("typeId");
    this.user = JSON.parse(localStorage.getItem("user"));
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
  submit() {
    this.loadingController
      .create({
        message: "Wait a second...",
      })
      .then((loadingElement) => {
        loadingElement.present();
        var ref = this;
        const form = {
          id_user: this.user.uid,
          type: this.typeId,
          job: this.jobId,
          month_salary: this.monthValue,
          year_salary: this.remainMonthValue,
        };
        this.commonService.addRevenusUser(form).then((res) => {
          ref.loadingController.dismiss();
          
          const cardNameArr = JSON.parse(localStorage.getItem("card_items")) || [];
          const updatedCardNameArr = new Set([...cardNameArr, "Travail"]);
          localStorage.setItem("card_items", JSON.stringify([...updatedCardNameArr]));

          this.router.navigate(["/profile-incoming"]);
          //  this.navCtrl.navigateRoot(["/profile-incoming"]);
        });
      });
  }
}
