import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component'; 

const routes: Routes = [
  { path: '', component: QuizFormComponent }, // Home page
  { path: 'questionnaire', component: QuestionnaireComponent }, // Questionnaire page
  { path: 'results', component: ResultsComponent }, // Results page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
