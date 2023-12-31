import { Component, Input, OnInit } from '@angular/core';
import { RealEstate } from '../model/real-estate';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.css'],
})
export class RealEstateCardComponent implements OnInit {
  @Input() realEstates: RealEstate[] = []; // Accept input from parent component

  constructor() {}

  ngOnInit(): void {
    // Additional initialization if needed
  }
}
