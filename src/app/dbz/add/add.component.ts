import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  }
  constructor(private dbzService:DbzService){}
  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbzService.addNewCharacter(this.newCharacter);
    //this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter={name:'',power:0}
   // console.log(this.newCharacter)
  }
}
