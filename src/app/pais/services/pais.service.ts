import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';



  constructor(private http: HttpClient) { }

  
  buscarPais(termino: string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`);

  }
  buscarCapital(termino: string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`);

  }
  buscarPaisId(id: string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/alpha?codes=${id}`);

  }
  buscaPorRegion(region: string):Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`);

  }

  


}
