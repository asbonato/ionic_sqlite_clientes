import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SQLite} from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { ClienteProvider } from '../providers/cliente/cliente';
import { ExibeClientesPage } from '../pages/exibe-clientes/exibe-clientes';
import { AdicionaClientePage } from '../pages/adiciona-cliente/adiciona-cliente';
import { AtualizaClientePage } from '../pages/atualiza-cliente/atualiza-cliente';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionaClientePage,
    ExibeClientesPage,
    AtualizaClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionaClientePage,
    ExibeClientesPage,
    AtualizaClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    ClienteProvider
  ]
})
export class AppModule {}
