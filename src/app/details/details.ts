import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { Personservice } from '../personservice';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

  route: ActivatedRoute = inject(ActivatedRoute);
  selectedPerson: Person | undefined;
  personService: Personservice = inject(Personservice);

  constructor() {
    // this.selectedPerson = this.personService.getPersonById(this.route.snapshot.params['id']);
    this.selectedPerson = this.personService.getPersonById(Number(this.route.snapshot.params['id']))[0];

  }

}
