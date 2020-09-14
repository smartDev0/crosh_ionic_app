import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/service/common.service";
@Component({
  selector: "app-investment",
  templateUrl: "./investment.component.html",
  styleUrls: ["./investment.component.scss"],
})
export class InvestmentComponent implements OnInit {
  public isOneActive: boolean = false;
  public monthValue;
  public remainMonthValue;
  public timerValue;
  public types = [
    { id: 1, name: "Livret A", isActive: false },
    { id: 2, name: "LDD", isActive: false },
    { id: 3, name: "PEL", isActive: false },
    { id: 4, name: "Autre revenus de placements", isActive: false },
    { id: 5, name: "LEP", isActive: false },
    { id: 6, name: "Contrat de capitalisation", isActive: false },
    { id: 7, name: "Assurnance", isActive: false },
    { id: 8, name: "PEA", isActive: false },
    { id: 9, name: "PEA-PME", isActive: false },
    { id: 10, name: "Compte titre", isActive: false },
  ];
  public type: any[] = [];

  constructor(private router: Router, private commonService: CommonService) {
    this.monthValue = 220000;
    this.remainMonthValue = 2200;
    this.timerValue = 6600;
  }

  ngOnInit() {}
  onChangeState(id) {
    this.types = [...this.types].map(type => type.id === id ? { ...type, isActive: !type.isActive } : type)
    
    const seletedType = this.types.find(type => type.id === id);

    if (seletedType.isActive) {
      this.type = this.type.some(el => el.id === id) ? [...this.type] : [...this.type, seletedType];
      
    } else {

      this.type = this.type.filter(el => el.id !== id);
    }
    if (this.type.length > 0) {
      this.isOneActive = true;
    } else {
      this.isOneActive = false;
    }
     console.log('type: ', this.type)
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
    localStorage.setItem("investment", JSON.stringify(this.type));
    this.router.navigateByUrl("/investment-more");
    this.commonService.changeStatus();
    this.commonService.pensionActive = true;
    localStorage.setItem("pensionActive", "1");
    // this.commonService.filter("Register click");
  }
}
