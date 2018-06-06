import { Routes } from '@angular/router';
//import { AuthGuard } from './auth/services/auth-guard.service';

import { HomePageComponent } from './page/home-page.component';
import { DebugPageComponent } from './page/debug-page.component';
import { DebugScreenPageComponent } from './page/debug-screen-page.component';
//import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'debug', component: DebugPageComponent,
  	children: [
      { path: 'screen', component: DebugScreenPageComponent },
    ]
  },
  /*{ path: '**', component: NotFoundPageComponent },*/
];
