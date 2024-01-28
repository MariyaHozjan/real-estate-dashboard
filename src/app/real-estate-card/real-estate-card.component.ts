import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RealEstate } from '../model/real-estate';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.css'],
})
export class RealEstateCardComponent implements OnInit {
  @Input() realEstates: RealEstate[] = []; // Accept input from parent component
  @Output() deleteRequest = new EventEmitter<number>();
  @Output() editRequest = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    // Additional initialization if needed
  }

  onDelete(id: number | null): void {
    if (id !== null) {
      this.deleteRequest.emit(id);
    }
  }

  onEdit(id: number | null): void {
    if (id !== null) {
      this.editRequest.emit(id);
    }
  }
}
