export type SeatType = 'CLASSIC' | 'PREMIUM';

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: SeatType;
  selected: boolean;
  occupied: boolean;
  price: number;
}

export interface ComponentConfig {
  rows: string[];
  seatsPerRow: number;
  premiumRows: string[];
  occupiedSeats: string[];
  classicPrice: number;
  premiumPrice: number;
}
