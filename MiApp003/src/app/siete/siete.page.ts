import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  nombre = 'Ana';
  apellido : string;
  n1='';
  n2='';
  resultado : any;
  constructor(private toastController:ToastController) { 
    this.apellido = 'Perez';
  }

  ngOnInit() {
  }
  async sumar()
  {
    if(!this.n1 || !this.n2)
    {
      const toast = await this.toastController.create({
        message : 'Debe ingresar un número válido',
        duration: 3000,
        position: 'top',
        color   : 'danger'
      });
      await toast.present();
      return;
    }

    this.resultado=this.n1+this.n2;
    const toast = await this.toastController.create({
      message : 'El resultado es ' + this.resultado,
      duration: 3000,
      position: 'top',
      color   : 'primary'
    });
    await toast.present();
  }
}
