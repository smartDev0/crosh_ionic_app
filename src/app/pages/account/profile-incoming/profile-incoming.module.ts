import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ProfileIncomingComponent } from "./profile-incoming.component";
const routes: Routes = [
  {
    path: "",
    component: ProfileIncomingComponent,
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
  declarations: [ProfileIncomingComponent],
})
export class ProfileIncomingPageRoutingModule {}
