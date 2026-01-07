import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway',
  imports: [FormsModule],
  templateUrl: './twoway.html',
  styleUrl: './twoway.css',
})
export class Twoway {
  num: number = 0;
}
