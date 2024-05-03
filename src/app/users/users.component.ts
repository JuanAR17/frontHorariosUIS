import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(){}

  hAll = {value: false};
  hAsign = {value: true};
  hGrup = {value: true};
  hProf = {value: true};
  hAul = {value: true};
  hEdif= {value: true};
  hRepo = {value: true};
  hGestUser = {value: true};

  showCompOrALL = (all:{ value: boolean }, comp: { value: boolean }) => {
    all.value = !all.value
    comp.value = !comp.value
  }
}
