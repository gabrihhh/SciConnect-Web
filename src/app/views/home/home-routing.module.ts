import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PublishComponent } from '../publish/publish.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProfileComponent } from '../profile/profile.component';
;

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'publish', component: PublishComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'profile', component: ProfileComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
