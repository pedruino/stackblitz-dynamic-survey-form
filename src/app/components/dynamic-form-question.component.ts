import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {SurveyQuestion} from '../entities/entities';

@Component({
  selector: 'app-survey-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})

export class DynamicFormQuestionComponent {
  @Input() question: SurveyQuestion;
  @Input() form: FormGroup;

  get isValid(): boolean {
    return this.form.controls[this.question.id].valid;
  }

  onChange(option): void {
    const questionOptions = this.form.controls[this.question.id] as FormArray;

    if (option.checked) {
      questionOptions.push(new FormControl(option.source.value));
    } else {
      const i = questionOptions.controls.findIndex(opt => opt.value === option.source.value);
      questionOptions.removeAt(i);
    }
  }
}
