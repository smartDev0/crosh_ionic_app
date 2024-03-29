import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CommonService } from "../../../../service/common.service";
import { PensionSupplymentComponent } from "./pension-supplyment.component";
const routes: Routes = [
  {
    path: "",
    component: PensionSupplymentComponent,
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
  declarations: [PensionSupplymentComponent],
  providers: [CommonService],
})
export class PensionSupplymentPageRoutingModule {}
