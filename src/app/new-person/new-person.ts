import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { Personservice } from '../personservice';

@Component({
  selector: 'app-new-person',
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule, MatSelect, MatSelectModule],
  templateUrl: './new-person.html',
  styleUrl: './new-person.css'
})
export class NewPerson {
  route: ActivatedRoute = inject(ActivatedRoute);
  personService = inject(Personservice);
  
  personForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl('')
  });

  selectedAnrede: string = '';

  saveNewPerson() {
    const newPerson = {
      id:100,
      firstname: this.personForm.value.firstname,
      lastname: this.personForm.value.lastname,
      age: this.personForm.value.age,
      anrede: this.selectedAnrede
    };

    this.personService.addPerson(newPerson);

    console.log('New Person:', newPerson);
    // Here you would typically send the new person to a service to save it
  }

}
