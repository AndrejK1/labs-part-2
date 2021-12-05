import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], titleSearch: string, filterMode: 'title' | 'description'): Post[] {
    if (!titleSearch.trim()) {
      return post;
    } else {
      return post.filter(item => {
        if (filterMode === 'title') {
          return item.title.toLowerCase().includes(titleSearch.toLowerCase())
        } else {
          return item.text.toLowerCase().includes(titleSearch.toLowerCase())
        }
      })
    }
  }
}
