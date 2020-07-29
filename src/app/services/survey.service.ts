import {Injectable} from '@angular/core';
import {QuestionType, Survey, SurveyQuestion, SurveyQuestionOption} from '../entities/entities';

@Injectable()
export class SurveyService {

  // TODO: get from a remote source
  getSurveyToAnswer(): Survey {
    return new Survey(1, 'Survey subject', [
      new SurveyQuestion(13, QuestionType.SINGLE_CHOICE, 'Question 1', [
        new SurveyQuestionOption(56, 'Option A'),
        new SurveyQuestionOption(57, 'Option B'),
        new SurveyQuestionOption(59, 'Option C'),
      ]),
      new SurveyQuestion(14, QuestionType.MULTIPLE_CHOICE, 'Question 2', [
        new SurveyQuestionOption(67, 'Option A'),
        new SurveyQuestionOption(68, 'Option B'),
        new SurveyQuestionOption(69, 'Option C'),
        new SurveyQuestionOption(70, 'Option D'),
        new SurveyQuestionOption(71, 'Option E'),
      ]),
      new SurveyQuestion(15, QuestionType.MULTIPLE_CHOICE, 'Question 3', [
        new SurveyQuestionOption(81, 'Option A'),
        new SurveyQuestionOption(82, 'Option B'),
        new SurveyQuestionOption(83, 'Option C'),
        new SurveyQuestionOption(84, 'Option D'),
        new SurveyQuestionOption(85, 'Option E'),
      ]),
    ]);
  }
}
