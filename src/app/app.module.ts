import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DynamicFormComponent} from './components/dynamic-form.component';
import {DynamicFormQuestionComponent} from './components/dynamic-form-question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule, BrowserAnimationsModule,
    MatRadioModule, MatCheckboxModule,
    MatInputModule, MatCardModule, MatButtonModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

