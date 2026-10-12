import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlatService } from '../../services/plat.service';
import { PlatComponent } from "../plat/plat.component";

@Component({
  selector: 'app-search-plats',
  imports: [ReactiveFormsModule, NgIf, NgFor, PlatComponent],
  templateUrl: './search-plats.component.html',
  styleUrl: './search-plats.component.css'
})
export class SearchPlatsComponent {

    //Form Id

  searchForm! : FormGroup;
  errorMsg:string= "";
  platsTab:any = [];


    constructor(private formBuilder: FormBuilder,private platService : PlatService) { }

      ngOnInit() {

    this.searchForm = this.formBuilder.group({
      price: ["",Validators.required]
     
    });
  }

  searchPlats() {

    console.log("Here is price from input", this.searchForm.value);
      this.platService.searchPlatsByprice(this.searchForm.value.price).subscribe(
      (response) =>{
        console.log("Here is the response after search plats by price", response);
         // response = {msg: "Plats Not Found"}
        //response = {msg:"[{},{}]"}
        if (response.msg == "No plats found") {
          this.errorMsg = response.msg;
        } else {
          this.platsTab = response.plats;

          }
      }
    )

  }

}


