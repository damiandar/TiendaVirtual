import { Component } from '@angular/core';
import { faCoffee,faTruck,faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  faTruck=faTruck;
  faHome=faHome;
}
