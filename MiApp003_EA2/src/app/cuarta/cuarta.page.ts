import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id: string = '';
  nombre: string = '';
  constructor() { }

  ngOnInit() {
    localStorage.setItem('1', "Juan");
  }
// 
/**
 * Ejercicio 19: Crear un formulario con text para
 * codigo y nombre y almecenar en el localstorage
 */
guardar()
{
  if(this.id != "" && this.nombre != "")
  {
    localStorage.setItem(this.id, this.nombre);
    this.id = this.nombre = '';
  }  
}
/*
  Como almacenar nombre y clave en el localstorage
*/
}
