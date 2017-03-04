import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public titleGraffic;

public timeLeft: number = 100;

  constructor(public navCtrl: NavController) {
    
    this.titleGraffic = "Ações Gerais";

    this.lineChartLabels = this.getListHours();
    
    this.lineChartData = this.getDataValues();

    this.timerGrafic();
  }

  public getListHours()
  {
    var dt = new Date();

    var hour = dt.getHours();
    
    return  [
           (hour-4).toString() + ':00',
          (hour-3).toString() + ':00',
          (hour-2).toString() + ':00', 
          (hour-1).toString() + ':00', 
          hour.toString() + ':00', 
          (hour+1).toString() + ':00'
          ];      
  }

public getDataValues()
{
   return [
    {data: [11.23, 10.23, 20.23, 25.12, 26], label: 'Empresa A'},
    {data: [25.26, 25.26, 29.50, 36.20, 35.50], label: 'Empresa B'},
    {data: [25.26, 22.42, 23.12, 20.21, 22.40], label: 'Empresa C'}
  ];

}

public timerGrafic():void
{
      
var timer = setInterval(() => {
  if(this.timeLeft != 0) {
    this.timeLeft -=  1;
    
    this.randomize();


  } else {
    clearInterval(timer);
  }
 }, 3600);

}
 
  public randomize():void {
    
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    }

    _lineChartData[0].data[0] = this.lineChartData[0].data[1];
    _lineChartData[0].data[1] = this.lineChartData[0].data[2]; 
    _lineChartData[0].data[2] = this.lineChartData[0].data[3]; 
    _lineChartData[0].data[3] = this.lineChartData[0].data[4];
    _lineChartData[0].data[4] = Math.floor(Math.random()*(30-15+1)+15);

     _lineChartData[1].data[0] = this.lineChartData[1].data[1];
    _lineChartData[1].data[1] = this.lineChartData[1].data[2]; 
    _lineChartData[1].data[2] = this.lineChartData[1].data[3]; 
    _lineChartData[1].data[3] = this.lineChartData[1].data[4];
    _lineChartData[1].data[4] =  Math.floor(Math.random()*(40-25+1)+25);


     _lineChartData[2].data[0] = this.lineChartData[2].data[1];
    _lineChartData[2].data[1] = this.lineChartData[2].data[2]; 
    _lineChartData[2].data[2] = this.lineChartData[2].data[3]; 
    _lineChartData[2].data[3] = this.lineChartData[2].data[4];
    _lineChartData[2].data[4] =  Math.floor(Math.random()*(30-25+1)+25);


  
    this.lineChartData = _lineChartData;
   
    // for (let i = 0; i < this.lineChartData.length; i++) {
      
    //   // _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    //   // for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //   //   _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //   // }
    // }
    
  }


   // lineChart
  public lineChartData:Array<any>;  
  public lineChartLabels:Array<any>; 
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#B0EEA4',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: '#D03C3C',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#789AD4',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
