import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-chef',
  imports: [],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.css'
})
export class ChefComponent {

  @Input() infoObj: any = {};
}
