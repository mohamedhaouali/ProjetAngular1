import { Component } from '@angular/core';
import { ChefsComponent } from '../chefs/chefs.component';
import { PlatsComponent } from '../plats/plats.component';
import { BlogsComponent } from '../blogs/blogs.component';



@Component({
  selector: 'app-home',
  imports: [ChefsComponent, PlatsComponent,BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
