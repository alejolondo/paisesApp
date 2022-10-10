import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../intefaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {

  termino: string = "Hola Mundo"
  hayError: boolean = false;
  paises: Country[] = []

  constructor(private PaisService: PaisService) { }
  
  buscar(){
    
    console.log(this.termino)

    this.PaisService.buscarPais(this.termino)
    .subscribe(pais => { 
      console.log(pais)
      this.hayError = false;
      this.paises = pais

    }, (err) => {
     this.hayError = true;
     this.paises = []
    });

  }
  

}
