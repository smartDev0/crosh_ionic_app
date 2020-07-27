import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RegisterIntroduceComponent } from "./register-introduce.component";
const routes: Routes = [
  {
    path: "",
    component: RegisterIntroduceComponent,
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
  declarations: [RegisterIntroduceComponent],
})
export class RegisterIntroductionPageRoutingModule {}
