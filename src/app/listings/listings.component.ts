// listings.component.ts
import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../real-estate.service';
import { RealEstate } from '../model/real-estate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {
  realEstates: RealEstate[] = [];

  constructor(
    private realEstateService: RealEstateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchRealEstates();
  }

  fetchRealEstates(): void {
    this.realEstateService.getRealEstates().subscribe((data) => {
      this.realEstates = data;
    });
  }

  navigateToEdit(): void {
    this.router.navigate(['/edit']);
  }
}
