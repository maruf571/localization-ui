import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutModule} from '../shared/layout/layout.module';
import {LanguageListComponent} from './language/language-list/language-list.component';
import {LanguageSingleComponent} from './language/language-single/language-single.component';
import {LocalizationListComponent} from './localization/localization-list/localization-list.component';
import {LocalizationSingleComponent} from './localization/localization-single/localization-single.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {ProjectSingleComponent} from './project/project-single/project-single.component';
import {PrivateRoutes} from './private.routes';
import {LanguageService} from '../shared/service/language.service';
import {ProjectService} from '../shared/service/project.service';
import {AuthService} from '../shared/service/auth.service';
import {LocalizationService} from '../shared/service/localization.service';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutes,
    LayoutModule
  ],
  declarations: [
    DashboardComponent,

    ProjectListComponent,
    ProjectSingleComponent,

    LanguageListComponent,
    LanguageSingleComponent,

    LocalizationListComponent,
    LocalizationSingleComponent,

  ],
  providers: [
    AuthService,
    ProjectService,
    LanguageService,
    LocalizationService,
  ],
  exports: [
  ]
})
export class PrivateModule { }
