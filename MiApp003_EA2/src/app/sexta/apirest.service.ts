/**
 * importar el modulo
 * HttpClientModule en el archivo app.module.ts
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBase = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient:HttpClient) { }

  async getUsers()
  {
    const ruta = this.urlBase + 'users';
    return await firstValueFrom(this.httpClient.get(ruta));
  }
  async getPostsByIdUser(id:string)
  {
    const ruta = this.urlBase + '/users/' + id + '/posts';
    return await firstValueFrom(this.httpClient.get(ruta));
  }
}
