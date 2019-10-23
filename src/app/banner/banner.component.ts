import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: string[] = [
    'http://lorempixel.com/1200/301/',
    'http://lorempixel.com/1200/302/',
    'http://lorempixel.com/1200/303/',
  ];

  constructor() { }

  ngOnInit() {
  }

}
