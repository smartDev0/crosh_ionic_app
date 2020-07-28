import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ProfileInformationDoneComponent } from "./profile-information-done.component";
const routes: Routes = [
  {
    path: "",
    component: ProfileInformationDoneComponent,
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
  declarations: [ProfileInformationDoneComponent],
})
export class ProfileInformationDonePageRoutingModule {}
