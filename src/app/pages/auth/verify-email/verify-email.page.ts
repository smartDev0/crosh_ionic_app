import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthenticationService } from "./../../../shared/service/authentication.service";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.page.html",
  styleUrls: ["./verify-email.page.scss"],
})
export class VerifyEmailPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}
  back() {
    this.router.navigate(["welcome"]);
  }
}
