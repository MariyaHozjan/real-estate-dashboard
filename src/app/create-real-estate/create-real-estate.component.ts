import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { RealEstate } from '../model/real-estate';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-create-real-estate',
  templateUrl: './create-real-estate.component.html',
  styleUrls: ['./create-real-estate.component.css'],
})
export class CreateRealEstateComponent implements OnChanges {
  @Input() editRealEstate: RealEstate | null = null;
  @Output() realEstateAdded = new EventEmitter<RealEstate>();
  @Output() realEstateUpdated = new EventEmitter<RealEstate>();

  realEstate: RealEstate = new RealEstate(null, '', '', 0, '');
  isEditing = false;

  constructor(private realEstateService: RealEstateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['editRealEstate'] &&
      this.editRealEstate &&
      this.editRealEstate.id !== null
    ) {
      this.realEstate = new RealEstate(
        this.editRealEstate.id,
        this.editRealEstate.title,
        this.editRealEstate.description,
        this.editRealEstate.price,
        this.editRealEstate.imagePath
      );
      this.isEditing = true;
    } else {
      this.resetForm(); // Reset form when there are no changes
    }
  }

  submit(): void {
    if (this.isEditing) {
      this.realEstateUpdated.emit(this.realEstate);
    } else {
      this.realEstateAdded.emit(this.realEstate);
    }
    this.resetForm();
  }

  resetForm(): void {
    this.realEstate = new RealEstate(null, '', '', 0, '');
    this.isEditing = false;
  }
}
