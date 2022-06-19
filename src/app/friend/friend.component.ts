import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  posts:any;
  
  constructor(private service:PostService) {}

  updatePosts() {
    this.service.getPosts()
      .subscribe((response) => {
        this.posts = response;
        this.posts = JSON.parse(this.posts);
        console.log(response);
      });
  }
 
  ngOnInit() {
    this.updatePosts();
  }
  
  addPost() {
    this.service.addPost({
      "Firstname":"Maj",
      "LastName":"Sunding",
      "Adress":"Lit",
      "Zip":"12345",
      "City":"Lit",
      "Email":"maj@sunding.se",
      "PhoneNumber":"070-1234567"
    })
      .subscribe(() => this.updatePosts())
  }

  editPost(post: any) {
    this.service.editPost(post.id, {...post, Address: 'Min bästa väg 7' })
      .subscribe(() => this.updatePosts());
  }

  deletePost(id: number) {
    this.service.deletePost(id)
      .subscribe(() => this.updatePosts());
  }

}
