import { Component } from '@angular/core';
import { RealEstate } from './model/real-estate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Real Estate Dashboard';

  createRealEstate(realEstate: RealEstate) {
    // Handle new real estate creation
    console.log(realEstate);
  }
}
