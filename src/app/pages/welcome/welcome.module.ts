import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
