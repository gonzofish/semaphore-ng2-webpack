import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { FormService } from './services/form.service';
import { FauxFormsService } from './services/in-memory.service';
import { RestService } from './services/rest.service';

import {
    AppComponent,
    DynamicFormComponent,
    DynamicQuestionComponent,
    FormListComponent,
    FormViewerComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicQuestionComponent,
        FormListComponent,
        FormViewerComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(FauxFormsService),
        ReactiveFormsModule
    ],
    providers: [
        FormService,
        RestService
    ]
})
export class AppModule {}