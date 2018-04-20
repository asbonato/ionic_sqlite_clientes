import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Cliente } from '../../modelo/cliente';

/**
 * Generated class for the AtualizaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-cliente',
  templateUrl: 'atualiza-cliente.html',
})
export class AtualizaClientePage {
  public cliente: Cliente;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    public toastCtrl: ToastController) {
      this.cliente = this.navParams.data;

  }
  public atualizaCliente() {
    this.clienteProvider.atualizar(this.cliente).
      then(
        () => {
          this.exibirToast("Cliente atualizado com sucesso");
          this.navCtrl.pop();
        }
      );
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizaClientePage');
  }

}
