import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AllGamesService } from '../all-games.service';





@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  addForm: FormGroup;
  singlegame;
  
  constructor(
     private router:Router,
     private allGameService: AllGamesService,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addForm = this.formBuilder.group({
      type: [null, [Validators.required]],
      name: [null, [Validators.required]],
      
      
    });
  }

   async addNewGame(){
     this.singlegame = this.addForm.value;
    
    this.allGameService.addNewGame(this.singlegame.description, this.singlegame.name);
    this.router.navigateByUrl('/games-list');
  }

}
