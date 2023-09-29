import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private skillsService : SkillsService) {}

  skills : any[] = [];

  ngOnInit() {
    this.skillsService.getSkills().subscribe((data : any) => {
      console.log(data);

      this.skills = data.skills;
    });
  }
}
