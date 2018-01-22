import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  jobs: Job[] = [
    new Job('Strikingly (YC W13) is hiring designers and devs in Shanghai', 'http://www.strikingly.com/s/careers?utm_source=hn&utm_content=designer', 'strikingly.com', 56),
    new Job('Flexport is hiring software engineers','https://www.flexport.com/careers/department/engineering', 'flexport.com', 5)
  ]
  constructor() { }

  ngOnInit() {
  }

}

export class Job {
  constructor(
    public jobTitle: string,
    public jobURL: string,
    public jobSource: string,
    public jobTimestamp: number
  ) {}
}
