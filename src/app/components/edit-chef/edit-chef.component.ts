import { Component } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-chef',
  imports: [FormsModule],
  templateUrl: './edit-chef.component.html',
  styleUrl: './edit-chef.component.css'
})
export class EditChefComponent {
  // Define the MATCHES table data
//fake DB


chef:any = {};
    //Creer new instance cad constructor
constructor(private chefService: ChefService) {}

  ngOnInit() {
  
      let mId = localStorage.getItem("ChefId") ;
   
    //appel service pour recuperer le chef par id
    
      this.chefService.getChefById(Number(mId)).subscribe(
       (data) => {

          console.log("Here is data from get chef by ID", data);  
          //this.chef jeya min chef:any = {}
          // chef jeya min backend get
          this.chef = data.chef;  

       }


      );

}

 editChef() {
    console.log("Here new Chef values", this.chef);
    this.chefService.editChefById(this.chef).subscribe(
          (data) => {

      console.log("Here is data from edit chef",data);

    }

    );
  }

}
