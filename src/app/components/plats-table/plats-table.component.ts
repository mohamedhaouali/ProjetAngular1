import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PlatService } from '../../services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plats-table',
  imports: [NgFor],
  templateUrl: './plats-table.component.html',
  styleUrl: './plats-table.component.css'
})
export class PlatsTableComponent {

    // Define the Plats table data
//fake DB
platsTab:any = [];

//Creer new instance cad constructor
constructor(private router: Router,
private platService: PlatService)

 {}

  ngOnInit() {
  // faire appel a l'instance
  // service platService  c'est une classe
  this.platService.getAllPlats().subscribe(
    (response) => {
      // response = {tab : [{},{},{}]
      this.platsTab = response.tab;
      console.log("Here is plat service response after getting all plats",response);
        
}
  );

}

 displayPlat(id:number){
  //location.replace('page.html');=> refresh
  //sol 1
  localStorage.setItem("platId",JSON.stringify(id));
  //navigate to chefInfo page
  this.router.navigate(['platInfo']);

}

editPlat(id:number){
  //location.replace('page.html');=> refresh
  //sol 1
  localStorage.setItem("platId",JSON.stringify(id));
  this.router.navigate(['platEdit']);

}


 deletePlat(id: number) {
    this.platService.deletePlatById(id).subscribe(
    (response) => {

      console.log("Here is plat service response after deleting plat",response);
           if (response.msg == "Deleted with sucess"){

        this.platService.getAllPlats().subscribe(
          (data)=>{
            this.platsTab = data.tab;
          }
        )
      }

    }

    );
  }  



}
