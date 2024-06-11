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
import { LetterIconModule } from "./shared/components/letter-icon/letter-icon.module";

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        NotificationComponent,
        TimelineComponent,
        PublishComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        LetterIconModule
    ]
})
export class AppModule { }
