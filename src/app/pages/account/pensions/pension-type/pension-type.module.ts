import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { PensionTypeComponent } from "./pension-type.component";
const routes: Routes = [
  {
    path: "",
    component: PensionTypeComponent,
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
  declarations: [PensionTypeComponent],
})
export class PensionTypePageRoutingModule {}
