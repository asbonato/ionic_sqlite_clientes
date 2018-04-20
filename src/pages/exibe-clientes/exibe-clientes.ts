import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Cliente } from '../../modelo/cliente';
import { AtualizaClientePage } from '../atualiza-cliente/atualiza-cliente';

/**
 * Generated class for the ExibeClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-clientes',
  templateUrl: 'exibe-clientes.html',
})
export class ExibeClientesPage {
  public clientes: Cliente[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    private toastCtrl: ToastController) {
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }


  apagaCliente(cliente: Cliente) {
    this.clienteProvider.apagar(cliente);
    this.exibirToast("Cliente apagado com sucesso");
    //para atualizar alista que está sendo exibida
    this.clienteProvider.listar().
      then((clientes: Cliente[]) => {
        this.clientes = clientes;
      });
  }

  atualizaCliente (cliente: Cliente){
    this.navCtrl.push(AtualizaClientePage, cliente);
    }
    

  ionViewDidLoad() {
    this.clienteProvider.listar().
      then((clientes: Cliente[]) => {
        this.clientes = clientes;
      });
  }

}

