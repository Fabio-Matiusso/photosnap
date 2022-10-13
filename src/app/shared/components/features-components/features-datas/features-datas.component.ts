import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-datas',
  templateUrl: './features-datas.component.html',
  styleUrls: ['./features-datas.component.scss'],
})
export class FeaturesDatasComponent implements OnInit {
  public features: Array<{
    src: string;
    title: string;
    description: string;
  }> = [
    {
      src: '../../../../../assets/features/desktop/responsive.svg',
      title: '100% Responsive',
      description:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      src: '../../../../../assets/features/desktop/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      src: '../../../../../assets/features/desktop/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    },
    {
      src: '../../../../../assets/features/desktop/custom-domain.svg',
      title: 'Custom Domain',
      description:
        'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    },
    {
      src: '../../../../../assets/features/desktop/boost-exposure.svg',
      title: 'Boost Your Exposure',
      description:
        'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    },
    {
      src: '../../../../../assets/features/desktop/drag-drop.svg',
      title: 'Drag & Drop Image',
      description:
        'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
