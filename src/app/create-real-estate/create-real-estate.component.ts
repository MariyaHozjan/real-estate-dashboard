import { Component, EventEmitter, Output } from '@angular/core';
import { RealEstate } from '../model/real-estate';

@Component({
  selector: 'app-create-real-estate',
  templateUrl: './create-real-estate.component.html',
  styleUrls: ['./create-real-estate.component.css'],
})
export class CreateRealEstateComponent {
  realEstate: RealEstate = new RealEstate('', '', 0, '');
  @Output() realEstateEmitter = new EventEmitter<RealEstate>();

  submit() {
    this.realEstateEmitter.emit(this.realEstate);
    this.realEstate = new RealEstate('', '', 0, ''); // Reset form
  }
}
