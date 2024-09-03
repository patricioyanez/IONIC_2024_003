import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  boton = ['Aceptar'];
  numero : number;
  numero2: number = 100;

  asignaturas = [
    {nombre : 'PGY4121', nota : 35.6},
    {nombre : 'MDY3121', nota : 45 },
    {nombre : 'BDD2111', nota : 70 }
  ];

  constructor(private alertController: AlertController) {
    this.numero = 0;
    console.log(asignaturas);

   }

  ngOnInit() {
  }
  async funcionAlerta()
  {
    const alerta = await this.alertController.create({
      header:"Alerta usando AlertController",
      subHeader:"Subtitulo",
      message:"Ejemplo de como crear un mensaje de alerta usando AlertController de Angular",
      buttons: ['Ok']
    });
    
    await alerta.present();
  }
  incrementar(){
    //this.numero += 1;
    this.numero++;
  }
  decrementar(){
    //this.numero += 1;
    this.numero--;
  }
}
