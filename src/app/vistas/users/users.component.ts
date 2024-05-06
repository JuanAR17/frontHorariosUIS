import { Component } from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  constructor(public upDateValue: FunccompService){}

  hAll= this.upDateValue.hAll;
  hAsign = this.upDateValue.hAsign;
  hGrup = this.upDateValue.hGrup;
  hProf = this.upDateValue.hProf;
  hAul = this.upDateValue.hAul;
  hEdif = this.upDateValue.hEdif;
  hRepo = this.upDateValue.hRepo;
  hGestUser = this.upDateValue.hGestUser;

  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }
}
