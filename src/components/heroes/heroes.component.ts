import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { Heroes } from '../../database/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes = Heroes;
  selectedHero?: Hero;

  constructor () {

  }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}