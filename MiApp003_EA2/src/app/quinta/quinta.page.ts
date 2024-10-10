import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }
  guardar()
  {
    this.crudService.guardar(this.persona.rut, this.persona);
  }
  async leer()
  {
    this.persona = await this.crudService.leer(this.persona.rut);
  }
}
