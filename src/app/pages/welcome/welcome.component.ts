import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/shared/service/authentication.service";
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  async ngOnInit() {
    if (this.authService.isLoggedIn) {
      // this.router.navigate(["home/dashboard"]);
    }
  }
  goLogin() {
    this.router.navigate(["/login"]);
  }
  goIntroduction() {
    this.router.navigate(["/introduction"]);
  }
}
