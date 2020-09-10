import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../../../../service/common.service";
import { Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";
  import { IonSlides } from "@ionic/angular";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public jobs;
  public jobId: any;
  public currentJob;
  option = {
    loop: true,
    direction: "vertical",
    slidesPerView: 9,
    initialSlide: 7,
    speed: 400,
  };
  isActiveButton: boolean = true;
  segment = 0;
  @ViewChild("slides") slides: IonSlides;
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
    // this.commonService.getJobCategories().subscribe((res) => {
    //   this.jobs = res.map((e) => {
    //     return {
    //       id: e.payload.doc.id,
    //       name: e.payload.doc.data()["name"],
    //     };
    //   });
    //   console.log(this.jobs);
    // });
    this.jobId = "DvZsOjg3pnPBl7h4GAJM";
    this.currentJob = [
      {
        id: "DvZsOjg3pnPBl7h4GAJM",
        name: "Commercant"
      },
    ];
    this.onSelectChange(this.jobId)
  }
  onSlideChanged() {
    this.slides.getActiveIndex().then((val) => {
      this.segment = val;
      if (val == 16 || val == 10 || val == 14) {
        this.isActiveButton = true;
      } else {
        this.isActiveButton = false;
      }
    });
  }
  onSelectChange(event) {
    if (this.jobs) {
      const data = this.jobs.map((item) => {
        if (item.id == this.jobId) {
          return item;
        }
      });

      this.currentJob = data.filter((item) => {
        if (item != undefined) return item;
      });
      if (
        this.currentJob[0].name == "Commercant" ||
        this.currentJob[0].name == "Sans emploi" ||
        this.currentJob[0].name == "Longue maladie"
      ) {
        this.isActiveButton = true;
      } else {
        this.isActiveButton = false;
      }
    }
    
      console.log(event, this.currentJob);
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
  moveNextStep(segment) {
    switch (segment[0].name) {
      case "Commercant":
        this.router.navigate(["merchant"]);
        break;
      case "Sans emploi":
        this.router.navigate(["unemployed"]);
        break;
      case "Longue maladie":
        this.router.navigate(["illness"]);
        break;
    }
  }
}
