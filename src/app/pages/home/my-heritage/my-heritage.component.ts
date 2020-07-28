import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-heritage",
  templateUrl: "./my-heritage.component.html",
  styleUrls: ["./my-heritage.component.scss"],
})
export class MyHeritageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goDashboard() {
    this.router.navigate(["home/dashboard"]);
  }
}
