import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./pages/layout/admin-layout/admin-layout.component";
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
  {
    path: "my-heritage",
    loadChildren: () =>
      import("./pages/home/my-heritage/my-heritage.module").then(
        (m) => m.MyHeritagePageRoutingModule
      ),
  },
  {
    path: "crosh-heritage",
    loadChildren: () =>
      import("./pages/home/crosh-heritage/crosh-heritage.module").then(
        (m) => m.CroshHeritagePageRoutingModule
      ),
  },
  {
    path: "calculation",
    loadChildren: () =>
      import("./pages/home/calculation/calculation.module").then(
        (m) => m.CalculationPageRoutingModule
      ),
  },
  {
    path: "project-detail",
    loadChildren: () =>
      import("./pages/home/project-detail/project-detail.module").then(
        (m) => m.ProjectDetailPageRoutingModule
      ),
  },
  {
    path: "home",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./pages/home/dashboard/dashboard.module").then(
            (m) => m.DashboardPageRoutingModule
          ),
      },
      {
        path: "project",
        loadChildren: () =>
          import("./pages/home/project/project.module").then(
            (m) => m.ProjectPageRoutingModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./pages/account/profile/profile.module").then(
            (m) => m.ProfilePageRoutingModule
          ),
      },
    ],
  },
  {
    path: "crosh",
    loadChildren: () =>
      import("./pages/auth/crosh/crosh.module").then(
        (m) => m.CroshPageRoutingModule
      ),
  },
  {
    path: "crosh-about",
    loadChildren: () =>
      import("./pages/auth/crosh-about/crosh-about.module").then(
        (m) => m.CroshAboutPageRoutingModule
      ),
  },
  {
    path: "crosh-security",
    loadChildren: () =>
      import("./pages/auth/crosh-secrurity/crosh-security.module").then(
        (m) => m.CroshSecurityPageRoutingModule
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
