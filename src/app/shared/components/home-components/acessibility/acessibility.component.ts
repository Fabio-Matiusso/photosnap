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
      title: 'Designed for Everyone ',
      description:
        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
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
