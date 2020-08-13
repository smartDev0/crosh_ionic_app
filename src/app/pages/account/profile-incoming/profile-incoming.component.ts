import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../service/common.service";
@Component({
  selector: "app-profile-incoming",
  templateUrl: "./profile-incoming.component.html",
  styleUrls: ["./profile-incoming.component.scss"],
})
export class ProfileIncomingComponent implements OnInit {
  public pensionActive: boolean = false;
  public types;
  constructor(private commonService: CommonService) {
    this.commonService.getTypeCategoires().subscribe((res) => {
      this.types = res.map((e) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
        };
      });
      console.log(this.types);
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
