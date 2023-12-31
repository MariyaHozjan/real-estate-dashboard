import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealEstateComponent } from './create-real-estate.component';

describe('CreateRealEstateComponent', () => {
  let component: CreateRealEstateComponent;
  let fixture: ComponentFixture<CreateRealEstateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRealEstateComponent]
    });
    fixture = TestBed.createComponent(CreateRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
