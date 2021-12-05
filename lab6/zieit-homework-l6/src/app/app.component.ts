import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = "zieit-homework-l6"
  posts: Todo[] = [];
  flagLoad = false;

  ngOnInit(): void {
    this.loadPost()
  }

  sort = (a: string, b: string) => {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }

  namePost = '';

  constructor(private http: HttpClient) {
  }

  copmletedPost(id: number | undefined) {
    if (id === undefined) {
      console.warn("no id provided!")
      return false;
    }

    console.log(this.posts)

    if (id > 200) {
      // is mock 
      return this.getTodo(id).completed = true;
    } else {
      return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed: true })
        .subscribe((res) => {
          console.log(res);
          this.getTodo(res['id']).completed = true;
        });
    }
  }

  getTodo(id: number | undefined): Todo {
    return this.posts.find(item => item.id === id) || { title: '', id: undefined, completed: false };
  }

  loadPost() {
    this.flagLoad = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(delay(1500))
      .subscribe(response => {
        this.posts = response.sort((t1, t2) => this.sort(t1.title, t2.title));
        this.flagLoad = false;
      })
      ;
  }

  addPost() {
    if (!this.namePost.trim()) {
      return;
    }
    const post: Todo = {
      title: this.namePost,
      completed: false
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos/', post)
      .subscribe(res => {
        post.id = res['id'];
        this.posts.unshift(post);
      });
  }

  removePost(id: number | undefined) {
    if (id === undefined) {
      console.warn("no id provided!")
      return;
    }

    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => this.posts = this.posts.filter(item => item.id != id));
  }

}
