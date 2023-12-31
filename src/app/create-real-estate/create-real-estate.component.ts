import { Component, EventEmitter, Output } from '@angular/core';
import { RealEstate } from '../model/real-estate';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-create-real-estate',
  templateUrl: './create-real-estate.component.html',
  styleUrls: ['./create-real-estate.component.css'],
})
export class CreateRealEstateComponent {
  realEstate: RealEstate = new RealEstate('', '', 0, '');
  @Output() realEstateAdded = new EventEmitter<RealEstate>();

  constructor(private realEstateService: RealEstateService) {}

  submit() {
    this.realEstateService.addRealEstate(this.realEstate).subscribe({
      next: (newRealEstate) => {
        this.realEstateAdded.emit(newRealEstate);
        this.realEstate = new RealEstate('', '', 0, ''); // Reset the form
      },
      error: (error) => {
        console.error('Error adding real estate:', error);
      },
    });
  }
}
