import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-chef',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-chef.component.html',
  styleUrl: './add-chef.component.css'
})
export class AddChefComponent {

    //Form Id

  addchefForm! : FormGroup;

   constructor(private builder: FormBuilder) { }

ngOnInit() {
      this.addchefForm = this.builder.group({
      name: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
      specialite: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
      exprience: ["",[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
    
    });
  }

    addchef() {

    console.log("Add Chef Object", this.addchefForm.value);

  }

}
