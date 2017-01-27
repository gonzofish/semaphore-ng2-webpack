import {
    TestBed
} from '@angular/core/testing';

import { FormViewerComponent } from './form-viewer.component';

describe('Component: DynamicFormComponent', () => {
    let component: FormViewerComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormViewerComponent],
            imports: []
        });

        const fixture = TestBed.createComponent(FormViewerComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});