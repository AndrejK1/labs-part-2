import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zieit-homework';
  titleS = ''
  filterMode: 'title' | 'description' = 'title';

  posts: Post[] = [
    { title: "React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1 },
    { title: "Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2 },
    { title: "Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3 },
    { title: "Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4 }
  ]

  updatePosts(event: Post) {
    this.posts.unshift(event);
    this.posts.forEach((p, i) => p.id = i + 1);
  }

  removeIdPost(id: number) {
    this.posts = this.posts.filter((item) => item.id != id);
    this.posts.forEach((p, i) => p.id = i + 1);
  }

  searchByTitle(event: any) {
    this.titleS = event;
    this.filterMode = 'title';
  }

  searchByDescription(event: any) {
    this.titleS = event;
    this.filterMode = 'description';
  }
}

export interface Post {
  title: string
  text: string
  id?: number
}
