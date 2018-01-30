import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterDemoAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JHipsterDemoAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JHipsterDemoAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JHipsterDemoAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JHipsterDemoAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JHipsterDemoAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JHipsterDemoAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JHipsterDemoAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JHipsterDemoAppRegionMySuffixModule,
        JHipsterDemoAppCountryMySuffixModule,
        JHipsterDemoAppLocationMySuffixModule,
        JHipsterDemoAppDepartmentMySuffixModule,
        JHipsterDemoAppTaskMySuffixModule,
        JHipsterDemoAppEmployeeMySuffixModule,
        JHipsterDemoAppJobMySuffixModule,
        JHipsterDemoAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterDemoAppEntityModule {}
