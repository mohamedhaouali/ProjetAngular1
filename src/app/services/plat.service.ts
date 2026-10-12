import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createObject } from 'rxjs/internal/util/createObject';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  //Backend address(l'adresse de notre application BE)
platURL:string = "http://localhost:3000/plats";  
//httpClient is used to send requests to the backend

  constructor(private httpClient: HttpClient) { }

  //Request to get all plats
  // platsComponent  and plats Table Component

  getAllPlats() {
    return this.httpClient.get<{ tab:any }>(this.platURL)
  }

 //Request to get plat by ID
 // plat info Component
  getPlatById(id: number) {
    return this.httpClient.get<{ plat: any }>(this.platURL + "/" +id);
  }

  //Request to delete plat by ID
//Btn ds plats Table Component
  deletePlatById(id: number) {
    return this.httpClient.delete<{msg: string }>(this.platURL + "/" + id);
  }
 
  //Request to add plat
  //AddplatComponent
   // this.plat fi addplatComponent.ts
  addPlat(obj: any) {

    return this.httpClient.post<{msg : string}>(this.platURL, obj);
  
  }

    //Request to edit plat
   // Edit plat  Component
   // this.plat fi editplatComponent.ts

  editPlatById( obj: any) {

    return this.httpClient.put(this.platURL, obj);
  }

//Request to delete all plats
deleteAllPlats() {

}

//Request to search Plats by price
// platUrl = http: //localhost:3000/plats

searchPlatsByprice (price:number){

  return this.httpClient.get<{ msg: string ,plats: any}>(this.platURL+ "/search/" + price);

}



}
