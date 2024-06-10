import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { NotificationComponent } from './views/notification/notification.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { PublishComponent } from './views/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotificationComponent,
    TimelineComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
