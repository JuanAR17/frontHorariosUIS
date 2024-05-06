import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css',
})
export class GruposComponent {
  constructor(public upDateValue: FunccompService){}

  hAll= this.upDateValue.hAll;
  hGrup = this.upDateValue.hGrup;

  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
}
