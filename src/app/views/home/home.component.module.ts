import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { LetterIconModule } from "src/app/shared/components/letter-icon/letter-icon.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
      HomeComponent,
    ],
    imports: [
        HomeRoutingModule,    
        LetterIconModule,
        CommonModule,
        FormsModule
    ],
  })
  export class HomeModule {}
  