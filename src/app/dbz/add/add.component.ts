import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

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
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter={name:'',power:0}
   // console.log(this.newCharacter)
  }
}
