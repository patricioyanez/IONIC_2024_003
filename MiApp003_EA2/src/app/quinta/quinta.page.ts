import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  personas:any = [];
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }
  guardar()
  {    
    // Ejercicio 22: validar que los datos no esten en blanco 
    // alertController (error) y toast (guardado)
    this.crudService.guardar(this.persona.rut, this.persona);
    this.limpiar();
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
}
