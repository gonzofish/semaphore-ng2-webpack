import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';
import { Router } from '@angular/router';

import { FormListComponent } from './form-list.component';
import { FormService } from '../../services/form.service';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

class MockFormService {
    forms = {
        subscribe: () => {}
    }
}

describe('Component: FormListComponent', () => {
    let component: FormListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormListComponent],
            providers: [
                { provide: Router, useClass: MockRouter },
                { provide: FormService, useClass: MockFormService }
            ]
        })
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(FormListComponent);

            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    describe('#displayForm', () => {
        it('should call Router.navigateByUrl("forms/:id") with the ID of the form', inject([Router], (router: Router) => {
            const spy = spyOn(router, 'navigateByUrl');

            component.displayForm(23);

            const url = spy.calls.first().args[0];

            expect(url).toBe('/form/23');
        }));
    });
});