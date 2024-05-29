import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('src/app/views/home/home.component.module').then((m)=> m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    loadChildren: () =>
      import('src/app/views/login/login.component.module').then((m)=> m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
