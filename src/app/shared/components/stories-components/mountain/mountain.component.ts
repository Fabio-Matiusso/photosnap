import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.scss'],
})
export class MountainComponent implements OnInit {
  public mountainDatas: Array<{
    introduction: string;
    title: string;
    date: string;
    author: string;
    description: string;
    cta: string;
    arrow: string;
  }> = [
    {
      introduction: 'LAST MONTH’S FEATURED STORY',
      title: 'HAZY FULL MOON OF APPALACHIA',
      date: 'March 2nd 2020',
      author: 'by John Appleseed',
      description:
        'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
      cta: 'READ THE STORY',
      arrow: '../../../../../assets/shared/desktop/arrow.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
