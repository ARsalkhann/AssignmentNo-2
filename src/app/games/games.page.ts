import { Component, OnInit } from '@angular/core';
import { AllGamesService } from '../all-games.service';

import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private allGameService: AllGamesService,
  
  ) {}

 games= [];

  singleGame;

  ngOnInit() {
    this.games = this.allGameService.returnList();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('movieyear');

      this.singleGame = this.games.find(obj => {
        return obj.type.includes(val);
      });
    });
  }

  async deleteGame() {
    console.log('Delete Game', this.singleGame);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleGame.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.allGameService.deleteGame(this.singleGame.name);
            this.router.navigateByUrl('/games-list');
          }
        }
      ]
    });

    alert.present();
  }

}
