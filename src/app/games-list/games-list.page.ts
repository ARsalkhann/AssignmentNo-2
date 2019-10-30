import { Component, OnInit } from '@angular/core';
import { AllGamesService } from '../all-games.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {

  constructor(
    private router: Router,
    private allgames:AllGamesService
  ) {}

 games = [];

  ngOnInit() {
    console.log('nothing on init');
  
    // this.students = this.everythingstudentService.returnStudentsList();

    // this.students = this.studentsListService.getStudents;
    // this.students = this.studentsListService.getAllStudents();
  }

  changeUrl(user) {
    const type = user.type;
    const url = `games-list/${type}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }
  ionViewDidEnter() {
    console.log('view Enter');
    this.games= this.allgames.returnList();
  }

}
