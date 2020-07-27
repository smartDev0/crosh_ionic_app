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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
