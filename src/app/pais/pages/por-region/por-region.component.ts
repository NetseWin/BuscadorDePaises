import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string){
     return (this.regionActiva === region) 
    ? 'btn btn-primary me-1' 
    : 'btn btn-outline-primary me-1'
  }

  activaRegion(region: string){

    if(this.regionActiva === region) return;

    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscaPorRegion(region)
    .subscribe(paises => {
      this.paises = paises;
    })
  }

}
