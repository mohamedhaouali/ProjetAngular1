import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chefs-table',
  imports: [NgFor],
  templateUrl: './chefs-table.component.html',
  styleUrl: './chefs-table.component.css'
})
export class ChefsTableComponent {

  // Define the chefs table data
//fake DB
chefsTab:any = [];

//Creer new instance cad constructor
constructor(private router: Router,
private chefService:ChefService)

 {}

  ngOnInit() {
  // faire appel a l'instance
  // service chefService  c'est une classe
  this.chefService.getAllChefs().subscribe(
    (response) => {
      // response = {tab : [{},{},{}]
      this.chefsTab = response.tab;
      console.log("Here is chef service response after getting all chefs",response);
        
}
  );

 }

 displayChef(id:number){
  //location.replace('page.html');=> refresh
  //sol 1
  localStorage.setItem("chefId",JSON.stringify(id));
  //navigate to chefInfo page
  this.router.navigate(['chefInfo']);

}

editChef(id:number){
  //location.replace('page.html');=> refresh
  //sol 1
  localStorage.setItem("ChefId",JSON.stringify(id));
  this.router.navigate(['chefEdit']);

}

  deleteChef(id: number) {
    this.chefService.deleteChefById(id).subscribe(
    (response) => {

      console.log("Here is chef service response after deleting chef",response);
       if (response.msg == "Deleted with sucess"){

        this.chefService.getAllChefs().subscribe(
          (data)=>{
            this.chefsTab = data.tab;
          }
        )
      }

    }

    );
  }



}


    

