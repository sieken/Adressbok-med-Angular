import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://address.mindflower.se/api/person';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }

  addPost(data: object) {
    return this.httpClient.post(this.url, data);
  }

  deletePost(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  editPost(id: number, content: object) {
    return this.httpClient.put(`${this.url}/${id}`, content);
  }
}