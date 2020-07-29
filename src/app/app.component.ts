import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Survey, SurveyQuestion} from './entities/entities';
import {SurveyService} from './services/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SurveyService]
})

export class AppComponent {
  questions$: Observable<SurveyQuestion[]>;
  survey: Survey;

  constructor(private service: SurveyService) {
    this.survey = this.service.getSurveyToAnswer();
    this.questions$ = of(this.survey.questions);
  }
}
