import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SurveyQuestion} from '../entities/entities';
import {SurveyQuestionControlService} from '../services/survey-question-control.service';

@Component({
  selector: 'app-survey-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.css'],
  providers: [SurveyQuestionControlService]
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: SurveyQuestion[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: SurveyQuestionControlService) {
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(this.payLoad);
  }
}
