import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MockActivatedRoute } from '../../mocks/activated-route';
import { FormService } from '../../services/form.service';
import { FormViewerComponent } from './form-viewer.component';

describe('Component: FormViewerComponent', () => {
    let activeRoute: MockActivatedRoute;
    let component: FormViewerComponent;

    const createComponent = () => {
        const fixture = TestBed.createComponent(FormViewerComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();
    };

    beforeEach(() => {
        activeRoute = new MockActivatedRoute();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormViewerComponent],
            imports: [],
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
        spyOn(formService, 'getForm');
        activeRoute.testParams = { id: 1234 };
        createComponent();

        expect(formService.getForm).toHaveBeenCalledWith(1234);
    }));
});
