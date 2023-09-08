import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private workexService: WorkExperienceService) { }

  puesto : string = "fake tittle";
  empresa : string = "fake emprise";
  fecha_ini : string = "fake init date";
  fecha_fin : string = "fake end date";
  ciudad : string = "fake city";
  pais : string = "fake country";
  logros: string[] = [];

  ngOnInit() {
    this.workexService.getWE().subscribe((data: any) => {
      console.log(data);
      alert(data);

      this.puesto = data.puesto;
      this.empresa = data.empresa;
      this.fecha_ini = data.fecha_ini;
      this.fecha_fin = data.fecha_fin;
      this.ciudad = data.ciudad;
      this.pais = data.pais;
      this.logros = data.logros;
    });
  }
}
