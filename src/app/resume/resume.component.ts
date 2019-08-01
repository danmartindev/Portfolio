import { animateChild } from '@angular/animations';
import { Component } from '@angular/core';
import { mainAnim } from '../animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    mainAnim
  ]
})
export class ResumeComponent {

  //current skill chips
  categories = [
    {title:'Code', skills:['JavaScript', 'CSS', 'HTML', 'PHP', 'Swift', 'TypeScript', 'C#', 'Java', 'SASS']},
    {title:'Tools + Environments', skills:['jQuery', 'Angular2+', 'Wordpress', 'MySQL', 'Node', 'Bootstrap','Git', 'XCode', 'Unity', 'AJAX', 'REST APIs', 'JSON', 'Firebase', 'Chrome APIs']},
    {title:'Other Skills', skills:['Photoshop', 'Adobe Illustrator', 'Web Design', 'Game Design', 'Chrome Exstensions']},
  ]

}
