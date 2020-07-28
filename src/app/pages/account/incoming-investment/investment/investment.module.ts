import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { InvestmentComponent } from "./investment.component";
import { CommonService } from "../../../../service/common.service";
const routes: Routes = [
  {
    path: "",
    component: InvestmentComponent,
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
  declarations: [InvestmentComponent],
  providers: [CommonService],
})
export class InvestmentPageRoutingModule {}
