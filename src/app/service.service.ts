import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isbn:any=0;
  title:any='';
  value:any=false;
  constructor(private http:HttpClient,@Inject(DOCUMENT) private document: Document ) { }

  public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }
  
  books_fiction()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_education()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/education.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_culture()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_fashion()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/fashion-manners-and-customs.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_food()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/food-and-fitness.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_games()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/games-and-activities.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  books_manga()
  {
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/manga.json?api-key=z7k8qiIDLPvrd4oZ8RRmMODk8Ssm2Xjr")
  }

  getisbn(isbn:any)
  {
    this.isbn=isbn;
  }

  getbook()
  {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:"+this.isbn);
  }

  gettitle(title:any)
  {
    this.title=title;
  }

  searchbook()
  {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=title:"+this.title)
  }

  getusers()
  {
    return this.http.get('http://localhost:3000/User');
  }

  login()
  {
    if(this.value)
    {
      return true;
    }
    return false;
  }

  auth(value:any)
  {
    this.value=value;
  }

}
