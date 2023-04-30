import { Component, OnInit } from '@angular/core';
import { ServerhttpService } from '../Services/serverhttp.service';
import { PostModel } from '../models/profile-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-serverapi',
  templateUrl: './serverapi.component.html',
  styleUrls: ['./serverapi.component.less']
})
export class ServerapiComponent implements OnInit {
  constructor(private http: ServerhttpService) {

  }
  public array = {}
  public name = ''
  public age = 0
  public posts = []

  //private posts = new BehaviorSubject<PostModel[]>([]);
  // private posts = new PostModel([]);


  ngOnInit(): void {
    this.http.getProfile().subscribe((data) => {
      console.log(data)
      this.array = data
      this.name = data.name
      this.age = data.age
    });


    this.http.getPosts().subscribe((data) => {
      this.posts = data
    });
  }

  public addPost() {    
    const newPost = {"title": "Post new" }
    this.http.addPosts(newPost).subscribe((data1)=>{
      console.log(data1)
      // this.posts.push(data1)
    });

  }
}
