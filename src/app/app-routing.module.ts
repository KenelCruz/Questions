import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import {MainScreenComponent} from './View/main-screen/main-screen.component';

const routes: Routes = [
  {path: '', redirectTo:'main', pathMatch:'full'},
  {path: 'main', component: MainScreenComponent},
  {path: 'question', component: QuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponents = [MainScreenComponent, QuestionComponent]
