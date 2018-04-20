import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionaClientePage } from '../adiciona-cliente/adiciona-cliente';
import { ExibeClientesPage } from '../exibe-clientes/exibe-clientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  cadastrarCliente (){
    this.navCtrl.push(AdicionaClientePage);
  }

  exibirClientes (){
    this.navCtrl.push(ExibeClientesPage);
    }
    

}
