import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MyHeritageComponent } from "./my-heritage.component";
const routes: Routes = [
  {
    path: "",
    component: MyHeritageComponent,
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
  declarations: [MyHeritageComponent],
})
export class MyHeritagePageRoutingModule {}
