import { Component, OnInit} from '@angular/core';
import { FunccompService } from '../../servicios/funccomp.service';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css',
})
export class AsignaturasComponent implements OnInit{
  constructor(public upDateValue: FunccompService, private dataService: ApiService){}

  data:any[] = [];

  hAll= this.upDateValue.hAll;
  hAsign = this.upDateValue.hAsign;


  upValue(varName1:string, varName2:string){
    this.upDateValue.upDateBoolValue(varName1)
    this.upDateValue.upDateBoolValue(varName2)
  }

  ingresarDatosAsign(){
    this.dataService.getDataAsign().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit(): void{
    this.ingresarDatosAsign()
  }
  
  deleteDataId(id: number): void {
    this.dataService.delAsignId(id).subscribe({
      next: () => {
        this.data = this.data.filter(n => n.idAsignatura !== id);},
      error: (err:any) => {
        console.error('Error al eliminar la asignatura:', err)
      }
    });
  }

}
