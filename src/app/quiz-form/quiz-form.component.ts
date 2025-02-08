import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent {
  quizForm: FormGroup;
  countries: string[] = ['France', 'Tunisia', 'USA', 'Germany', 'Canada'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.quizForm = this.fb.group({
      country: [''],
      gender: [''],
      diet: ['']
    });
  }
  goToQuestionnaire() {
    this.router.navigate(['/questionnaire']);
  }

  onNext() {
    console.log(this.quizForm.value);
    // Naviguer vers la prochaine étape (à définir)
    this.router.navigate(['/next-step']); 
  }
}
