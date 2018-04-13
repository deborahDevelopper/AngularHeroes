import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
 
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
 // getHeroes(): Hero[] {
 //   return HEROES;
 // }
 getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: adjuntados heroes');
  return of(HEROES);
}
getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: obtenido hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
}
