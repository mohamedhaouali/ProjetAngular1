import { Component, Input } from '@angular/core';
import { PlatComponent } from '../plat/plat.component';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-plats',
  imports: [PlatComponent, NgFor],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.css'
})
export class PlatsComponent {

   @Input() obj:any = {};
//fake DB
//Simulation : static data
  tab:any = [

   { id: 1 ,image:"img/food_menu/single_food_1.png",name:"Pork Sandwich", description: "They're wherein heaven seed hath nothing", price: "$10.00"}, 
   { id: 2 ,image:"img/food_menu/single_food_2.png",name:"Easter Delight", description: "They're wherein heaven seed hath nothing", price: "$20.00" }, 
   { id: 3 ,image:"img/food_menu/single_food_3.png",name:"Caesar Salad", description: "They're wherein heaven seed hath nothing", price: "$25.00" }, 
  ];
}
