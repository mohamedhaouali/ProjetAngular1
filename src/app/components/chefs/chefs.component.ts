import { Component, Input } from '@angular/core';
import { ChefComponent } from '../chef/chef.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-chefs',
  imports: [ChefComponent, NgFor],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {

 @Input() obj:any = {};

  //fake DB
//Simulation : static data
tab: any = [

{ id:1,image:"img/team/chefs_1.png" ,firstName:"Ali" , lastName:"Billiard", job:"Chef Master"},
{ id:2,image:"img/team/chefs_2.png" , firstName:"Fred", lastName:" Macyard", job:"Chef Master"},
{ id:3,image:"img/team/chefs_3.png" , firstName:"Justin", lastName:"Stuard", job:"Chef Master"},
  ];
}


