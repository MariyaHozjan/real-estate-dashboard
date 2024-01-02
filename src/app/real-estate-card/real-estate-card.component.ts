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
  @Output() editRequest = new EventEmitter<{
    estate: RealEstate;
    index: number;
  }>();

  constructor() {}

  ngOnInit(): void {
    // Additional initialization if needed
  }

  onDelete(index: number): void {
    this.deleteRequest.emit(index);
  }

  onEdit(estate: RealEstate, index: number): void {
    this.editRequest.emit({ estate, index });
  }
}
