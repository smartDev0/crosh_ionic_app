import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../service/common.service";
@Component({
  selector: "app-profile-incoming",
  templateUrl: "./profile-incoming.component.html",
  styleUrls: ["./profile-incoming.component.scss"],
})
export class ProfileIncomingComponent implements OnInit {
  public pensionActive: boolean = false;
  constructor(private commonService: CommonService) {
    this.commonService.currentStatus.subscribe((item) => {
      // this.ionViewWillEnter();
      console.log("????????");
    });
    if (localStorage.getItem("pensionActive") == "1") {
      this.pensionActive = true;
    }
  }
  ionViewWillEnter() {}
  ngOnInit() {}
  ngAfterViewInit() {}
}
