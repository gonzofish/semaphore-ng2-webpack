import { BehaviorSubject } from 'rxjs/Rx';

export class MockActivatedRoute {
    private paramsSubject = new BehaviorSubject(this.testParams);
    private _testParams: {};

    params  = this.paramsSubject.asObservable();

    get testParams() {
        return this._testParams;
    }
    set testParams(newParams: any) {
        this._testParams = newParams;
        this.paramsSubject.next(newParams);
    }
}