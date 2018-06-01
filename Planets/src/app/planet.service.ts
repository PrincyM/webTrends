import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { Observable, of } from 'rxjs'; // 'rxjs'specializes in asynchronous loading


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets: Planet[] = [ // variable planets that is an array of planet
    { id:1, name: 'Mercury'},
    {id:2, name: 'Venus'},
    {id:3, name:'Earth'},
    {id:4, name: 'Mars'},
    {id:5, name: 'Jupiter'},
    {id:6, name: 'Saturn'},
    {id:7, name: 'Uranus'},
    {id:8, name: 'Neptune'},
    {id:9, name: 'Pluto'}
];

getPlanets(): Observable<Planet[]> {
  return of(this.planets);
}

//Observable -> works like a constant callback

// getPlanets() {
//   return this.planets;       Easier way to do getPlanets(): Observable above
// }    

  constructor() { }
}
