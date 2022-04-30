import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService){}

  ngOnInit(): void {
  }
  buscar(termino:string){

    this.hayError = false;
    this.termino = termino;
     this.paisService.buscarCapital(termino)
     .subscribe( paises => {
       this.paises = paises;
       console.log(this.paises);
     }, (err) => {
       this.hayError = true;
       this.paises = [];
     });
  }

}
