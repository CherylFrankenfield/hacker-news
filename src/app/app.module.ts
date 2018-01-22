import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowComponent } from './show/show.component';
import { AskComponent } from './ask/ask.component';
import { JobsComponent } from './jobs/jobs.component';
import { SubmitComponent } from './submit/submit.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    CommentsComponent,
    ShowComponent,
    AskComponent,
    JobsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
