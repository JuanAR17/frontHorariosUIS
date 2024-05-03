import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlogComponent } from './userlog/userlog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { UsersComponent } from './users/users.component';
import { GruposComponent } from './grupos/grupos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AulasComponent } from './aulas/aulas.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';

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
