import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private workexService: WorkExperienceService) { }

  experiences: any[] = [];

  ngOnInit() {
    this.workexService.getWE().subscribe((data: any[]) => {
      console.log(data);

      // Asigna los valores obtenidos desde el backend a la propiedad experiences
      this.experiences = data;
    });
  }
}
