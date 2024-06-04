import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { LetterIconModule } from "src/app/shared/components/letter-icon/letter-icon.module";

@NgModule({
    declarations: [
      HomeComponent,
    ],
    imports: [
        HomeRoutingModule,    
        LetterIconModule
    ],
  })
  export class HomeModule {}
  