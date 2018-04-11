import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component(
{
 selector:'pm-star',
 templateUrl:'Star.component.html',
 styleUrls:['Star.component.css']
}

)

export class StartComponent implements OnChanges
{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter();

   ngOnChanges():void
{
  
    console.log(this.rating)
    this.starWidth=this.rating*86/5


}
onClick():void
{
    this.ratingClick.emit(`The rating ${this.rating} was clicked!`)
}
 

    constructor()
    {
        
     
    }
}