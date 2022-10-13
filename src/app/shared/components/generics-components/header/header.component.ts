import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public links: Array<{ path: string; content: string }> = [
    { path: '', content: 'HOME' },
    { path: '/stories', content: 'STORIES' },
    { path: '/features', content: 'FEATURES' },
    { path: '/pricing', content: 'PRICING' },
  ];

  public isMenuOpen: boolean = false;

  public srcLogo: string = '../../../assets/shared/desktop/logo.svg';

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
