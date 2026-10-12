import { Component } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { PlatsComponent } from "../plats/plats.component";

@Component({
  selector: 'app-plat-info',
  imports: [PlatsComponent],
  templateUrl: './plat-info.component.html',
  styleUrl: './plat-info.component.css'
})
export class PlatInfoComponent {

      foundPlat: any = {};

    //Creer new instance cad constructor
   constructor(private platService: PlatService) { }

     ngOnInit() {
    let mID = localStorage.getItem("platId");
    this.platService.getPlatById (Number(mID)).subscribe(
      (data)=>{
        console.log("here is plat service response after getting plat by id:", data);
        //afficher pour formulaire
        this.foundPlat = data.plat;
      }

    );

}

}
