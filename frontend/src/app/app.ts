import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Servidores } from './components/lista-servidores/lista-servidores'

@Component({
  imports: [RouterOutlet, Servidores],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
