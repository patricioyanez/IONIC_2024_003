import { Component, OnInit } from '@angular/core';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {
  listado:any=[];
  constructor(private apirestService:ApirestService) { }

  ngOnInit() {
    this.listar();
  }
  async listar()
  {
  /* Ejercicio 26: mostrar la información de los usuarios en la pagina sexta  
  id, nombre y nombre de usuario.
  list e Item
*/
    this.listado = await this.apirestService.getUsers();
  }
}
