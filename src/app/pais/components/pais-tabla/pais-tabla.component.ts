import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    img {
      width: 70px;
    }
  `
  ]
})
export class PaisTablaComponent  {
  @Input()
  paises:Country[]= [];

}
