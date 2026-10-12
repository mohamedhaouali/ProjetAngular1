import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-plat',
  imports: [],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.css'
})
export class PlatComponent {
 
  @Input() infObj:any = {};
}
