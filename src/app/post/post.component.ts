import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  private postService = inject(PostService)
  constructor(){
  }

  posts:any=[];
  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(){
    this.postService.getPosts().subscribe((posts:any)=>{
      console.log(posts);
      this.posts=posts;
    });
  }

}
