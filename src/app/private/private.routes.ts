import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../shared/layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LanguageListComponent} from './language/language-list/language-list.component';
import {LanguageSingleComponent} from './language/language-single/language-single.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {ProjectSingleComponent} from './project/project-single/project-single.component';
import {LocalizationListComponent} from './localization/localization-list/localization-list.component';
import {LocalizationSingleComponent} from './localization/localization-single/localization-single.component';
import {AppUrl} from '../app-url';

const routes: Routes = [
  {
    path:'',  component: AdminLayoutComponent,
    children: [
      { path: AppUrl.dashboard, component: DashboardComponent },

      { path: AppUrl.projectList, component: ProjectListComponent },
      { path: AppUrl.projectSingle, component: ProjectSingleComponent },

      { path: AppUrl.languageList, component: LanguageListComponent },
      { path: AppUrl.languageSingle, component: LanguageSingleComponent },

      { path: AppUrl.localizationList, component: LocalizationListComponent },
      { path: AppUrl.localizationSingle, component: LocalizationSingleComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutes { }
