import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public srcLogo: string = '../../../../../assets/shared/desktop/logo.svg';

  public menuList: string[] = ['STORIES', 'FEATURES', 'PRICING'];

  constructor() {}

  ngOnInit(): void {}
}
