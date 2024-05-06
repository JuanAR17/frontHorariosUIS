import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunccompService {

  constructor() { }

  public hAll = {value: false};
  public hAsign = {value: true};
  public hGrup = {value: true};
  public hProf = {value: true};
  public hAul = {value: true};
  public hEdif = {value: true};
  public hRepo = {value: true};
  public hGestUser = {value: true};

  upDateBoolValue = (varhidden: string) => {
    switch (varhidden) {
      case 'hAll':
        this.hAll.value = !this.hAll.value;
        break;
      case 'hAsign':
        this.hAsign.value = !this.hAsign.value;
        break;
      case 'hGrup':
        this.hGrup.value = !this.hGrup.value;
        break;
      case 'hProf':
        this.hProf.value = !this.hProf.value;
        break;
      case 'hAul':
        this.hAul.value = !this.hAul.value;
        break;
      case 'hEdif':
        this.hEdif.value = !this.hEdif.value;
        break;
      case 'hRepo':
        this.hRepo.value = !this.hRepo.value;
        break;
      case 'hGestUser':
        this.hGestUser.value = !this.hGestUser.value;
        break;
    }
  }

}
