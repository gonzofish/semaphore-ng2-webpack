import { async, TestBed } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs/Rx';

import { FormService } from './form.service';
import { FormData } from '../models';

class MockSubject {
    constructor(defaultValue: any) {
        console.info('hey yall');
    }
    next(value: any) {}
}

describe('Service: FormService', () => {
    const testForms: Array<FormData> = [
        {
            id: 2,
            questions: [
                {
                    controlType: 'radio',
                    id: 'like',
                    label: 'Do you like pizza?',
                    options: [
                        { label: 'Yes', value: 1 },
                        { label: 'Of Course', value: 2 }
                    ],
                    required: true
                },
                {
                    controlType: 'text',
                    id: 'toppings',
                    label: 'What toppings do you like?',
                    required: false
                }
            ],
            title: 'Pizza Party'
        },
        {
            id: 5,
            questions: [
                {
                    controlType: 'select',
                    id: 'delicious',
                    label: 'What is the best cheese for a burger?',
                    options: [
                        { label: '', value: 'no-cheese' },
                        { label: 'American', value: 'american' },
                        { label: 'Cheddar', value: 'cheddar' },
                        { label: 'Provolone', value: 'provolone' },
                        { label: 'Swiss', value: 'swiss' }
                    ],
                    required: true
                },
                {
                    controlType: 'textarea',
                    id: 'perfection',
                    label: 'Describe your perfect burger:',
                    required: true
                }
            ],
            title: 'Burger Bonanza'
        }
    ];
    let service: FormService;

    beforeEach(() => {
        service = new FormService();
    });

    it('should have a `forms` attribute that is a BehaviorSubject', () => {
        expect(service.forms instanceof BehaviorSubject).toBe(true);
    });


    it('#setForms should call forms.next', () => {
        spyOn(service.forms, 'next');
        service.setForms(testForms);

        expect(service.forms.next).toHaveBeenCalledWith(testForms);
    });

    describe('#getForm', () => {
        beforeEach(() => {
            service.setForms(testForms);
        });

        it('should return the form matching the provided ID', () => {
            expect(service.getForm(5)).toEqual(testForms[1]);
            expect(service.getForm(2)).toEqual(testForms[0]);
        });

        it('should return `null` if it does NOT find a form matching the provided ID', () => {
            expect(service.getForm(1)).toBeNull();
            expect(service.getForm(null)).toBeNull();
            expect(service.getForm(0)).toBeNull();
        });
    });
});