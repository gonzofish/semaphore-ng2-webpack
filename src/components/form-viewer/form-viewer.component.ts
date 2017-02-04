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
    selectedForm: FormData;

    constructor(private formService: FormService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.map((param) => parseInt(param['id']))
            .forEach((id: number) => this.selectForm(id));
    }

    private selectForm(id: number) {
        console.info(`Id: ${id}`);
        this.selectedForm = this.formService.getForm(id);
    }
}