import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrl: './userlog.component.css'
})
export class UserlogComponent {
  constructor(){}

  user = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
}
