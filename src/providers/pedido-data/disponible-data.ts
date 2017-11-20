import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Item} from './pedido';


@Injectable()
export class DisponibleDataProvider {
    dispobj:Item;
    data:Item[]= [
        { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad:20, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario:'' },
        { nombre: 'Cable Ethernet', descripcion: 'Cable de conexión ethernet', cantidad:50, imagen: 'http://cuantocuesta.info/wp-content/uploads/2016/07/ethernet-1-1024x663.jpg', usuario:'' },
        { nombre: 'Raspberry Pi', descripcion: 'Placa microcontrolada', cantidad:3, imagen: 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-1-1619x1080.jpg', usuario:'' },
        { nombre: 'Placa FPGA', descripcion: 'Dispositivo programable', cantidad:15, imagen: 'http://img.yunqudao.com/UploadFolder/4f2543ab-bfc8-48f0-9aff-c49e51612b75/Default/s-l1600__1__387.jpg', usuario:'' },
        
      ];

    constructor(){}
}