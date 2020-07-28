import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { UnemployedMoreComponent } from "./unemployed-more.component";
import { CommonService } from "../../../../service/common.service";
const routes: Routes = [
  {
    path: "",
    component: UnemployedMoreComponent,
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
  declarations: [UnemployedMoreComponent],
  providers: [CommonService],
})
export class UnemployedMorePageRoutingModule {}
