import { Component, inject } from '@angular/core';
import { Person } from '../person';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Personservice } from '../personservice';
import { Overview } from '../overview/overview';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, Overview, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  persons: Person[] = []
  personService: Personservice = inject(Personservice);

  person: Person | undefined = undefined;

  constructor(){
    this.persons = this.personService.getPersons();
  }

  getPersonInfo(id: Number){

    console.log("Teeessssssssssssssssssssssssst " + id);
    
    this.persons.forEach(element => {
      if (element.id == id) {
        this.person = element;
        console.log("Found person: " + this.person.firstname + " " + this.person.lastname);
      }
    });

    if (this.person === undefined) {
      console.log("User could not be found in the List . . .")
    }else{
      console.log("ID: " + id + " ==> " + this.person?.firstname + " " + this.person?.lastname)
    }
  }

  /* getPersonByLastname(ln: string){
    this.persons = this.personService.getPersons().filter(p => p.lastname.toLowerCase().includes(ln.toLowerCase()));
  } */

  getPersonByLastname(lastname: string){
    this.persons = this.personService.getPersonByLastname(lastname);
  }

}
