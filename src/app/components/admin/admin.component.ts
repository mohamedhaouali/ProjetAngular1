import { Component } from '@angular/core';
import { ChefsTableComponent } from '../chefs-table/chefs-table.component';
import { PlatsTableComponent } from '../plats-table/plats-table.component';

@Component({
  selector: 'app-admin',
  imports: [ChefsTableComponent,PlatsTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
