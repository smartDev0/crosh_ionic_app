import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { CroshSecrurityComponent } from "./crosh-secrurity.component";
const routes: Routes = [
  {
    path: "",
    component: CroshSecrurityComponent,
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
  declarations: [CroshSecrurityComponent],
})
export class CroshSecurityPageRoutingModule {}
