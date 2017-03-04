import { Component } from '@angular/core';
import { ModalController, AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-acoes',
  templateUrl: 'acoes.html'
})
export class AcoesPage {

    public pagina_acoes;
  public titleGraffic;

  listAcoes: any;

  constructor(
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    
  ) {
    this.titleGraffic = "Tipos de ações"
    this.pagina_acoes = "Página de Ações";
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['ON', 'PN', 'Outras'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}