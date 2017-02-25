import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import { RestService } from './rest.service';
import { FormData } from '../models';

describe('Service: RestService', () => {
    let backend: MockBackend;
    let service: RestService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                RestService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(RestService);

    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === 'api/forms') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of forms from the server on success', () => {
        setupConnections(backend, {
            body: {
                data: [
                    {
                        id: 1,
                        questions: [],
                        title: 'Pizza'
                    },
                    {
                        id: 4,
                        questions: [],
                        title: 'Burrito'
                    },
                    {
                        id: 2,
                        questions: [],
                        title: 'Cheeseburger'
                    }
                ]
            },
            status: 200
        });

        service.getForms().subscribe((data: FormData[]) => {
            expect(data.length).toBe(3);
            expect(data[0].title).toBe('Pizza');
            expect(data[1].title).toBe('Burrito');
            expect(data[2].title).toBe('Cheeseburger');
        });
    });

    it('should log an error to the console on error', () => {
        setupConnections(backend, {
            body: { error: `I'm afraid I've got some bad news!` },
            status: 500
        });
        spyOn(console, 'error');

        service.getForms().subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!`);
        });
    });
});