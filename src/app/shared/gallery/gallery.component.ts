import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public collections: Array<{
    backgroundImage: string;
    title: string;
    author: string;
  }> = [
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

  public arrowIcon: string = '../../../assets/shared/desktop/arrow.svg';

  public cta: string = 'READ STORY';

  constructor() {}

  ngOnInit(): void {}
}
