import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { CroshAboutComponent } from "./crosh-about.component";
const routes: Routes = [
  {
    path: "",
    component: CroshAboutComponent,
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
  declarations: [CroshAboutComponent],
})
export class CroshAboutPageRoutingModule {}
