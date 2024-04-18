import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.css'],
})
export class PetsFormComponent {
  @Output() formSubmit = new EventEmitter<{ name: string; content: string }>();
  petOwnerName: string;

  onFormSubmit() {
    this.formSubmit.emit({ name: 'formSubmit', content: this.petOwnerName });
  }
}
