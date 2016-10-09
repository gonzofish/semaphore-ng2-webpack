import { Component } from '@angular/core';

import { FormService } from '../../services/form.service';
import { FormData, Question } from '../../models';

@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})
export class AppComponent {
    form: FormData = null;

    constructor(private formService: FormService) {
        formService.setForms([
            {
                id: 1,
                questions: [
                    {
                        controlType: 'radio',
                        id: 'doyou',
                        label: 'Do you like pizza?',
                        options: [
                            { label: 'Yes', value: 1 },
                            { label: 'Of course', value: 2 }
                        ],
                        required: true
                    },
                    {
                        controlType: 'select',
                        id: 'favorite',
                        label: 'Which is your favorite pizza?',
                        options: [
                            { label: '', value: 'no-answer' },
                            { label: 'Anchovie', value: 'fish' },
                            { label: 'Hawaiian', value: 'pineapple-ham' },
                            { label: 'Meat Lover\'s', value: 'meat lover' },
                            { label: 'Veggie', value: 'vegetable' }
                        ],
                        required: false
                    },
                    {
                        controlType: 'textarea',
                        id: 'more',
                        label: 'Gives us your thoughts on pizza:',
                        required: false
                    }
                ],
                title: 'Pizza Perfection'
            }
        ]);

        this.form = formService.getForm(1);
    }
}