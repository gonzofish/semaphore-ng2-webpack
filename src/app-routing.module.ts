import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { FormListComponent } from './components/form-list/form-list.component';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';

const appRoutes: Routes = [
    {
        path: 'forms',
        component: FormListComponent
    },
    {
        path: 'form/:id',
        component: FormViewerComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/forms'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}