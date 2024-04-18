import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  @Input() petOwnerName: string;
}
