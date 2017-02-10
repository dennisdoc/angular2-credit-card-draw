import { Component,Input } from '@angular/core';

@Component({ 
	selector: 'card-draw',
	templateUrl:'./card.html' 
})
export class CardDraw{
	@Input() number: string;
	@Input() name: string;
	@Input() expiration:string;
	@Input() ccv:string;
	@Input() background:string;
	@Input() height:string;
	


    constructor() {

    }
}