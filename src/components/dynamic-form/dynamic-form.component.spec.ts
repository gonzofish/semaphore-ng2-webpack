import {
    TestBed
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicQuestionComponent } from '../dynamic-question/dynamic-question.component';

describe('Component: DynamicFormComponent', () => {
    let component: DynamicFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent, DynamicQuestionComponent],
            imports: [ReactiveFormsModule]
        });

        const fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should create a `FormGroup`', () => {
        component.ngOnChanges();
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });

    it('should create a `FormControl` for each question', () => {
        component.questions = [
            {
                controlType: 'text',
                id: 'first',
                label: 'My First',
                required: false
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true
            }
        ];
        component.ngOnChanges();

        expect(Object.keys(component.formGroup.controls)).toEqual([
            'first', 'second'
        ]);
    });

    it('should set the `payload` to a stringified version of our form values', () => {
        component.questions = [
            {
                controlType: 'text',
                id: 'first',
                label: 'My First',
                required: false
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true
            }
        ];
        component.ngOnChanges();

        component.formGroup.controls['first'].setValue('pizza');
        component.submit();

        expect(component.payload).toEqual(JSON.stringify({first: 'pizza', second: ''}, null, 4));
    });
});