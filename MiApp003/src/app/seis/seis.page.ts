import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre:string;
  apellido:string;
  mensaje : string = "Ud es un super estudiante 2024";
  constructor() { 
    this.nombre = "Juan";
    this.apellido="Fernandez";
  }

  ngOnInit() {
  }

}
