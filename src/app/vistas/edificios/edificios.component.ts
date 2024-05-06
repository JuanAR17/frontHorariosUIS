import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrl: './edificios.component.css',

})
export class EdificiosComponent {
  constructor(public upDateValue: FunccompService){}

  hAll= this.upDateValue.hAll;
  hEdif = this.upDateValue.hEdif;

  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
}
