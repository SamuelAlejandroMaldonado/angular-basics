import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
<h1>{{title}}</h1>
<h3>The base is : <strong>{{base}}</strong></h3>
<button (click)="calc(base)">+ {{base}}</button>
<span>{{number}}</span>
<button (click)="calc(-base)">- {{base}}</button>
`
})

export class ContadorComponent {
    title: string = 'Contador APP';
    number: number = 10;
    base: number = 5;

    calc(valor: number) {
        this.number += valor;
    }

}