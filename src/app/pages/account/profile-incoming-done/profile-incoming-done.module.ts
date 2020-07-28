import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ProfileIncomingDoneComponent } from "./profile-incoming-done.component";
import { CommonService } from "../../../service/common.service";
const routes: Routes = [
  {
    path: "",
    component: ProfileIncomingDoneComponent,
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
  declarations: [ProfileIncomingDoneComponent],
  providers: [CommonService],
})
export class ProfileIncomingDonePageRoutingModule {}
