import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.componente.html'
})

export class MiComponente{

    constructor(){
    }

    ngOnInit(){
    }
    numSequence(n: number): Array<number> {
        return Array(n);
    }
}