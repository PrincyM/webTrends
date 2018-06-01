import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet' // what your importing class definition within brackets
import { PlanetService } from '../planet.service' // importing planet service

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  title = 'Planets';

  year = new Date().getFullYear();

  planet: Planet; // undefined property
  planets: Planet[]; // initiate a property and wait for the service to define the property using ngOnInit() function. 

  // ngOnInit() functions waits for the componet to load and executes what's within it's function

 // planet:Planet = {id:1, name: 'Mercury'};



  // planets: Planet[] = [ // variable planets that is an array of planet
  //         { id:1, name: 'Mercury'},
  //         {id:2, name: 'Venus'},
  //         {id:3, name:'Earth'},
  //         {id:4, name: 'Mars'},
  //         {id:5, name: 'Jupiter'},
  //         {id:6, name: 'Saturn'},
  //         {id:7, name: 'Uranus'},
  //         {id:8, name: 'Neptune'},
  //         {id:9, name: 'Pluto'}
  // ];


  setPlanet(p: Planet) {  // Angular method
    console.log(this.planet);
    this.planet = p; // this.planet references the component
    console.log(this.planet);
  }

  constructor(private planetService: PlanetService) 
  { 
     
  }

  ngOnInit() {

    this.planetService.getPlanets().subscribe(ps => this.planets = ps); // calling subscribe() method to assign values of Planets array to function inside subscribe

    // this.planets = this.planetService.getPlanets(); // makes components a lot easier to manage. Easier way to do what was done above
  }

}

// class Planet{
//   id: number;
//   name: string;
// } 

// class defined in planet.ts class created
