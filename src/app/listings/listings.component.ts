// listings.component.ts
import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../real-estate.service';
import { RealEstate } from '../model/real-estate';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {
  realEstates: RealEstate[] = [];

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.fetchRealEstates();
  }

  fetchRealEstates(): void {
    this.realEstateService.getRealEstates().subscribe((data) => {
      this.realEstates = data;
    });
  }
}
