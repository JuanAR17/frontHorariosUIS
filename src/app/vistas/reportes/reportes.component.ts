import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  constructor(public upDateValue: FunccompService){}

  hAll= this.upDateValue.hAll;
  hRepo = this.upDateValue.hRepo;

  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
}
