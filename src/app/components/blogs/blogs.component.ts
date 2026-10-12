import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [ArticleComponent,NgFor],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

    //fake DB
//Simulation : static data
tab: any = [

{ id:1,image:"img/blog/blog_1.png" ,date:"Apr 06, 2019 " , hashtag:"Adama kind deep gatherin first over fter his great"},
{ id:2,image:"img/blog/blog_2.png" , date:"Mar 06, 2021 " , hashtag:"Adama kind deep gatherin first over fter his great"},
{ id:3,image:"img/blog/blog_3.png" , date:"Juin 06, 2024 " , hashtag:"Adama kind deep gatherin first over fter his great"},
  ];

}