import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormData } from '../../models';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'form-list',
    template: require('./form-list.component.html'),
    styles: []
})
export class FormListComponent {
    forms: Array<FormData> = [];

    constructor(private formService: FormService, private router: Router) {
        this.formService.forms
            .subscribe((forms) => this.forms = forms);
    }

    displayForm(id: number) {
        this.router.navigateByUrl(`/form/${id}`);
    }
}