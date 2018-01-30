import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JHipsterDemoAppSharedModule } from '../../shared';
import {
    ImageMySuffixService,
    ImageMySuffixPopupService,
    ImageMySuffixComponent,
    ImageMySuffixDetailComponent,
    ImageMySuffixDialogComponent,
    ImageMySuffixPopupComponent,
    ImageMySuffixDeletePopupComponent,
    ImageMySuffixDeleteDialogComponent,
    imageRoute,
    imagePopupRoute,
    ImageMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...imageRoute,
    ...imagePopupRoute,
];

@NgModule({
    imports: [
        JHipsterDemoAppSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ImageMySuffixComponent,
        ImageMySuffixDetailComponent,
        ImageMySuffixDialogComponent,
        ImageMySuffixDeleteDialogComponent,
        ImageMySuffixPopupComponent,
        ImageMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ImageMySuffixComponent,
        ImageMySuffixDialogComponent,
        ImageMySuffixPopupComponent,
        ImageMySuffixDeleteDialogComponent,
        ImageMySuffixDeletePopupComponent,
    ],
    providers: [
        ImageMySuffixService,
        ImageMySuffixPopupService,
        ImageMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterDemoAppImageMySuffixModule {}
