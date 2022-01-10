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

  ngOnInit(): void {
    this.service.books_fiction().subscribe( books => {
      this.books=books;
      for(let i=0;i<this.books.results.books.length;i++)
        {
          this.list.push(this.books.results.books[i])
        }
        console.log(this.list)
      })
  }

  changecat()
  {
    this.list=[]
    console.log(this.categories)
    if(this.categories==="Fiction")
    {
      this.service.books_fiction().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Education")
    {
      this.service.books_education().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Culture")
    {
      this.service.books_culture().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Fashion")
    {
      this.service.books_fashion().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Food")
    {
      this.service.books_food().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Games")
    {
      this.service.books_games().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
    if(this.categories==="Manga")
    {
      this.service.books_manga().subscribe( books => {
        this.books=books;
        for(let i=0;i<this.books.results.books.length;i++)
          {
            this.list.push(this.books.results.books[i])
          }
        })
    }
  }

  book(isbn:any)
  {
    this.service.getisbn(isbn);
    console.log(isbn)
  }
}
