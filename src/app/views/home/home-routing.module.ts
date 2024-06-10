import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PublishComponent } from '../publish/publish.component';
;

const routes: Routes = [
    {path:'',component:HomeComponent,children:[
      {path:'publish', component: PublishComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
