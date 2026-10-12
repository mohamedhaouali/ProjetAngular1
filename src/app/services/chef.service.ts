import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createObject } from 'rxjs/internal/util/createObject';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  //Backend address(l'adresse de notre application BE)
chefURL:string = "http://localhost:3000/chefs";  
//httpClient is used to send requests to the backend

  constructor(private httpClient: HttpClient) { }

  //Request to get all Chefs
  // ChefsComponent  and Chefs Table Component
  getAllChefs() {
    return this.httpClient.get<{ tab:any }>(this.chefURL)
  }

 //Request to get Chef by ID
 // Chef info Component
  getChefById(id: number) {
    return this.httpClient.get<{ chef: any }>(this.chefURL + "/" +id);
  }

  //Request to delete Chef by ID
//Btn ds Chefs Table Component
  deleteChefById(id: number) {
    return this.httpClient.delete<{msg: string }>(this.chefURL + "/" + id);
  }
 
  //Request to add Chef
  //AddChefComponent
   // this.Chef fi addChefComponent.ts
  addChef(obj: any) {

    return this.httpClient.post<{msg : string}>(this.chefURL, obj);
  
  }

    //Request to edit chef
   // Edit Chef  Component
   // this.chef fi editChefComponent.ts

  editChefById( obj: any) {

    return this.httpClient.put<{ msg: string }>(this.chefURL, obj);
  }



//Request to delete all chefs
deleteAlChefs() {

}
}
