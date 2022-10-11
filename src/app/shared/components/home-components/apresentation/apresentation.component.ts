import { Component, OnInit } from '@angular/core';
import {
  slideInRightOnEnterAnimation,
  slideInLeftOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss'],
  animations: [slideInLeftOnEnterAnimation(), slideInRightOnEnterAnimation()],
})
export class ApresentationComponent implements OnInit {
  public apresentation: Array<{
    title: string;
    description: string;
    cta: string;
    srcArrow: string;
  }> = [
    {
      title: 'Create and share your photo stories. ',
      description:
        'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
      cta: 'GET AN INVITE',
      srcArrow: '../../../assets/shared/desktop/arrow.svg',
    },
  ];

  public manImage: Array<{ src: string; className?: string }> = [
    {
      src: '../../../assets/home/desktop/zyro-image.png',
      className: 'img-man-desktop',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
