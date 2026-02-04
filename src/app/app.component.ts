import { Component } from '@angular/core';
import { Seat, ComponentConfig } from './components/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seat Booking System';

  config: ComponentConfig = {
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    seatsPerRow: 12,
    premiumRows: ['E', 'F', 'G', 'H'],
    occupiedSeats: ['A3', 'B7', 'C1', 'D10', 'E5', 'F2', 'G12', 'H1'],
    classicPrice: 10,
    premiumPrice: 15
  };

  selectedSeats: Seat[] = [];

  onSelectionChanged(seats: Seat[]) {
    this.selectedSeats = [...seats];
  }
}
