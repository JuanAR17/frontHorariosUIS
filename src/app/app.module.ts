import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlogComponent } from './vistas/userlog/userlog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignaturasComponent } from './vistas/asignaturas/asignaturas.component';
import { UsersComponent } from './vistas/users/users.component';
import { GruposComponent } from './vistas/grupos/grupos.component';
import { ProfesoresComponent } from './vistas/profesores/profesores.component';
import { AulasComponent } from './vistas/aulas/aulas.component';
import { EdificiosComponent } from './vistas/edificios/edificios.component';
import { ReportesComponent } from './vistas/reportes/reportes.component';
import { GestionUsersComponent } from './vistas/gestion-users/gestion-users.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserlogComponent,
    AsignaturasComponent,
    UsersComponent,
    GruposComponent,
    ProfesoresComponent,
    AulasComponent,
    EdificiosComponent,
    ReportesComponent,
    GestionUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
