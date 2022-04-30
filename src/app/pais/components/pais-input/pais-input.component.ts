import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino: string = '';

  @Input()
  placeholder:string = '';

  @Output()
  onEnter:EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter();

  //la idea con el debouncer es que se emita cuando yo deje de escribir.
  debouncer: Subject<string> = new Subject();

  //se dispara una unica vez, cuando el componente es creado y ya esta inicializado.
  ngOnInit(){
   this.debouncer
   .pipe(
     debounceTime(1000)
   )
   .subscribe( valor => {
     this.onDebounce.emit(valor);
   });
  }
  

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
