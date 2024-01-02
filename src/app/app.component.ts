import { Component } from '@angular/core';
import { RealEstate } from './model/real-estate';
import { RealEstateService } from './real-estate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  realEstates: RealEstate[] = [];
  selectedRealEstate: RealEstate | null = null;
  editingIndex: number | null = null;

  constructor(private realEstateService: RealEstateService) {}

  onRealEstateAdded(newRealEstate: RealEstate) {
    this.realEstates.push(newRealEstate);
  }

  onDeleteRealEstate(index: number): void {
    this.realEstateService.deleteRealEstate(index).subscribe({
      next: () => {
        this.realEstates.splice(index, 1);
      },
      error: (error) => {
        console.error('Error deleting real estate:', error);
      },
    });
  }

  onEditRealEstate(event: { estate: RealEstate; index: number }): void {
    this.selectedRealEstate = { ...event.estate };
    this.editingIndex = event.index;
  }

  onRealEstateUpdated(updatedEstate: RealEstate): void {
    if (this.editingIndex !== null) {
      this.realEstates[this.editingIndex] = updatedEstate;
      this.selectedRealEstate = null;
      this.editingIndex = null;
    }
  }
}
