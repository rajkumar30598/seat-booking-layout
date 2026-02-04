import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Seat, ComponentConfig } from '../models/models';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.scss']
})
export class SeatLayoutComponent implements OnInit {
  @Input() config!: ComponentConfig;
  @Output() selectionChanged = new EventEmitter<Seat[]>();

  seats: Seat[] = [];

  ngOnInit() {
    this.generateSeats();
  }

  generateSeats() {
    this.seats = [];
    for (const row of this.config.rows) {
      for (let num = 1; num <= this.config.seatsPerRow; num++) {
        const id = `${row}${num}`;
        const isPremium = this.config.premiumRows.includes(row);
        this.seats.push({
          id,
          row,
          number: num,
          type: isPremium ? 'PREMIUM' : 'CLASSIC',
          selected: false,
          occupied: this.config.occupiedSeats.includes(id),
          price: isPremium ? this.config.premiumPrice : this.config.classicPrice
        });
      }
    }
  }

  getSeatsInRow(row: string) {
    return this.seats.filter(s => s.row === row);
  }

  isPremiumRow(row: string): boolean {
    return this.config.premiumRows.includes(row);
  }

  getSeatClass(seat: Seat) {
    return {
      'seat': true,
      'classic': seat.type === 'CLASSIC',
      'premium': seat.type === 'PREMIUM',
      'selected': seat.selected,
      'occupied': seat.occupied
    };
  }

  toggleSeat(seat: Seat) {
    if (seat.occupied) return;
    seat.selected = !seat.selected;
    this.selectionChanged.emit(this.seats.filter(s => s.selected));
  }
}
