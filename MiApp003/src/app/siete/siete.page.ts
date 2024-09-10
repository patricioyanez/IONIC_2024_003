import { Component, OnInit } from '@angular/core';

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
  constructor() { 
    this.apellido = 'Perez';
  }

  ngOnInit() {
  }
  sumar()
  {
    this.resultado=this.n1+this.n2;
  }
}
