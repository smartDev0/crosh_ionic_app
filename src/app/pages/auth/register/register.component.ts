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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  submitted = false;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required],
      cpassword: ["", Validators.required],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.password != this.registerForm.value.cpassword) {
      window.alert("please match password");
      return;
    }
    const userData = {
      firstName: this.registerForm.value.password,
    };
    this.authService
      .RegisterUser(this.registerForm.value)
      .then((res) => {
        // Do something here
        this.authService.SendVerificationMail();
        this.router.navigate(["verify-email"]);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
