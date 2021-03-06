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
import { DayEffects } from './effects/day';

/*
Services
*/
import { ScreenService } from './services/screen.service';
import { WebService } from './services/web.service';
import { TestServerService } from './services/test-server.service';
import { DaysService } from './services/days.service';

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
import { DebugScreenViewComponent } from './view/debug-screen-view.component';
import { ScrollPageComponent } from './page/scroll-page.component';
import { ScrollViewComponent } from './view/scroll-view.component';
import { DateListPageComponent } from './page/date-list-page.component';
import { DateListViewComponent } from './view/date-list-view.component';
import { DatePageComponent } from './page/date-page.component';
import { DateViewComponent } from './view/date-view.component';
import { NumberpadPipe } from './pipes/numberpad.pipe';
import { StatusPageComponent } from './page/status-page.component';
import { StatusViewComponent } from './view/status-view.component';
import { DateDetailsPageComponent } from './page/date-details-page.component';
import { DateDetailsViewComponent } from './view/date-details-view.component';
import { MultiplePageComponent } from './page/multiple-page.component';
import { MultipleViewComponent } from './view/multiple-view.component';
import { SelectLocationPageComponent } from './page/select-location-page.component';
import { SelectLocationViewComponent } from './view/select-location-view.component';

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
      DayEffects,
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
    WebService,
    TestServerService,
    DaysService,
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
    DebugScreenViewComponent,
    ScrollPageComponent,
    ScrollViewComponent,
    DateListPageComponent,
    DateListViewComponent,
    DatePageComponent,
    DateViewComponent,
    NumberpadPipe,
    StatusPageComponent,
    StatusViewComponent,
    DateDetailsPageComponent,
    DateDetailsViewComponent,
    MultiplePageComponent,
    MultipleViewComponent,
    SelectLocationPageComponent,
    SelectLocationViewComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
