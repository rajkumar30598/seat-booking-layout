import { Component, Input } from '@angular/core';
import { Seat } from '../models/models';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent {
  @Input() selectedSeats: Seat[] = [];

  get sortedSeats() {
    return [...this.selectedSeats].sort((a, b) => {
      if (a.row !== b.row) return a.row.localeCompare(b.row);
      return a.number - b.number;
    });
  }

  get totalPrice() {
    return this.selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  }
}
