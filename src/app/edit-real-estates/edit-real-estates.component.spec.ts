import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealEstatesComponent } from './edit-real-estates.component';

describe('EditRealEstatesComponent', () => {
  let component: EditRealEstatesComponent;
  let fixture: ComponentFixture<EditRealEstatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRealEstatesComponent]
    });
    fixture = TestBed.createComponent(EditRealEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
