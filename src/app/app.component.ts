import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0;
  miles = 0;

  onNameChange(event: Event) {
    const receivedName = event.target as HTMLInputElement;
    this.name = receivedName.value;
  }

  onDateChange(event: Event) {
    const receivedDate = event.target as HTMLInputElement;
    this.date = receivedDate.value;
  }

  onAmountChange(event: Event) {
    const receivedAmount = event.target as HTMLInputElement;
    this.amount = parseInt(receivedAmount.value);
  }

  onMilesChange(event: Event) {
    const receivedMiles = event.target as HTMLInputElement;
    this.miles = parseInt(receivedMiles.value);
  }
}
