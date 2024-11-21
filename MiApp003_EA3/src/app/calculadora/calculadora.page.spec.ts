import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { CalculadoraPage } from './calculadora.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


describe('==== prueba al formulario de calculadora:', () => {
  let component: CalculadoraPage;
  let fixture: ComponentFixture<CalculadoraPage>;

  beforeEach(waitForAsync(async()=> {
    await TestBed.configureTestingModule({
    declarations: [CalculadoraPage],
    imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('____Botón sumar', fakeAsync(() => {
    fixture.componentInstance.n1 = 10;
    fixture.componentInstance.n2 = 15;

    document.getElementById("btnSumar")?.click();
    fixture.detectChanges();
    tick();

    const resultado = (<HTMLInputElement>document.getElementById('resultado')).value;
    expect(resultado).toContain('25');
  }));
});
