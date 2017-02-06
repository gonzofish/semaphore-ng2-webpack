import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormService } from '../../services/form.service';
import { FormData } from '../../models';

@Component({
    selector: 'form-viewer',
    template: require('./form-viewer.component.html'),
    styles: []
})
export class FormViewerComponent implements OnInit {
    private get _blankForm(): FormData {
        return {
            id: null,
            questions: [],
            title: ''
        };
    }

    form: FormData = this._blankForm;

    constructor(private formService: FormService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.formService.forms.subscribe(() => {
            this.route.params.map((param) => parseInt(param['id']))
                .forEach((id: number) => this.selectForm(id));
        });
    }

    private selectForm(id: number) {
        const selectedForm = this.formService.getForm(id);

        if (selectedForm) {
            this.form = selectedForm;
        } else {
            this.form = this._blankForm;
        }
    }
}