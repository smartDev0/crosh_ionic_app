import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.scss"],
})
export class SocialComponent implements OnInit {
  public isOneActive: boolean = false;
  public isSecondActive: boolean = false;
  public isThreeActive: boolean = false;
  public isFourActive: boolean = false;
  public isFiveActive: boolean = false;
  public isSixActive: boolean = false;
  public isSevenActive: boolean = false;
  public isEightActive: boolean = false;
  public isNineActive: boolean = false;
  public collectedValue;
  public remainMonthValue;
  public timerValue;
  public types;
  selectedItem: number;
  public typeId;
  public user;
  public categoryId;
  constructor(
    private router: Router,
    private commonService: CommonService,
    public loadingController: LoadingController
  ) {
    this.collectedValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
    this.user = JSON.parse(localStorage.getItem("user"));
    this.typeId = localStorage.getItem("typeId");
    this.loadingController
      .create({
        message: "Wait a second...",
      })
      .then((loadingElement) => {
        loadingElement.present();
        var ref = this;
        this.commonService.getTypeSocial().subscribe((res) => {
          this.types = res.map((e) => {
            return {
              id: e.payload.doc.id,
              name: e.payload.doc.data()["name"],
            };
          });
          console.log(this.types);
          ref.loadingController.dismiss();
        });
      });
  }

  ngOnInit() {}
  onChangeState(id, typeId) {
    this.selectedItem = id - 1;
    this.categoryId = typeId;
    switch (id) {
      case 1:
        this.isOneActive = !this.isOneActive;
        break;
      case 2:
        this.isSecondActive = true;
        break;
      case 3:
        this.isThreeActive = !this.isThreeActive;
        break;
      case 4:
        this.isFourActive = !this.isFourActive;
        break;
    }
  }
  onChangeGetMonthValue(event) {
    this.collectedValue = event.target.value;
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
          categoryId: this.categoryId,
          collected_salary: this.collectedValue,
          month_salary: this.remainMonthValue,
          annuity_salary: this.timerValue,
        };
        console.log(form)
        this.commonService.addRevenusSocial(form).then((res) => {
          console.log(res)
          ref.loadingController.dismiss();
          
          const cardNameArr = JSON.parse(localStorage.getItem("card_items")) || [];
          const updatedCardNameArr = new Set([
            ...cardNameArr,
            "Revenus sociaux",
          ]);
          localStorage.setItem("card_items", JSON.stringify([...updatedCardNameArr]));
          this.router.navigate(["/profile-incoming"]);
        });
      });
  }
  
}
