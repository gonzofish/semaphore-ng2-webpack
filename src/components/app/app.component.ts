import { Component } from '@angular/core';

import { FormService } from '../../services/form.service';
import { RestService } from '../../services/rest.service';
import { FormData, Question } from '../../models';

@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})
export class AppComponent {
    forms: FormData[] = null;
    selectedForm: FormData = null;

    constructor(private formService: FormService, private restService: RestService) {
        restService.getForms().subscribe((forms: FormData[]) => {
            this.formService.setForms(forms);
        });
    }
}