import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { NewPerson } from "./new-person/new-person";


export const routes: Routes = [
    
    {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path : 'home',
        component: Home
    },
    {
        path : 'details/:id',
        component: Details
    },
    {
        path : 'new-person',
        component: NewPerson
    }
    
]