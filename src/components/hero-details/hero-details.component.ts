import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from 'src/services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})


export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}