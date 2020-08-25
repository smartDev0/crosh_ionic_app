import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../../service/common.service";
import { Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public jobs;
  option1 = {
    loop: true,
    direction: "vertical",

    slidesPerView:"1",
  };
  constructor(
    private commonService: CommonService,
    public router: Router,
    public loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    this.loadingController
      .create({
        message: "Wait a second...",
      })
      .then((loadingElement) => {
        loadingElement.present();
        var ref = this;
        this.commonService.getJobCategories().subscribe((res) => {
          this.jobs = res.map((e) => {
            return {
              id: e.payload.doc.id,
              name: e.payload.doc.data()["name"],
            };
          });
          ref.loadingController.dismiss();
        });
      });
    console.log('search')
    // this.commonService.getJobCategories().subscribe((res) => {
    //   this.jobs = res.map((e) => {
    //     return {
    //       id: e.payload.doc.id,
    //       name: e.payload.doc.data()["name"],
    //     };
    //   });
    //   console.log(this.jobs);
    // });
  }
  ionViewWillEnter() {}
  ngOnInit() {}
  ngAfterViewInit() {}
  onClickMove(type, typeId) {
    localStorage.setItem("jobId", typeId);
    switch (type) {
      case "Commercant": {
        this.router.navigate(["merchant"]);
        break;
      }
      case "Sans emploi": {
        this.router.navigate(["unemployed"]);
        break;
      }
      case "Capital": {
        // this.router.navigate(["job-search"]);
        break;
      }
      case "Longue maladie": {
        this.router.navigate(["illness"]);
        break;
      }
    }
  }
}
