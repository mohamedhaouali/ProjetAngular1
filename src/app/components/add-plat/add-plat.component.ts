import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-add-plat',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-plat.component.html',
  styleUrl: './add-plat.component.css'
})
export class AddPlatComponent {

        //Form Id

  addplatForm! : FormGroup;

   constructor(private builder: FormBuilder) { }

ngOnInit() {
      this.addplatForm = this.builder.group({
      name: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
      price: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
      description: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
    
    });
  }

    addplat() {

//abdera7man
    //this.platService.addPlat(this.addplatForm.value).subscribe();

    console.log("Plat Object", this.addplatForm.value);


  }



}
