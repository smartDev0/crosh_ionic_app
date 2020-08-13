import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./../../../shared/service/authentication.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}
  logout() {
    this.authService.SignOut();
  }
}
