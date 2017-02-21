import { Component } from '@angular/core';
import { ModalController, AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-acoes',
  templateUrl: 'acoes.html'
})
export class AcoesPage {

    public pagina_acoes;


  listAcoes: any;

  constructor(
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    
  ) {

    this.pagina_acoes = "Página de Ações";
  }

  

}