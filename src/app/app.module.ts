/*
Vendors
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

/* maybe a locale support */
//import ptBr from '@angular/common/locales/pt';
//registerLocaleData(ptBr)

import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { DeviceDetectorModule } from 'ngx-device-detector';
/*
Packed
*/
import { MaterialPackModule } from './z_packs/material-pack.module'
import { CustomRouterStateSerializer } from './shared/utils';
import { reducers, metaReducers } from './reducers';
import { routes } from './routes';

/*
Effects
*/

/*
Services
*/
import { ScreenService } from './services/screen.service';

/*
Pages And Views
*/

import { environment } from '../environments/environment';

/*
App Components Views, Components Pages and Pipes
*/
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page.component';
import { HomeViewComponent } from './view/home-view.component';
import { DebugPageComponent } from './page/debug-page.component';
import { DebugScreenPageComponent } from './page/debug-screen-page.component';
import { DateListPageComponent } from './page/date-list-page.component';
import { DateListViewComponent } from './view/date-list-view.component';
import { DatePageComponent } from './page/date-page.component';
import { DateViewComponent } from './view/date-view.component';
import { NumberpadPipe } from './pipes/numberpad.pipe';

@NgModule({
  imports: [
    /*
    Vendors
    */
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    /*
    NGRX Stuff Order is Important!
    */
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ name: 'JobTest Devtools', logOnly: environment.production }),
    EffectsModule.forRoot([
      /*
      Effects Declaration
      */
    ]),
    /*
    Packed
    */
    MaterialPackModule,
  ],
  providers: [
    /*
    Vendor and Packed
    */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    //{ provide: LOCALE_ID, useValue: 'pt' },
    /*
    Services Declaration
    */
    ScreenService,
  ],
  declarations: [
    /*
    App Components Views, Components Pages, and Pipes Declaration
    */
    AppComponent,
    HomePageComponent,
    HomeViewComponent,
    DebugPageComponent,
    DebugScreenPageComponent,
    DateListPageComponent,
    DateListViewComponent,
    DatePageComponent,
    DateViewComponent,
    NumberpadPipe,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
