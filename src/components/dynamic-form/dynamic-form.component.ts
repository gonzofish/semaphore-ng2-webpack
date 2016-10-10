import {
    Component,
    Input,
    OnChanges
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { Question } from '../../models';

@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html')
})
export class DynamicFormComponent implements OnChanges {
    @Input() questions:Array<Question>;

    formGroup: FormGroup;
    payload: string;

    ngOnChanges() {
        this.formGroup = this.generateForm(this.questions || []);
        this.payload = '';
    }

    private generateForm(questions: Array<Question>): FormGroup {
        const formControls = questions.reduce(this.generateControl, {});

        return new FormGroup(formControls);
    }

    private generateControl(controls: any, question: Question) {
        if (question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;
    }

    submit() {
        this.payload = JSON.stringify(this.formGroup.value, null, 4);
    }
}