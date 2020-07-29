export class QuestionType {
  public static readonly SINGLE_CHOICE = 0;
  public static readonly MULTIPLE_CHOICE = 1;
}

export class Survey {
  id: number;
  subject: string;
  questions: SurveyQuestion[];

  constructor(id: number, subject: string, questions: SurveyQuestion[]) {
    this.id = id;
    this.subject = subject;
    this.questions = questions;
  }
}

export class SurveyQuestion {
  id: number;
  questionType: number;
  sentence: string;
  options: SurveyQuestionOption[];

  constructor(id: number, questionType: number, sentence: string, options: SurveyQuestionOption[]) {
    this.id = id;
    this.questionType = questionType;
    this.sentence = sentence;
    this.options = options;
  }
}

export class SurveyQuestionOption {
  id: number;
  text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
