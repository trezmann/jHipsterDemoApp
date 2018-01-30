import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JHipsterDemoAppSharedModule, UserRouteAccessService } from './shared';
import { JHipsterDemoAppAppRoutingModule} from './app-routing.module';
import { JHipsterDemoAppHomeModule } from './home/home.module';
import { JHipsterDemoAppAdminModule } from './admin/admin.module';
import { JHipsterDemoAppAccountModule } from './account/account.module';
import { JHipsterDemoAppEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JHipsterDemoAppAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JHipsterDemoAppSharedModule,
        JHipsterDemoAppHomeModule,
        JHipsterDemoAppAdminModule,
        JHipsterDemoAppAccountModule,
        JHipsterDemoAppEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JHipsterDemoAppAppModule {}
