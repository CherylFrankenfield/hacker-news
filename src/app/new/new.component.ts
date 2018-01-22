import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '../post.model';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  @Input() childPosts: Post[];

  // webSearch(headline) {
  //   return 'https://www.google.com/search?q=' + this.headline;
  //   console.log(webSearch(headline));
  // };

  constructor() { }

  ngOnInit() {

  }
}
