import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppUrl} from './app-url';

const appRoutes: Routes = [
  { path: AppUrl.public, redirectTo: AppUrl.home, pathMatch: 'full' },
  { path: AppUrl.auth, loadChildren: './auth/auth.module#AuthModule' },
  { path: AppUrl.private, loadChildren: './private/private.module#PrivateModule' },
  { path: AppUrl.home, loadChildren: './public/public.module#PublicModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRouteModule {
}
