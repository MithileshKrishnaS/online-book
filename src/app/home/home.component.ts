import { Component, OnInit } from '@angular/core';
import { ServiceService  } from "../service.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories='';
  books:any={};
  list:any=[]
  constructor(private service:ServiceService  ) { }

  assaign(books:any)
  {
    for(let i of books.results.books)
      {
        this.list.push(i)
      }
  }

  ngOnInit(): void {
    this.service.books_fiction().subscribe( books => {
      this.books=books;
      this.assaign(this.books)
      })
  }

  changecat()
  {
    this.list=[]
    if(this.categories==="Fiction")
    {
      this.service.books_fiction().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Education")
    {
      this.service.books_education().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Culture")
    {
      this.service.books_culture().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Fashion")
    {
      this.service.books_fashion().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Food")
    {
      this.service.books_food().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Games")
    {
      this.service.books_games().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
    if(this.categories==="Manga")
    {
      this.service.books_manga().subscribe( books => {
        this.books=books;
        this.assaign(this.books)
        })
    }
  }

  book(isbn:any)
  {
    this.service.getisbn(isbn);
  }
}
