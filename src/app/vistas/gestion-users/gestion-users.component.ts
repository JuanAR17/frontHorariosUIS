import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.css',
})
export class GestionUsersComponent {
  constructor(public upDateValue: FunccompService){}

  hAll = this.upDateValue.hAll
  hGestUser = this.upDateValue.hGestUser;
  
  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
  
}
