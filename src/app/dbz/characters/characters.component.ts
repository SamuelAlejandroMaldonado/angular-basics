import { Component,Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent {
  get characters(){
    return this.dbzService.Characters;
  }
//@Input('data') characters: Character[] = [];
constructor(private dbzService:DbzService){}
}
