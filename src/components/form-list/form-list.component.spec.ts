import {
    TestBed
} from '@angular/core/testing';

import { FormListComponent } from './form-list.component';

describe('Component: DynamicFormComponent', () => {
    let component: FormListComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormListComponent],
            imports: []
        });

        const fixture = TestBed.createComponent(FormListComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});