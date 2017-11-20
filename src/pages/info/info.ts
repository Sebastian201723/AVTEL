import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from '../../providers/pedido-data/pedido';
import {DisponibleDataProvider} from '../../providers/pedido-data/disponible-data'


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {


  objDisponibles:Item[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DisponibleDataProvider) {
    this.objDisponibles=service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  openItem(item: Item) {
    
    
  }
}
