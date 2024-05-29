import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { LoginRoutingModule } from "./login-routing.module";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports:[
      LoginRoutingModule,
      MatFormFieldModule,
      MatIconModule,
      FormsModule,
    ],
    exports:[
      LoginComponent
    ]
  })
  export class LoginModule {}
  