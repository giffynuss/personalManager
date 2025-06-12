import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-person',
  imports: [],
  templateUrl: './new-person.html',
  styleUrl: './new-person.css'
})
export class NewPerson {

route: ActivatedRoute = inject(ActivatedRoute);

}
