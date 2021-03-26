import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})


export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;

  constructor () {

  }

  ngOnInit() {

  }
}