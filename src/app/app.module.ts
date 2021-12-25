import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routinComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './Components/question/question.component';
import { MainScreenComponent } from './View/main-screen/main-screen.component';
import { GameOverComponent } from './View/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    routinComponents,
    MainScreenComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
