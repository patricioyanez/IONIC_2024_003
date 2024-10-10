import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  async guardar(id:string, valor:any )
  {
    localStorage.setItem(id, valor);
  }
  async leer(id: string)
  {
    return localStorage.getItem(id);
  }
  async eliminar(id: string)
  {
    return localStorage.removeItem(id);
  }
  async listar()
  {
    
  }
}
