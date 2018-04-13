import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:51908/api/values/';  // URL to web api
 
  constructor(private messageService: MessageService, private http: HttpClient) { }
 // getHeroes(): Hero[] {
 //   return HEROES;
 // }
 /** GET heroes from the server */

 getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}
getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: obtenido hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
  /** Log a HeroService message with the MessageService */
private log(message: string) {
this.messageService.add('HeroService: ' + message);
}
}
