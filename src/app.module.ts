import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FormService } from './services/form.service';

import {
    AppComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, DynamicFormComponent, DynamicQuestionComponent ],
    imports: [ BrowserModule, ReactiveFormsModule ],
    providers: [ FormService ]
})
export class AppModule {}