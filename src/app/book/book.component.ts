import { Component, OnInit } from '@angular/core';
import { ServiceService  } from "../service.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:any=[];
  url:any="https://www.google.com/books/jsapi.js";
  constructor(private service:ServiceService,private router:Router) { 
  }

  ngOnInit(): void {
    this.service.getbook().subscribe( getbooks => {
      this.books=getbooks;
      this.books=this.books.items[0].volumeInfo;
      if(!(this.books.hasOwnProperty('averageRating')))
      {
        const key="averageRating";
        this.books[key]="nil";
      }
      if(!(this.books.hasOwnProperty('ratingsCount')))
      {
        const key="ratingsCount";
        this.books[key]=0;
      }
      console.log(getbooks);
    }) 
  }

  buy()
  {
    console.log(this.books.previewLink)
    this.router.navigateByUrl(this.books.previewLink);
  }

  
}
