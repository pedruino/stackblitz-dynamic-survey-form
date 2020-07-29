import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionType, SurveyQuestion} from '../entities/entities';


@Injectable()
export class SurveyQuestionControlService {
  private readonly defaultState = '';

  constructor(private formBuilder: FormBuilder) {
  }

  public toFormGroup(questions: SurveyQuestion[]): FormGroup {
    const group: any = {};

    for (const question of questions) {
      if (question.questionType === QuestionType.SINGLE_CHOICE) {
        group[question.id] = new FormControl(this.defaultState, Validators.required);
      } else {
        group[question.id] = this.formBuilder.array([]);
      }
    }
    return new FormGroup(group);
  }
}
