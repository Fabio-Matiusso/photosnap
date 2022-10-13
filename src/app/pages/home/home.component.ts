import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  collections = [
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-9.png',
      title: 'The Mountains',
      author: 'by John Appleseed',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-1.png',
      title: 'Sunset Cityscapes',
      author: 'by Benjamin Cruz',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-13.png',
      title: '18 Days Voyage',
      author: 'by Alexei Borodin',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-2.png',
      title: 'Architecturals',
      author: 'by Samantha Brooke',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
