import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibility',
  templateUrl: './acessibility.component.html',
  styleUrls: ['./acessibility.component.scss'],
})
export class AcessibilityComponent implements OnInit {

  public acessibility: Array<{
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
      src: '../../../assets/home/desktop/photograph.png',
      className: 'img-man-desktop',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
