import { Component, EventEmitter, Output } from '@angular/core';
import { PetInfo } from '../model/PetInfo';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.css'],
})
export class PetsFormComponent {
  @Output() formSubmit = new EventEmitter<{ name: string; content: PetInfo }>();
  petOwnerName: string;
  petName: string;

  onFormSubmit() {
    this.formSubmit.emit({ name: 'formSubmit', content: new PetInfo(this.petOwnerName, this.petName) });
  }
}
