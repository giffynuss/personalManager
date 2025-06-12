import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class Personservice {

  persons: Person[] = []

  constructor(){
    this.persons = [
      {id: 0, firstname: 'Timo', lastname: 'Müller',age: 22, photo: 'images.jpg'},
      {id: 1, firstname: 'Sara', lastname: 'Karl',age: 30, photo: 'pic1.jpg'},
      {id: 2, firstname: 'Daniel', lastname: 'Hübscher',age: 35, photo: 'pic2.jpg'},
      {id: 3, firstname: 'Lisa', lastname: 'Sandon',age: 20, photo: 'pic3.jpg'},
    ]; 
  }

  getPersons(): Person[] {
    return this.persons;
  }

  /* getPersonById(id: Number): Person | undefined {
    return this.persons.find(element => element.id == id);
  } */

    getPersonById(id: Number): Person[] {
      if(id == null || id == undefined){
        return [this.getPersons()[0]];
      }
      return this.persons.filter(element => 
        element.id == id
      );
    }

  /* getPersonById(id: Number): Person | any {
    this.persons.forEach(
      (person: Person) => {
      if (person.id == id) {
        return person;
      }else {
        return null;
      }
    })
  } */

  getPersonByLastname(ln: string): Person[]{
    if(ln.length == 0){
      return this.getPersons();
    }
    return this.persons.filter(element => 
      element.lastname.toLowerCase() == ln.toLowerCase()
    );
  }


  addPerson(newPerson: { id: number; firstname: any; lastname: any; age: any; anrede: string; }) {
    this.persons.push(newPerson);
  }

  /* .filter(p => p.lastname.toLowerCase().includes(ln.toLowerCase())) */
  
}
