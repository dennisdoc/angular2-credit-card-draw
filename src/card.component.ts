import { Component,Input } from '@angular/core';

@Component({ 
	selector: 'card-draw',
	templateUrl:'./src/card.html' 
})
export class CardDraw{
	@Input() number: string;
	@Input() name: string;
	@Input() empty:string;
	@Input() expiration:string;
	@Input() ccv:string;
	


    constructor() {
   		if(!this.empty){
   			this.expiration='99/99';
   			this.ccv='999';
   			this.empty=false;
   		}
    }
}