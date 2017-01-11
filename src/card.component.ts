import { Component,Input } from '@angular/core';

@Component({ 
	selector: 'card-draw',
	templateUrl:'src/card.html' 
})
export class CardDraw{
	@Input() number: string;
	@Input() name: string;
	@Input() empty=true;
	expiration:string;
	ccv:string;
	


    constructor() {
   		if(!this.empty){
   			this.expiration='99/99';
   			this.ccv='999';
   		}
    }
}