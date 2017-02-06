import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MockActivatedRoute } from '../../mocks/activated-route';
import { FormService } from '../../services/form.service';
import { FormViewerComponent } from './form-viewer.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from '../dynamic-question/dynamic-question.component';

describe('Component: FormViewerComponent', () => {
    const createComponent = () => {
        const fixture = TestBed.createComponent(FormViewerComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    };
    let activeRoute: MockActivatedRoute;
    let component: FormViewerComponent;

    beforeEach(() => {
        activeRoute = new MockActivatedRoute();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormViewerComponent,
                DynamicFormComponent,
                DynamicQuestionComponent
            ],
            imports: [
                ReactiveFormsModule
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activeRoute },
                FormService
            ]
        });
    }));

    it('should have a defined component', () => {
        createComponent();
        expect(component).toBeDefined();
    });

    it('should call `FormService.getForm` when the route ID changes', inject([FormService], (formService: FormService) => {
        spyOn(formService, 'getForm').and.returnValue({ questions: [] });
        activeRoute.testParams = { id: 1234 };
        createComponent();
        formService.forms.next([]);

        expect(formService.getForm).toHaveBeenCalledWith(1234);
    }));
});
