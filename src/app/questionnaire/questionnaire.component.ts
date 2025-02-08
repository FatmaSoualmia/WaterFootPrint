import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ResultsComponent } from '../results/results.component';



@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  totalWaterFootprint: number = 0;
  currentQuestion: number = 0; // Track which question is being displayed
  answers: number[] = [];


  // Define questionnaire questions
  questions = [
    { 
      text: "How much meat do you consume per week?", 
      options: [
        { text: "Less than 0.5 kg (2,000 liters)", value: 2000 },
        { text: "0.5-1 kg (4,000 liters)", value: 4000 },
        { text: "1-2 kg (8,000 liters)", value: 8000 },
        { text: "More than 2 kg (12,000 liters)", value: 12000 }
      ]
    },
    { 
      text: "How much cereal (e.g., couscous, bread) do you consume per week?", 
      options: [
        { text: "Less than 1 kg (500 liters)", value: 500 },
        { text: "1-3 kg (1,500 liters)", value: 1500 },
        { text: "3-5 kg (3,000 liters)", value: 3000 },
        { text: "More than 5 kg (5,000 liters)", value: 5000 }
      ]
    },
    { 
      text: "How much dairy (e.g., milk, cheese) do you consume per week?", 
      options: [
        { text: "Less than 1 kg (1,000 liters)", value: 1000 },
        { text: "1-3 kg (3,000 liters)", value: 3000 },
        { text: "3-5 kg (5,000 liters)", value: 5000 },
        { text: "More than 5 kg (7,000 liters)", value: 7000 }
      ]
    },
    {
      category: "Domestic Water Use",
      text: "How many showers do you take per day?",
      options: [
        { text: "1",  value: 50 },
        { text: "2", value: 100 },
        { text: "3", value: 150 },
        { text:  "More than 3", value: 200 }
      ]
    },
    {
      category: "Domestic Water Use",
      text: "How long are your showers on average?",
      options: [
        { text: "Less than 5 minutes", value: 30 },
        { text: "5-10 minutes", value: 50 },
        { text: "10-15 minutes", value: 80 },
        { text: "More than 15 minutes", value: 120 }
      ]
    },
    {
      category: "Domestic Water Use",
      text: "How often do you flush the toilet per day?",
      options: [
        { text: "1-3 times", value: 30 },
        { text: "4-6 times", value: 60 },
        { text: "7-10 times", value: 90 },
        { text: "More than 10 times", value: 120 }
      ]
    },
    {
      category: "Laundry & Dishwashing",
      text: "How often do you use a washing machine per week?",
      options: [
        { text: "1-2 times", value: 100 },
        { text: "3-4 times", value: 200 },
        { text: "More than 4 times", value: 300 }
      ]
    },
    {
      category: "Laundry & Dishwashing",
      text: "Do you wash dishes by hand or use a dishwasher?",
      options: [
        { text: "Handwashing with running water", value: 50 },
        { text: "Handwashing with a filled basin", value: 20 },
        { text: "Dishwasher", value: 10 }
      ]
    },
    {
      category: "Outdoor Water Use",
      text: "How often do you water your garden per week?",
      options: [
        { text: "0", value: 0 },
        { text: "1-2 times", value: 500 },
        { text: "3-4 times", value: 1000 },
        { text: "More than 4 times", value: 1500 }
      ]
    },
    {
      category: "Outdoor Water Use",
      text: "How many times do you wash your car per week?",
      options: [
        { text: "0", value: 0 },
        { text: "1", value: 100 },
        { text: "2", value: 200 },
        { text: "More than 2", value: 300 }
      ]
    },
    {
      category: "Shopping & Clothing Habits",
      text: "How often do you buy new clothes?",
      options: [
        { text: "Once a month or less", value: 500 },
        { text: "2-4 times per month", value: 1000 },
        { text: "Weekly", value: 2000 }
      ]
    },
    {
      category: "Shopping & Clothing Habits",
      text: "Do you recycle or donate old clothes?",
      options: [
        { text: "Yes", value: -300 },
        { text: "No", value: 0 }
      ]
    },
    {
      category: "Travel & Transportation",
      text: "How often do you use a car per week?",
      options: [
        { text: "Never, I use public transport", value: 0 },
        { text: "1-2 times", value: 500 },
        { text: "3-5 times", value: 1000 },
        { text: "Daily", value: 2000 }
      ]
    },
    {
      category: "Travel & Transportation",
      text: "Do you take flights frequently?",
      options: [
        { text: "Never", value: 0 },
        { text: "Once a year", value: 5000 },
        { text: "2-4 times a year", value: 10000 },
        { text: "More than 4 times a year", value: 20000 }
      ]
    },
    {
      category: "Water Conservation Habits",
      text: "Do you collect rainwater for gardening or other uses?",
      options: [
        { text: "Yes", value: -200 },
        { text: "No", value: 0 }
      ]
    },
    {
      category: "Water Conservation Habits",
      text: "Do you use water-efficient appliances?",
      options: [
        { text: "Yes", value: -200 },
        { text: "No", value: 0 }
      ]
    }
  ];
  

  constructor(private router: Router) {}

  // Call this method when an answer is selected
  onSelectAnswer(questionIndex: number, selectedIndex: number) {
    this.answers[questionIndex] = selectedIndex;  // Store the selected answer index for the question
    console.log('Selected answers:', this.answers);  // Log to verify answers
  }
  
  
  // Move to the next question
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  // Move to the previous question
  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }
  onAnswerSelected(questionIndex: number, selectedOption: number) {
    this.answers[questionIndex] = selectedOption;  // Store answer for a specific question
  }

  calculateWaterFootprint() {
    this.totalWaterFootprint = 0;
  
    // Loop through the answers and add up the values for each selected answer
    this.answers.forEach((answer: number, index: number) => {
      const question = this.questions[index];
      const selectedOption = question.options[answer]; // Get the selected option based on the answer index
      if (selectedOption) {
        this.totalWaterFootprint += selectedOption.value;
      }
    });
  
    console.log('Calculated Water Footprint:', this.totalWaterFootprint);
  }
  
  



  finishQuiz() {
    console.log('Finish button pressed!');
    this.calculateWaterFootprint();
    console.log('Calculated Total Water Footprint:', this.totalWaterFootprint);
  
    // Navigate to the results page with the water footprint as a query parameter
    this.router.navigate(['/results'], { queryParams: { waterFootprint: this.totalWaterFootprint } });
  }
  
  
  
  

}
