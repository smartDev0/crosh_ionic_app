import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../service/common.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-profile-incoming",
  templateUrl: "./profile-incoming.component.html",
  styleUrls: ["./profile-incoming.component.scss"],
})
export class ProfileIncomingComponent implements OnInit {
  public TravailActive: String ;
  public pensionsActive: boolean = false;
  public CapitalActive: boolean = false;
  public RevenusActive: boolean = false;
  public immobiliersActive: boolean = false;
  public fiscauxActive: boolean = false;
  public types;
  constructor(
    private commonService: CommonService,
    public router: Router,
    public loadingController: LoadingController
  ) {
    this.loadingController
      .create({
        message: "Wait a second...",
      })
      .then((loadingElement) => {
        loadingElement.present();
        var ref = this;
        this.commonService.getTypeCategoires().subscribe((res) => {
          this.types = res.map((e) => {
            return {
              id: e.payload.doc.id,
              name: e.payload.doc.data()["name"],
            };
          });
          ref.loadingController.dismiss();
        });
      });
  }

  ngOnInit() { }
  
  ionViewWillEnter() {
  }

  ngAfterViewInit() {}
  onClickMove(type, typeId) {
    localStorage.setItem("typeId", typeId);
    switch (type) {
      case "Travail": {
        this.router.navigate(["job-search"]);
        break;
      }
      case "Retraites & pensions": {
        this.router.navigate(["pension-type"]);
        break;
      }
      case "Capital": {
        // this.router.navigate(["job-search"]);
        break;
      }
      case "Revenus sociaux": {
        this.router.navigate(["profile-social"]);
        break;
      }
      case "Revenus immobiliers et placement": {
        this.router.navigate(["received"]);
        break;
      }
      case "Revenus fiscaux": {
        this.router.navigate(["profile-tax"]);
        break;
      }
    }
  }

  isCardActive(name: string): boolean {
    const cardNameArr: string[] = JSON.parse(localStorage.getItem('card_items')) || [];
    return cardNameArr.includes(name);
  }
}
