import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
import { LoadingController, NavController } from "@ionic/angular";

@Component({
  selector: "app-profile-tax",
  templateUrl: "./profile-tax.component.html",
  styleUrls: ["./profile-tax.component.scss"],
})
export class ProfileTaxComponent implements OnInit {
  public isOneActive: boolean = false;
  public isSecondActive: boolean = false;
  public monthValue;
  public remainMonthValue;
  public typeId;
  public user;

  constructor(
    private router: Router,
    private commonService: CommonService,
    private navCtrl: NavController,
    public loadingController: LoadingController
  ) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.typeId = localStorage.getItem("typeId");
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {}
  onChangeState(id) {
    switch (id) {
      case 1:
        this.isOneActive = !this.isOneActive;
        this.isSecondActive = false;
        break;
      case 2:
        this.isSecondActive = !this.isSecondActive;
        this.isOneActive = false;
        break;
    }
  }
  onChangeGetMonthValue(event) {
    this.monthValue = event.target.value;
  }
  onChangeGetRemainValue(event) {
    this.remainMonthValue = event.target.value;
  }

  goIncomingPage() {
    this.router.navigateByUrl("/profile-incoming");
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
          collected_salary: this.monthValue,
          month_salary_salary: this.remainMonthValue,
        };
        this.commonService.addRevenusFiscal(form).then((res) => {
          ref.loadingController.dismiss();

          const cardNameArr =
            JSON.parse(localStorage.getItem("card_items")) || [];
          const updatedCardNameArr = new Set([
            ...cardNameArr,
            "Revenus fiscaux",
          ]);
          localStorage.setItem(
            "card_items",
            JSON.stringify([...updatedCardNameArr])
          );

          this.router.navigate(["/profile-incoming"]);
          //  this.navCtrl.navigateRoot(["/profile-incoming"]);
        });
      });
  }
}
