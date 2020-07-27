import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(
        (m) => m.WelcomePageRoutingModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth/login/login.module").then(
        (m) => m.LoginPageRoutingModule
      ),
  },
  {
    path: "verify",
    loadChildren: () =>
      import("./pages/auth/verify/verify.module").then(
        (m) => m.VerifyPageRoutingModule
      ),
  },
  {
    path: "introduction",
    loadChildren: () =>
      import("./pages/auth/register-introduce/register-introduce.module").then(
        (m) => m.RegisterIntroductionPageRoutingModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/auth/register/register.module").then(
        (m) => m.RegisterPageRoutingModule
      ),
  },
  {
    path: "question",
    loadChildren: () =>
      import("./pages/auth/register-question/register-question.module").then(
        (m) => m.RegisterQuestionPageRoutingModule
      ),
  },
  {
    path: "done",
    loadChildren: () =>
      import("./pages/auth/done/done.module").then(
        (m) => m.DonePageRoutingModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
