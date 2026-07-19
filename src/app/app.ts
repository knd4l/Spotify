import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Player } from './components/player/player';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './pages/home/home';


@Component({
  selector: 'app-root',
  imports: [Header, Player, Sidebar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spotify');
}
