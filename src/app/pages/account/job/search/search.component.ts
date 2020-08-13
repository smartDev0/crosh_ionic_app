import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../../service/common.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public jobs;
  constructor(private commonService: CommonService) {
    this.commonService.getJobCategories().subscribe((res) => {
      this.jobs = res.map((e) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
        };
      });
      console.log(this.jobs);
    });
  }
  ionViewWillEnter() {}
  ngOnInit() {}
  ngAfterViewInit() {}
}
