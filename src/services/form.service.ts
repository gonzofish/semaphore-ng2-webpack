import { Injectable } from '@angular/core';
import { FormData } from '../models';

import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class FormService {
    forms = new BehaviorSubject<Array<FormData>>([]);

    setForms(newForms: Array<FormData>) {
        this.forms.next(newForms);
    }

    getForm(formId: number): FormData {
        let form = this.forms.value.find((form) => form.id === formId);

        if (!form) {
            form = null;
        }

        return form;
    }
}