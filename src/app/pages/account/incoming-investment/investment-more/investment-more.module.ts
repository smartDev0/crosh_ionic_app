import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { InvestmentMoreComponent } from "./investment-more.component";
import { CommonService } from "../../../../service/common.service";
const routes: Routes = [
  {
    path: "",
    component: InvestmentMoreComponent,
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
  declarations: [InvestmentMoreComponent],
  providers: [CommonService],
})
export class InvestmentMorePageRoutingModule {}
