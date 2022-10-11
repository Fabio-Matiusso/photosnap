import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public datasDetails: Array<{
    image: string;
    title: string;
    description: string;
  }> = [
    {
      image: '../../../assets/features/desktop/responsive.svg',
      title: '100% Responsive',
      description:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      image: '../../../assets/features/desktop/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all your stories at once. That`s right, you did not misread!',
    },
    {
      image: '../../../assets/features/desktop/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
