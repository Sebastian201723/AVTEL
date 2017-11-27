import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs'
import { PrincipalPage } from '../pages/principal/principal';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { InfoPage } from '../pages/info/info';
//import {SearchPage} from '../pages/search/search';
//import {ItemDetailPage} from '../pages/item-detail/item-detail';
import { PedidoDataProvider } from '../providers/pedido-data/pedido-data';
import { DisponibleDataProvider } from '../providers/pedido-data/disponible-data';
import { PrestadoDataProvider } from '../providers/pedido-data/prestado-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PrincipalPage,
    PedidosPage,
    InfoPage,
    //SearchPage,
    //ItemDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    InfoPage,
    PedidosPage,
    PrincipalPage,
    //ItemDetailPage,
    //SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidoDataProvider,
    DisponibleDataProvider,
    PrestadoDataProvider,
  ]
})
export class AppModule {}
