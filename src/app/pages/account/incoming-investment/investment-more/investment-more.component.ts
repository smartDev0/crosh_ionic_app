import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
@Component({
  selector: "app-investment-more",
  templateUrl: "./investment-more.component.html",
  styleUrls: ["./investment-more.component.scss"],
})
export class InvestmentMoreComponent implements OnInit {
  public monthValue;
  public remainMonthValue;
  public timerValue;
  public type: any[] = [];
  public countFormArr: FormArray;
  public form: FormGroup;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private builder: FormBuilder
  ) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.form = this.builder.group({
      windows: builder.array([]),
    });
  }
  ngOnInit(): void {}
  ionViewWillEnter() {
    const type = JSON.parse(localStorage.getItem("investment"));
    this.type = type;
    this.countFormArr = this.form.get("windows") as FormArray;
    console.log(this.type);
    this.type.map((item, i) => {
      this.countFormArr.push(
        this.builder.group({
          monthValue: ["", Validators.required],
          remainMonthValue: ["", Validators.required],
          name: [""],
          id:[""]
        })
      );
      this.countFormArr.at(i).get('name').setValue(item.name);
      this.countFormArr.at(i).get("id").setValue(item.id);
      console.log(this.countFormArr.controls)
    });
  }
  onChangeGetMonthValue(event, i) {
    // console.log(event,i)
    this.countFormArr.at(i).get("monthValue").setValue(event.target.value);
    // this.monthValue = event.target.value;
  }
  onChangeGetRemainValue(event, i) {
    this.countFormArr
      .at(i)
      .get("remainMonthValue")
      .setValue(event.target.value);
  }
  onChangeGetTimerValue(event) {
    this.timerValue = event.target.value;
  }
  onFormSubmit(event) {

  }
  goIncomingPage() {
    this.router.navigateByUrl("/profile-incoming");
    this.commonService.changeStatus();
    this.commonService.pensionActive = true;
    localStorage.setItem("pensionActive", "1");
    // this.commonService.filter("Register click");
  }
}
