import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstate } from '../model/real-estate';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.css'],
})
export class RealEstateCardComponent implements OnInit {
  realEstates$: Observable<RealEstate[]>;

  constructor(private realEstateService: RealEstateService) {
    this.realEstates$ = this.realEstateService.getRealEstates();
  }

  ngOnInit(): void {
    this.realEstates$ = this.realEstateService.getRealEstates();
  }
}
