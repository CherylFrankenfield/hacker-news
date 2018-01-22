import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  posts: Post[] = [
    new Post("Dog rides a motorcycle across country", "https://mondaynote.com/saving-our-children-from-smartphones-22654590ca9d", "mondaynote.com", 1, "Osiris", 5, ["alskjflsajf", "aksjfkjsldfkjalks", "hello"]),

    new Post("What makes a Failure a Disaster?", "http://blog.launchdarkly.com/what-makes-a-failure-a-disaster/", "launchdarkly.com", 3, "Dude", 55, ["This was a great article","you are a fraud","will you marry me?"]),

    new Post("Crowbars: Vending Machines Reward Crows for Cleaning Up Cigarette Butts", "https://weburbanist.com/2018/01/20/crowbars-vending-machines-reward-crows-for-cleaning-up-cigarette-butts/", "weburbanist.com", 3, "misnamed", 3, [])
  ];

  // webSearch(headline) {
  //   return 'https://www.google.com/search?q=' + this.headline;
  //   console.log(webSearch(headline));
  // };

  constructor() { }

  ngOnInit() {
  }

}
