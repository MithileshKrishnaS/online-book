import { Component, OnInit } from '@angular/core';
import { ServiceService  } from "../service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  check=false;
  search:any='';
  books:any=[];
  list:any=[]
  notfound=false;
  image="https://storage.googleapis.com/du-prd/books/images/";
  images=""
  constructor(private service:ServiceService ) { }



  search_book()
  {
    this.check=true;
    this.service.gettitle(this.search);
    this.service.searchbook().subscribe( searchbooks => {
    this.books=searchbooks;
    if(this.books.totalItems===0)
    {
      this.notfound=true;
    }
    console.log(this.books.items)
    for(let i=0;i<this.books.items.length;i++)
    {
      this.list.push(this.books.items[i].volumeInfo); 
      if(!(this.list[i].hasOwnProperty('imageLinks')))
      {
        const key="imageLinks";
        this.list[i][key]={thumbnail:"assets/images/content.png"};
      }
      console.log(this.list[i])
    }
    })
  }

  book(isbn:any)
  {
    this.service.getisbn(isbn);
    //console.log(isbn)
  }
  
}
