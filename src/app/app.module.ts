import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // aussi une option valide
import { FormsModule } from '@angular/forms';  // ✅ Add this



import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [AppComponent, QuizFormComponent, QuestionnaireComponent, ResultsComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,     FormsModule  // ✅ Add this
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
