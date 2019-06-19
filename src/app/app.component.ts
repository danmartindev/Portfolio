import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routingAnims } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    routingAnims
  ]
})
export class AppComponent {
  title = 'Portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
