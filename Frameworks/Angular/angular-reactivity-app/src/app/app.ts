import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactivityTest } from './components/reactivity-test/reactivity-test';
import { Navbar } from './components/navbar/navbar';
import { Signaldemo } from './components/signaldemo/signaldemo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Signaldemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-reactivity-app');
}
