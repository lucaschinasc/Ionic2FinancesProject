import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {  } from 'fusioncharts';

import { HomePage } from '../pages/home/home';
import { AcoesPage } from '../pages/acoes/acoes';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  
  home = HomePage;
  acoes = AcoesPage

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(opcao) {
    this.rootPage = opcao;
  }
}
