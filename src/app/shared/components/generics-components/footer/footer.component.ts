import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public footerContent: Array<{
    logo: string;
    icons: string[];
    menu: Array<{ path: string; anchor: string }>;
    cta: string;
    arrowIcon: string;
    copy: string;
  }> = [
    {
      logo: '../../../../../assets/shared/desktop/logo-footer.svg',
      icons: [
        '../../../../../assets/shared/desktop/facebook.svg',
        '../../../../../assets/shared/desktop/youtube.svg',
        '../../../../../assets/shared/desktop/twitter.svg',
        '../../../../../assets/shared/desktop/pinterest.svg',
        '../../../../../assets/shared/desktop/instagram.svg',
      ],
      menu: [
        { path: '/', anchor: 'HOME' },
        { path: '/stories', anchor: 'STORIES' },
        { path: '/features', anchor: 'FEATURES' },
        { path: '/pricing', anchor: 'PRICING' },
      ],
      cta: 'GET AN INVITE',
      arrowIcon: '../../../../../assets/shared/desktop/arrow.svg',
      copy: 'Copyright 2022. All Rights Reserved',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
