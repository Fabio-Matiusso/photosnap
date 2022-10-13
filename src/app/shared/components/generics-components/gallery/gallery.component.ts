import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public collectionsHome: Array<{
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

  public collectionsStories: Array<{
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
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-17.png',
      title: 'The Mountains',
      author: 'by John Appleseed',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-15.png',
      title: 'Sunset Cityscapes',
      author: 'by Benjamin Cruz',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-5.png',
      title: '18 Days Voyage',
      author: 'by Alexei Borodin',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-14.png',
      title: 'Architecturals',
      author: 'by Samantha Brooke',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-10.png',
      title: 'The Mountains',
      author: 'by John Appleseed',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-11.png',
      title: 'Sunset Cityscapes',
      author: 'by Benjamin Cruz',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-16.png',
      title: '18 Days Voyage',
      author: 'by Alexei Borodin',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-3.png',
      title: 'Architecturals',
      author: 'by Samantha Brooke',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-7.png',
      title: 'The Mountains',
      author: 'by John Appleseed',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-4.png',
      title: 'Sunset Cityscapes',
      author: 'by Benjamin Cruz',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-12.png',
      title: '18 Days Voyage',
      author: 'by Alexei Borodin',
    },
    {
      backgroundImage: '../../../assets/stories/gallery/gallery-image-6.png',
      title: 'Architecturals',
      author: 'by Samantha Brooke',
    },
  ];

  public arrowIcon: string = '../../../assets/shared/desktop/arrow.svg';

  public cta: string = 'READ STORY';

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = router.url;
  }

  ngOnInit(): void {}
}
