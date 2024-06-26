import { Component } from '@angular/core';
import { PetInfo } from './model/PetInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proof';
  pets: PetInfo[] = [];

  onFormSubmitted(event: { name: string; content: PetInfo }) {
    this.pets.push(event.content);
  }
}
