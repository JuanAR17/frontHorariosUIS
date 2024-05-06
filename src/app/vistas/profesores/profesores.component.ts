import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css',

})
export class ProfesoresComponent {
  constructor(public upDateValue: FunccompService){}

  hAll= this.upDateValue.hAll;
  hProf = this.upDateValue.hProf;

  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
}
