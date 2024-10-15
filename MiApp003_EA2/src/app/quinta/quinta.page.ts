import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  personas:any = [];

  constructor(private crudService:CrudService,
    private alertController: AlertController,
    private toastController: ToastController
) { }

  ngOnInit() {
  }
  guardar()
  {    
    // Ejercicio 22: validar que los datos no esten en blanco 
    // alertController (error) y toast (guardado)
    if(this.persona.rut == null)
    {
      this.mensajeError('Falta especificar el rut');
    }
    else if (this.persona.nombre == null)
    {
      this.mensajeError('falta especificar el nombre');
    }
    else
    {
      this.crudService.guardar(this.persona.rut, this.persona);
      this.limpiar();
    }
  }
  async leer()
  {
    this.persona = await this.crudService.leer(this.persona.rut);
  }
  limpiar()
  {
    this.persona = [];
    this.personas = [];
    const input = document.querySelector('ion-input');
    if(input != null)
      input.setFocus();
  }
  async eliminar()
  {
    this.crudService.eliminar(this.persona.rut);
    this.limpiar();
  }
  async listar()
  {
    this.personas = await this.crudService.listar();
  }
  async mensajeError(mensaje:string)
  {
    const alerta = await this.alertController.create({
      header    : "Error",
      subHeader : "Mensaje del error",
      message   : mensaje,
      buttons   : ['Aceptar']
    });
    await alerta.present();
  }
}
