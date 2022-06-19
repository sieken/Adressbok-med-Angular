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
 
  ngOnInit() {
    this.service.getPosts()
      .subscribe((response) => {
        this.posts = response;
        this.posts = JSON.parse(this.posts);
        console.log(response);
      });
}


}


