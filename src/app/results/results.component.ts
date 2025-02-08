import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  waterFootprint: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Check for query parameters or state passed from the questionnaire page
    this.waterFootprint = this.route.snapshot.queryParams['waterFootprint'] || 0;
  }
}
