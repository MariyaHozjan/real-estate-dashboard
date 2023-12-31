import { Component } from '@angular/core';
import { RealEstate } from './model/real-estate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  realEstates: RealEstate[] = [];

  onRealEstateAdded(newRealEstate: RealEstate) {
    this.realEstates.push(newRealEstate);
  }
}
