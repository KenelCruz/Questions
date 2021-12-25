import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import {MainScreenComponent} from './View/main-screen/main-screen.component';
import {GameOverComponent} from './View/game-over/game-over.component';
const routes: Routes = [
  {path: '', redirectTo:'main', pathMatch:'full'},
  {path: 'main', component: MainScreenComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'GameOver', component: GameOverComponent},
  {path: 'GameOver/:puntaje', component: GameOverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponents = [MainScreenComponent, QuestionComponent, GameOverComponent]
