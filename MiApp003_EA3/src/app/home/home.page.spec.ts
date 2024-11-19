import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('home, archivo ts: ',() =>{
  let component: HomePage;
  beforeEach(waitForAsync(()=> {
    component = new HomePage();
  }))

  it('suma de 2 numeros positivos', () =>{
    expect(component.sumar(1,1)).toEqual(2);
  });
  
  it('suma de 2 numeros, 1 es negativo', () =>{
    expect(component.sumar(-1,1)).toEqual(0);
  });
  
  it('suma de 2 numeros, ambos son negativos', () =>{
    expect(component.sumar(-1,-10)).toBeLessThanOrEqual(0);
  });

  it('división de 2 numeros positivos', () =>{
    expect(component.dividir(4,2)).toEqual(2);
  });
  it('división por cero', () =>{
    expect(component.dividir(4,0)).toEqual(0);
  });
  
  
})
