import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../model/real-estate';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-edit-real-estates',
  templateUrl: './edit-real-estates.component.html',
  styleUrls: ['./edit-real-estates.component.css'],
})
export class EditRealEstatesComponent implements OnInit {
  realEstates: RealEstate[] = [];
  selectedRealEstate: RealEstate | null = null;
  editingIndex: number | null = null;

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.fetchRealEstates();
  }

  fetchRealEstates(): void {
    this.realEstateService.getRealEstates().subscribe((data) => {
      this.realEstates = data;
    });
  }

  onRealEstateAdded(newRealEstate: RealEstate): void {
    console.log('Attempting to add real estate:', newRealEstate);
    this.realEstateService.addRealEstate(newRealEstate).subscribe({
      next: (addedEstate) => {
        this.realEstates.push(addedEstate);
      },
      error: (error) => {
        console.error('Error adding real estate:', error);
      },
    });
  }

  onDeleteRealEstate(id: number): void {
    console.log('Attempting to delete real estate with id:', id);
    this.realEstateService.deleteRealEstate(id).subscribe({
      next: () => {
        this.realEstates = this.realEstates.filter(
          (estate) => estate.id !== id
        );
      },
      error: (error) => {
        console.error('Error deleting real estate:', error);
      },
    });
  }

  onEditRealEstate(id: number): void {
    const estate = this.realEstates.find((estate) => estate.id === id);
    if (estate) {
      this.selectedRealEstate = { ...estate };
    }
  }

  onRealEstateUpdated(updatedEstate: RealEstate): void {
    this.realEstateService
      .updateRealEstate(updatedEstate.id, updatedEstate)
      .subscribe({
        next: (updatedRealEstate) => {
          const index = this.realEstates.findIndex(
            (estate) => estate.id === updatedEstate.id
          );
          if (index !== -1) {
            this.realEstates[index] = updatedRealEstate;
          }
        },
        error: (error) => {
          console.error('Error updating real estate:', error);
        },
      });
  }
}
