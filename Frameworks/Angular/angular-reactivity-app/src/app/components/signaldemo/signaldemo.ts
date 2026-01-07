import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface City {
  name: String;
  state: String;
}

@Component({
  selector: 'app-signaldemo',
  imports: [FormsModule],
  templateUrl: './signaldemo.html',
  styleUrl: './signaldemo.css',
})
export class Signaldemo {
  cities: City[] = [
    { name: 'Los Angeles', state: 'CA' },
    { name: 'Washington', state: 'OR' },
    { name: 'Charlotte', state: 'NC' },
  ];
  selectCity: City = this.cities[0];

  citySignal = signal(this.cities[0]);

  selectedCity = this.selectCity;
  signalCity = computed(() => this.citySignal());

  updateCity(city: City) {
    this.selectCity = city;
    this.citySignal.set(city);
  }
}
