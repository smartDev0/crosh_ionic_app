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
    console.log("????????", this.commonService.getTypes());
    this.commonService.getTypes().subscribe((res) => {
      console.log("///", res);
    });
    this.commonService.currentStatus.subscribe((item) => {
      // this.ionViewWillEnter();
      // console.log("????????", item);
    });
    if (localStorage.getItem("pensionActive") == "1") {
      this.pensionActive = true;
    }
  }
  ionViewWillEnter() {}
  ngOnInit() {}
  ngAfterViewInit() {}
}
