import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlogComponent } from './userlog/userlog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { UsersComponent } from './users/users.component';
import { GruposComponent } from './grupos/grupos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlogComponent,
    AsignaturasComponent,
    UsersComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
