import { Component } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { ChefComponent } from "../chef/chef.component";
import { ChefsComponent } from "../chefs/chefs.component";

@Component({
  selector: 'app-chef-info',
  imports: [ ChefsComponent],
  templateUrl: './chef-info.component.html',
  styleUrl: './chef-info.component.css'
})
export class ChefInfoComponent {

    foundChef: any = {};

    //Creer new instance cad constructor
   constructor(private chefService: ChefService) { }

     ngOnInit() {
    let mID = localStorage.getItem("chefId");
    this.chefService.getChefById (Number(mID)).subscribe(
      (data)=>{
        console.log("here is chef service response after getting chef by id:", data);
        //afficher pour formulaire
        this.foundChef = data.chef;
      }

    );

}

}
