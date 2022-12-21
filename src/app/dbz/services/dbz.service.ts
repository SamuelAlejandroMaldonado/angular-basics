import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _characters: Character[] = [
        { name: "Goku", power: 15000 },
        { name: "Vegeta", power: 8500 }
    ];
    get Characters():Character[] {
        return [...this._characters];
    }
    constructor() {}
    addNewCharacter(character:Character){
      this._characters.push(character);
    }
}