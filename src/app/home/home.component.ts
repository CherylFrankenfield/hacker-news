import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
