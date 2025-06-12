import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../person';
import { Home } from '../home/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview {
  home: Home = inject(Home);

  @Input() person!: Person;
}
