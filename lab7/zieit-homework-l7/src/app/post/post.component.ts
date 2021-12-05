import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router";
import { Post, PostsService } from "../posts.service";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private postS: PostsService, private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => this.post = this.postS.getById(+param['id']));
  }

  goBack() {
    this.router.navigate(['/posts']);
  }

  load4Post() {
    this.router.navigate(['/post/' + this.postsService.posts[3].id]);
  }
}
