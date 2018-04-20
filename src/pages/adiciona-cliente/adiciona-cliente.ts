import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';

/**
 * Generated class for the AdicionaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
})
export class AdicionaClientePage {
  public cliente: Cliente;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    private toastCtrl: ToastController) {
    this.cliente = new Cliente();
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }
  cadastraCliente() {
    this.clienteProvider.inserir(this.cliente);
    this.exibirToast("Cliente cadastrado com sucesso.");
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }

}
