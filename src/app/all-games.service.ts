import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllGamesService {

  games = [
    { type: '2001', name: 'Tekken' },
    { type: '2001', name: 'PUBG' },
    { type: '2001', name: 'Code 4' },
    { type: '2001', name: 'IGI' },
    { type: '2001', name: 'Metro' },
    { type: '2001', name: 'Street Fighter' },
    { type: '2001', name: 'Max Pane' },
    { type: '2001', name: 'Android' },
    { type: '2001', name: 'Android' },
    { type: '2001', name: 'Android' },
    { type: '2001', name: 'Android' }
  
  ];
  constructor() { }
  returnList() {
    return this.games;
  }
  deleteGame(name) {
    this.games = this.games.filter(e => {
      return e.name !== name;
    });
  }  
    addNewGame(type,name){
      this.games.push({type,name});
      
    }
}
