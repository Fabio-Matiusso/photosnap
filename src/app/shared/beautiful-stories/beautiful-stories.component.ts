import { Component, OnInit } from '@angular/core';
import { slideInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-beautiful-stories',
  templateUrl: './beautiful-stories.component.html',
  styleUrls: ['./beautiful-stories.component.scss'],
  animations: [slideInRightOnEnterAnimation()],
})
export class BeautifulStoriesComponent implements OnInit {
  apresentation = [
    {
      title: 'BEAUTIFUL STORIES EVERY TIME ',
      description:
        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      cta: 'GET AN INVITE',
      srcArrow: '../../../assets/shared/desktop/arrow.svg',
    },
  ];

  public manImage: Array<{ src: string; className?: string }> = [
    {
      src: '../../../assets/home/desktop/notebook.png',
      className: 'img-man-desktop',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
