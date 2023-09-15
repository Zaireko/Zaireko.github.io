import { Component, OnInit } from '@angular/core';
import { ScliService } from '../services/scli.service';

@Component({
  selector: 'app-scli',
  templateUrl: './scli.component.html',
  styleUrls: ['./scli.component.css']
})
export class ScliComponent implements OnInit {
  constructor(private scliService: ScliService) {}

  skills: any[] = [];
  certificates: any[] = [];
  interests: any[] = [];

  ngOnInit() {
    this.scliService.getSCLI().subscribe((data: any) => {
      console.log(data);

      this.skills = data.skills;
      this.certificates = data.certificates;
      this.interests = data.interests;
    });
  }
}
