import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeClientesPage } from './exibe-clientes';

@NgModule({
  declarations: [
    ExibeClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeClientesPage),
  ],
})
export class ExibeClientesPageModule {}
